"use client";

import { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useReducedMotion } from "@/hooks/maslow/use-reduced-motion";
import { cn } from "@/utils/maslow/cn";

interface AuroraMeshProps {
    intensity?: number;
}

function AuroraMesh({ intensity = 0.6 }: AuroraMeshProps) {
    const meshRef = useRef<THREE.Mesh>(null);
    const prefersReducedMotion = useReducedMotion();

    // Maslow color palette in Three.js format
    const colors = useMemo(
        () => ({
            pink: new THREE.Color("#EE7BB3"), // maslow-pink
            teal: new THREE.Color("#6DC4AD"), // maslow-teal
            purple: new THREE.Color("#A070A6"), // maslow-purple-v2
            green: new THREE.Color("#2CD552"), // maslow-accent-green
            blue: new THREE.Color("#469DBB"), // maslow-sky-blue
        }),
        [],
    );

    const uniforms = useMemo(
        () => ({
            u_time: { value: 0 },
            u_intensity: { value: intensity },
            u_colorA: { value: colors.pink },
            u_colorB: { value: colors.teal },
            u_colorC: { value: colors.purple },
            u_colorD: { value: colors.green },
            u_colorE: { value: colors.blue },
            u_mouse: { value: new THREE.Vector2(0.5, 0.5) },
        }),
        [intensity, colors],
    );

    const vertexShader = `
    varying vec2 vUv;
    varying vec3 vPosition;
    uniform float u_time;
    uniform float u_intensity;
    
    // Noise function
    vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
    vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
    vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
    vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }
    
    float snoise(vec3 v) {
      const vec2 C = vec2(1.0/6.0, 1.0/3.0);
      const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
      vec3 i = floor(v + dot(v, C.yyy));
      vec3 x0 = v - i + dot(i, C.xxx);
      vec3 g = step(x0.yzx, x0.xyz);
      vec3 l = 1.0 - g;
      vec3 i1 = min(g.xyz, l.zxy);
      vec3 i2 = max(g.xyz, l.zxy);
      vec3 x1 = x0 - i1 + C.xxx;
      vec3 x2 = x0 - i2 + C.yyy;
      vec3 x3 = x0 - D.yyy;
      i = mod289(i);
      vec4 p = permute(permute(permute(i.z + vec4(0.0, i1.z, i2.z, 1.0)) + i.y + vec4(0.0, i1.y, i2.y, 1.0)) + i.x + vec4(0.0, i1.x, i2.x, 1.0));
      float n_ = 0.142857142857;
      vec3 ns = n_ * D.wyz - D.xzx;
      vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
      vec4 x_ = floor(j * ns.z);
      vec4 y_ = floor(j - 7.0 * x_);
      vec4 x = x_ * ns.x + ns.yyyy;
      vec4 y = y_ * ns.x + ns.yyyy;
      vec4 h = 1.0 - abs(x) - abs(y);
      vec4 b0 = vec4(x.xy, y.xy);
      vec4 b1 = vec4(x.zw, y.zw);
      vec4 s0 = floor(b0) * 2.0 + 1.0;
      vec4 s1 = floor(b1) * 2.0 + 1.0;
      vec4 sh = -step(h, vec4(0.0));
      vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
      vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;
      vec3 p0 = vec3(a0.xy, h.x);
      vec3 p1 = vec3(a0.zw, h.y);
      vec3 p2 = vec3(a1.xy, h.z);
      vec3 p3 = vec3(a1.zw, h.w);
      vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
      p0 *= norm.x;
      p1 *= norm.y;
      p2 *= norm.z;
      p3 *= norm.w;
      vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
      m = m * m;
      return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
    }
    
    void main() {
      vUv = uv;
      vPosition = position;
      
      vec3 pos = position;
      
      // Create flowing wave pattern
      float noise1 = snoise(vec3(pos.x * 2.0, pos.y * 2.0, u_time * 0.1));
      float noise2 = snoise(vec3(pos.x * 3.0 + u_time * 0.05, pos.y * 3.0, u_time * 0.1));
      
      pos.z += (noise1 * 0.1 + noise2 * 0.05) * u_intensity;
      
      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
  `;

    const fragmentShader = `
    uniform vec3 u_colorA;
    uniform vec3 u_colorB; 
    uniform vec3 u_colorC;
    uniform vec3 u_colorD;
    uniform vec3 u_colorE;
    uniform float u_time;
    uniform float u_intensity;
    uniform vec2 u_mouse;
    
    varying vec2 vUv;
    varying vec3 vPosition;
    
    void main() {
      vec2 uv = vUv;
      
      // Create flowing gradient pattern
      float pattern1 = sin(uv.x * 3.14159 + u_time * 0.5) * 0.5 + 0.5;
      float pattern2 = cos(uv.y * 3.14159 + u_time * 0.3) * 0.5 + 0.5;
      float pattern3 = sin((uv.x + uv.y) * 2.0 + u_time * 0.2) * 0.5 + 0.5;
      
      // Mouse interaction
      vec2 mouseInfluence = (u_mouse - uv) * 2.0;
      float mouseDist = length(mouseInfluence);
      float mouseEffect = exp(-mouseDist * 3.0) * 0.3;
      
      // Blend colors based on patterns
      vec3 color1 = mix(u_colorA, u_colorB, pattern1);
      vec3 color2 = mix(u_colorC, u_colorD, pattern2); 
      vec3 color3 = mix(color1, color2, pattern3);
      vec3 finalColor = mix(color3, u_colorE, mouseEffect);
      
      // Add shimmer effect
      float shimmer = sin(uv.x * 10.0 + u_time * 2.0) * 0.1 + 0.9;
      finalColor *= shimmer;
      
      // Fade edges for seamless blending
      float fadeX = smoothstep(0.0, 0.1, uv.x) * smoothstep(1.0, 0.9, uv.x);
      float fadeY = smoothstep(0.0, 0.1, uv.y) * smoothstep(1.0, 0.9, uv.y);
      float fade = fadeX * fadeY;
      
      gl_FragColor = vec4(finalColor, 0.6 * fade * u_intensity);
    }
  `;

    useFrame((state) => {
        if (!meshRef.current || prefersReducedMotion) return;

        uniforms.u_time.value = state.clock.elapsedTime;

        // Mouse tracking
        if (state.mouse) {
            uniforms.u_mouse.value.x = (state.mouse.x + 1) * 0.5;
            uniforms.u_mouse.value.y = (state.mouse.y + 1) * 0.5;
        }
    });

    return (
        <mesh ref={meshRef} position={[0, 0, -5]} scale={[6, 6, 1]}>
            <planeGeometry args={[1, 1, 64, 64]} />
            <shaderMaterial
                uniforms={uniforms}
                vertexShader={vertexShader}
                fragmentShader={fragmentShader}
                transparent
                depthWrite={false}
                blending={THREE.AdditiveBlending}
            />
        </mesh>
    );
}

function LoadingFallback() {
    return <div className="from-maslow-pink/20 via-maslow-purple-v2/20 to-maslow-teal/20 absolute inset-0 animate-pulse bg-gradient-to-br" />;
}

export interface AuroraBackgroundProps {
    /** Background intensity */
    intensity?: number;
    /** Custom className */
    className?: string;
    /** Enable/disable the 3D background */
    enabled?: boolean;
}

export function AuroraBackground({ intensity = 0.6, className, enabled = true }: AuroraBackgroundProps) {
    const prefersReducedMotion = useReducedMotion();

    if (!enabled || prefersReducedMotion) {
        return <div className={cn("bg-aurora-mesh fixed inset-0 -z-10 opacity-20", className)} />;
    }

    return (
        <div className={cn("fixed inset-0 -z-10", className)}>
            <Suspense fallback={<LoadingFallback />}>
                <Canvas
                    camera={{ position: [0, 0, 1], fov: 75 }}
                    dpr={[1, 2]}
                    performance={{ min: 0.5 }}
                    gl={{
                        antialias: false,
                        alpha: true,
                        powerPreference: "high-performance",
                    }}
                >
                    <AuroraMesh intensity={intensity} />
                </Canvas>
            </Suspense>
        </div>
    );
}
