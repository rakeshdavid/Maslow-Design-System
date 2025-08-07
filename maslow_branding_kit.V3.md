# Maslow Design System 3.0

## Complete Developer Guidelines & Implementation Standards

### NextJS + Shadcn + Advanced Animation Stack

---

## Table of Contents

1. [Core Philosophy & Vision](#core-philosophy--vision)
2. [Technology Stack & Dependencies](#technology-stack--dependencies)
3. [Color System Architecture](#color-system-architecture)
4. [Typography System](#typography-system)
5. [Component Design Patterns](#component-design-patterns)
6. [Animation & Motion System](#animation--motion-system)
7. [3D & WebGL Integration](#3d--webgl-integration)
8. [AI Coding Constraints](#ai-coding-constraints)
9. [Component Library](#component-library)
10. [Implementation Examples](#implementation-examples)

---

## Core Philosophy & Vision

### Brand Identity

**"Human-centered AI with living, breathing interfaces"**

Maslow's visual language combines:

- **Organic Flow**: Inspired by the logo's flowing connections
- **Technological Precision**: Gradient-driven, responsive interfaces
- **Emotional Intelligence**: Colors that respond to context and interaction

### Design Principles

1. **Motion-First**: Every element should breathe, not just exist
2. **Gradient-Native**: No flat colors for primary elements
3. **Context-Aware**: Colors adapt to user state and environment
4. **Performance-Conscious**: Beauty without sacrificing speed

---

## Technology Stack & Dependencies

### Required Dependencies

```json
{
    "dependencies": {
        "@radix-ui/react-*": "latest",
        "class-variance-authority": "^0.7.0",
        "clsx": "^2.1.0",
        "framer-motion": "^11.0.0",
        "three": "^0.160.0",
        "@react-three/fiber": "^8.15.0",
        "@react-three/drei": "^9.96.0",
        "leva": "^0.9.35",
        "tailwindcss": "^3.4.0",
        "tailwind-merge": "^2.2.0",
        "@tailwindcss/forms": "^0.5.7",
        "lucide-react": "^0.400.0",
        "sharp": "^0.33.0",
        "gsap": "^3.12.0",
        "@gsap/react": "^2.1.0",
        "lottie-react": "^2.4.0",
        "react-intersection-observer": "^9.5.0",
        "vaul": "^0.9.0"
    }
}
```

### Project Structure

```
/src
  /components
    /ui           # Shadcn components (modified)
    /aurora       # Gradient components
    /glass        # Glassmorphism components
    /3d           # Three.js components
    /motion       # Framer Motion wrappers
  /lib
    /colors       # Color system utilities
    /animations   # Animation presets
    /shaders      # WebGL shaders
  /styles
    /globals.css  # Base styles + CSS variables
    /gradients.css # Gradient definitions
    /animations.css # Keyframe animations
  /hooks
    /useAurora.ts
    /useGradientShift.ts
    /useScrollMorph.ts
```

---

## Color System Architecture

### CSS Variables Setup

```css
/* globals.css */
@layer base {
    :root {
        /* ===== CORE BRAND COLORS ===== */
        /* Primary Palette */
        --maslow-teal: 165 45% 65%; /* #6DC4AD */
        --maslow-teal-v1: 166 41% 62%; /* #73C1AE */
        --maslow-teal-v2: 166 51% 58%; /* #60C3AE */
        --maslow-accent-green: 133 79% 50%; /* #2CD552 */

        /* Secondary Palette */
        --maslow-pink: 327 75% 71%; /* #EE7BB3 */
        --maslow-pink-v: 320 52% 68%; /* #DA85B2 */
        --maslow-purple-deep: 260 67% 28%; /* #401877 */
        --maslow-purple-v1: 310 36% 46%; /* #9D4B8E */
        --maslow-purple-v2: 290 26% 55%; /* #A070A6 */
        --maslow-purple-v3: 290 29% 55%; /* #A56FA8 */

        /* Foundation Colors */
        --maslow-dark-blue: 220 49% 14%; /* #121D35 */
        --maslow-sky-blue: 200 46% 50%; /* #469DBB */
        --maslow-coral: 14 56% 68%; /* #E19379 */
        --maslow-gray-dark: 0 0% 20%; /* #333333 */
        --maslow-gray-mid: 0 0% 65%; /* #A5A5A5 */

        /* Background Colors */
        --maslow-silver: 220 24% 92%; /* #E6EAF3 */
        --maslow-gray-light: 0 0% 93%; /* #EEEEEE */
        --maslow-white: 0 0% 100%; /* #FFFFFF */

        /* Alert Colors */
        --maslow-warning: 35 87% 56%; /* #F3A326 */
        --maslow-warning-v: 34 82% 60%; /* #EBA93D */
        --maslow-bright-yellow: 57 100% 69%; /* #FFF860 */
        --maslow-error: 0 67% 50%; /* #D52C2C */

        /* ===== AURORA GRADIENTS ===== */
        --aurora-angle: 120deg;
        --aurora-primary: linear-gradient(
            var(--aurora-angle),
            hsl(var(--maslow-pink)) 0%,
            hsl(var(--maslow-pink-v)) 15%,
            hsl(var(--maslow-purple-v2)) 35%,
            hsl(var(--maslow-purple-v3)) 50%,
            hsl(var(--maslow-teal)) 70%,
            hsl(var(--maslow-teal-v2)) 85%,
            hsl(var(--maslow-accent-green)) 100%
        );

        --aurora-secondary: linear-gradient(
            135deg,
            hsl(var(--maslow-purple-deep)) 0%,
            hsl(var(--maslow-purple-v1)) 25%,
            hsl(var(--maslow-purple-v2)) 50%,
            hsl(var(--maslow-sky-blue)) 75%,
            hsl(var(--maslow-teal)) 100%
        );

        --aurora-mesh:
            radial-gradient(at 27% 37%, hsl(var(--maslow-pink) / 0.8) 0px, transparent 50%),
            radial-gradient(at 97% 21%, hsl(var(--maslow-teal) / 0.7) 0px, transparent 50%),
            radial-gradient(at 52% 99%, hsl(var(--maslow-purple-v2) / 0.6) 0px, transparent 50%),
            radial-gradient(at 10% 29%, hsl(var(--maslow-accent-green) / 0.5) 0px, transparent 50%);

        /* ===== GLASSMORPHISM ===== */
        --glass-blur: 20px;
        --glass-saturate: 180%;
        --glass-opacity: 0.15;
        --glass-border: hsl(var(--maslow-white) / 0.18);

        /* ===== ANIMATION TIMING ===== */
        --ease-out-expo: cubic-bezier(0.19, 1, 0.22, 1);
        --ease-in-out-expo: cubic-bezier(0.87, 0, 0.13, 1);
        --spring-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);

        /* ===== SHADCN OVERRIDES ===== */
        --background: var(--maslow-silver);
        --foreground: var(--maslow-dark-blue);
        --card: var(--maslow-white);
        --card-foreground: var(--maslow-dark-blue);
        --primary: var(--maslow-teal);
        --primary-foreground: var(--maslow-white);
        --secondary: var(--maslow-pink);
        --secondary-foreground: var(--maslow-white);
        --accent: var(--maslow-purple-v2);
        --accent-foreground: var(--maslow-white);
        --border: var(--maslow-gray-mid);
        --ring: var(--maslow-teal);
    }

    .dark {
        /* Dark mode increases saturation and contrast */
        --aurora-primary: linear-gradient(
            var(--aurora-angle),
            hsl(327 85% 63%) 0%,
            hsl(320 62% 58%) 15%,
            hsl(290 36% 45%) 35%,
            hsl(290 39% 45%) 50%,
            hsl(165 55% 55%) 70%,
            hsl(166 61% 48%) 85%,
            hsl(133 89% 40%) 100%
        );

        --glass-blur: 40px;
        --glass-opacity: 0.25;

        --background: var(--maslow-dark-blue);
        --foreground: var(--maslow-white);
        --card: hsl(220 49% 18%);
        --border: hsl(var(--maslow-gray-dark));
    }
}
```

### Tailwind Configuration

```javascript
// tailwind.config.js
module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        extend: {
            colors: {
                // Map CSS variables to Tailwind
                maslow: {
                    teal: "hsl(var(--maslow-teal))",
                    "teal-v1": "hsl(var(--maslow-teal-v1))",
                    "teal-v2": "hsl(var(--maslow-teal-v2))",
                    "accent-green": "hsl(var(--maslow-accent-green))",
                    pink: "hsl(var(--maslow-pink))",
                    "pink-v": "hsl(var(--maslow-pink-v))",
                    "purple-deep": "hsl(var(--maslow-purple-deep))",
                    "purple-v1": "hsl(var(--maslow-purple-v1))",
                    "purple-v2": "hsl(var(--maslow-purple-v2))",
                    "purple-v3": "hsl(var(--maslow-purple-v3))",
                },
            },
            backgroundImage: {
                "aurora-primary": "var(--aurora-primary)",
                "aurora-secondary": "var(--aurora-secondary)",
                "aurora-mesh": "var(--aurora-mesh)",
            },
            animation: {
                "aurora-shift": "aurora-shift 8s ease-in-out infinite",
                "gradient-x": "gradient-x 15s ease infinite",
                "gradient-y": "gradient-y 15s ease infinite",
                "pulse-glow": "pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
                float: "float 6s ease-in-out infinite",
            },
            keyframes: {
                "aurora-shift": {
                    "0%, 100%": { backgroundPosition: "0% 50%" },
                    "50%": { backgroundPosition: "100% 50%" },
                },
                "gradient-x": {
                    "0%, 100%": { backgroundPosition: "0% 50%" },
                    "50%": { backgroundPosition: "100% 50%" },
                },
                "pulse-glow": {
                    "0%, 100%": { opacity: 1 },
                    "50%": { opacity: 0.6 },
                },
                float: {
                    "0%, 100%": { transform: "translateY(0)" },
                    "50%": { transform: "translateY(-10px)" },
                },
            },
        },
    },
    plugins: [require("@tailwindcss/forms")],
};
```

---

## Typography System

### Font Setup

```css
/* globals.css */
@import url("https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap");
@import url("https://fonts.bunny.net/css?family=graphik:300,400,500,600,700&display=swap");

@layer base {
    body {
        font-family: "Manrope", system-ui, sans-serif;
        font-feature-settings:
            "rlig" 1,
            "calt" 1;
    }

    .font-specialty {
        font-family: "Graphik", system-ui, sans-serif;
    }
}
```

### Typography Scale Component

```typescript
// components/ui/typography.tsx
import { cn } from "@/lib/utils"
import { VariantProps, cva } from "class-variance-authority"

const typographyVariants = cva("", {
  variants: {
    variant: {
      h1: "text-5xl font-extrabold leading-tight tracking-tight md:text-6xl lg:text-7xl",
      h2: "text-4xl font-bold leading-tight tracking-tight md:text-5xl",
      h3: "text-3xl font-semibold leading-snug md:text-4xl",
      h4: "text-2xl font-semibold leading-normal md:text-3xl",
      h5: "text-xl font-semibold leading-normal md:text-2xl",
      h6: "text-lg font-bold uppercase tracking-wide",
      body1: "text-base font-normal leading-relaxed",
      body2: "text-sm font-normal leading-relaxed",
      caption: "text-xs font-medium tracking-wide"
    },
    gradient: {
      true: "bg-aurora-primary bg-clip-text text-transparent animate-gradient-x bg-[length:200%_auto]"
    }
  }
})

export interface TypographyProps extends VariantProps<typeof typographyVariants> {
  children: React.ReactNode
  className?: string
  as?: keyof JSX.IntrinsicElements
}

export function Typography({
  children,
  className,
  variant = "body1",
  gradient = false,
  as: Component = "p"
}: TypographyProps) {
  return (
    <Component className={cn(typographyVariants({ variant, gradient }), className)}>
      {children}
    </Component>
  )
}
```

---

## Component Design Patterns

### Aurora Button Component

```typescript
// components/aurora/aurora-button.tsx
"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { ButtonHTMLAttributes, forwardRef } from "react"

interface AuroraButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost"
  size?: "sm" | "md" | "lg"
  glow?: boolean
}

const AuroraButton = forwardRef<HTMLButtonElement, AuroraButtonProps>(
  ({ className, variant = "primary", size = "md", glow = true, children, ...props }, ref) => {
    const sizeClasses = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg"
    }

    const variantClasses = {
      primary: "bg-aurora-primary text-white",
      secondary: "bg-aurora-secondary text-white",
      ghost: "bg-transparent border-2 border-maslow-teal"
    }

    return (
      <motion.button
        ref={ref}
        className={cn(
          "relative overflow-hidden rounded-lg font-semibold transition-all",
          "bg-[length:200%_200%] animate-aurora-shift",
          sizeClasses[size],
          variantClasses[variant],
          glow && "shadow-[0_0_20px_rgba(109,196,173,0.3)]",
          className
        )}
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        {...props}
      >
        <span className="relative z-10">{children}</span>
        <motion.div
          className="absolute inset-0 bg-white opacity-0"
          whileHover={{ opacity: 0.2 }}
          transition={{ duration: 0.3 }}
        />
      </motion.button>
    )
  }
)

AuroraButton.displayName = "AuroraButton"
export { AuroraButton }
```

### Glass Card Component

```typescript
// components/glass/glass-card.tsx
"use client"

import { motion, useMotionValue, useTransform } from "framer-motion"
import { cn } from "@/lib/utils"
import { useRef } from "react"

interface GlassCardProps {
  children: React.ReactNode
  className?: string
  interactive?: boolean
}

export function GlassCard({ children, className, interactive = true }: GlassCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["7.5deg", "-7.5deg"])
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-7.5deg", "7.5deg"])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current || !interactive) return

    const rect = ref.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    mouseX.set((x / width) - 0.5)
    mouseY.set((y / height) - 0.5)
  }

  return (
    <motion.div
      ref={ref}
      className={cn(
        "relative rounded-2xl p-6",
        "bg-gradient-to-br from-white/10 to-white/5",
        "backdrop-blur-[var(--glass-blur)] backdrop-saturate-[var(--glass-saturate)]",
        "border border-white/20",
        "shadow-[0_8px_32px_rgba(109,196,173,0.15)]",
        "before:absolute before:inset-0 before:rounded-2xl",
        "before:bg-aurora-mesh before:opacity-10",
        className
      )}
      style={{
        rotateX: interactive ? rotateX : 0,
        rotateY: interactive ? rotateY : 0,
        transformStyle: "preserve-3d"
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        mouseX.set(0)
        mouseY.set(0)
      }}
      whileHover={interactive ? { z: 50 } : {}}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
    >
      <div className="relative z-10" style={{ transform: "translateZ(50px)" }}>
        {children}
      </div>
    </motion.div>
  )
}
```

---

## Animation & Motion System

### Framer Motion Presets

```typescript
// lib/animations/motion-presets.ts
export const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
};

export const scaleIn = {
    initial: { scale: 0.9, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0.9, opacity: 0 },
};

export const slideInFromLeft = {
    initial: { x: -100, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: 100, opacity: 0 },
};

export const staggerContainer = {
    animate: {
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.3,
        },
    },
};

export const springTransition = {
    type: "spring",
    stiffness: 400,
    damping: 30,
};

export const auroraGradientAnimation = {
    animate: {
        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        transition: {
            duration: 8,
            ease: "easeInOut",
            repeat: Infinity,
        },
    },
};
```

### Scroll Animations Hook

```typescript
// hooks/useScrollAnimation.ts
import { useRef } from "react";
import { MotionValue, useScroll, useTransform } from "framer-motion";

export function useScrollAnimation() {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.8]);
    const y = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [100, 0, 0, -100]);

    return { ref, opacity, scale, y, scrollYProgress };
}
```

---

## 3D & WebGL Integration

### Three.js Aurora Background

```typescript
// components/3d/aurora-background.tsx
"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { useMemo, useRef } from "react"
import * as THREE from "three"

function AuroraMesh() {
  const mesh = useRef<THREE.Mesh>(null)

  const uniforms = useMemo(() => ({
    u_time: { value: 0 },
    u_colorA: { value: new THREE.Color("#EE7BB3") },
    u_colorB: { value: new THREE.Color("#6DC4AD") },
    u_colorC: { value: new THREE.Color("#A070A6") }
  }), [])

  const vertexShader = `
    varying vec2 vUv;
    varying float vWave;
    uniform float u_time;

    void main() {
      vUv = uv;
      vec3 pos = position;
      float wave = sin(pos.x * 3.0 + u_time) * 0.1;
      pos.z += wave;
      vWave = wave;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
  `

  const fragmentShader = `
    uniform vec3 u_colorA;
    uniform vec3 u_colorB;
    uniform vec3 u_colorC;
    uniform float u_time;
    varying vec2 vUv;
    varying float vWave;

    void main() {
      vec3 color = mix(u_colorA, u_colorB, vUv.x);
      color = mix(color, u_colorC, vWave + 0.5);
      gl_FragColor = vec4(color, 0.8);
    }
  `

  useFrame((state) => {
    if (mesh.current) {
      uniforms.u_time.value = state.clock.elapsedTime
    }
  })

  return (
    <mesh ref={mesh} position={[0, 0, -2]} scale={[4, 4, 1]}>
      <planeGeometry args={[1, 1, 32, 32]} />
      <shaderMaterial
        uniforms={uniforms}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        transparent
      />
    </mesh>
  )
}

export function AuroraBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <AuroraMesh />
      </Canvas>
    </div>
  )
}
```

---

## AI Coding Constraints

### CRITICAL: Anti-Hallucination Rules

````markdown
## ⚠️ STRICT COLOR CONSTRAINTS FOR AI IMPLEMENTATION

### FORBIDDEN ACTIONS ❌

1. **NEVER create new color values**
    - No hex codes outside the 25 defined colors
    - No rgb/hsl values not in the system
    - No opacity variations to create new colors
2. **NEVER use generic color names**
    - No `bg-blue-500` or `text-green-400`
    - Only use `bg-maslow-*` or CSS variables
3. **NEVER use solid colors for primary actions**
    - Primary buttons MUST use gradients
    - Hero sections MUST use aurora effects
    - Cards MUST use glassmorphism

### REQUIRED PATTERNS ✅

1. **ALWAYS use predefined gradients**
    - `bg-aurora-primary` for main CTAs
    - `bg-aurora-secondary` for secondary actions
    - `bg-aurora-mesh` for backgrounds
2. **ALWAYS reference CSS variables**

    ```css
    /* Good */
    background: var(--aurora-primary);
    color: hsl(var(--maslow-dark-blue));

    /* Bad */
    background: linear-gradient(#123456, #789abc);
    color: #333;
    ```
````

3. **ALWAYS use component library**

    ```tsx
    /* Good */
    import { AuroraButton } from "@/components/aurora/aurora-button"
    <AuroraButton variant="primary">Click</AuroraButton>

    /* Bad */
    <button className="bg-blue-500">Click</button>
    ```

### VALIDATION CHECKLIST

Before accepting any AI-generated code:

□ All colors from the 25-color palette only
□ Gradients have 3+ color stops
□ Glass effects on floating elements
□ Motion on interactive elements
□ Dark mode adjustments included
□ Performance optimizations applied
□ Accessibility standards met (WCAG 2.1 AA)

````

---

## Component Library

### Complete Component Index

```typescript
// components/index.ts
// Aurora Components
export { AuroraButton } from './aurora/aurora-button'
export { AuroraCard } from './aurora/aurora-card'
export { AuroraHero } from './aurora/aurora-hero'
export { AuroraNav } from './aurora/aurora-nav'

// Glass Components
export { GlassCard } from './glass/glass-card'
export { GlassModal } from './glass/glass-modal'
export { GlassInput } from './glass/glass-input'

// Motion Components
export { AnimatedSection } from './motion/animated-section'
export { ParallaxContainer } from './motion/parallax-container'
export { MorphingText } from './motion/morphing-text'

// 3D Components
export { AuroraBackground } from './3d/aurora-background'
export { Float3D } from './3d/float-3d'
export { ParticleField } from './3d/particle-field'

// Modified Shadcn Components
export { Button } from './ui/button' // With aurora gradients
export { Card } from './ui/card' // With glassmorphism
export { Input } from './ui/input' // With gradient borders
export { Dialog } from './ui/dialog' // With blur backdrop
````

---

## Implementation Examples

### Hero Section

```typescript
// components/sections/hero.tsx
"use client"

import { motion } from "framer-motion"
import { AuroraButton } from "@/components/aurora/aurora-button"
import { Typography } from "@/components/ui/typography"
import { AuroraBackground } from "@/components/3d/aurora-background"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <AuroraBackground />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-aurora-mesh opacity-40" />

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Typography variant="h1" gradient className="mb-6">
          Human-Centered AI
        </Typography>

        <Typography variant="body1" className="max-w-2xl mx-auto mb-8 text-maslow-gray-dark">
          Experience the future of intelligent interfaces with Maslow's
          living, breathing design system.
        </Typography>

        <div className="flex gap-4 justify-center">
          <AuroraButton size="lg" glow>
            Get Started
          </AuroraButton>
          <AuroraButton variant="ghost" size="lg">
            Learn More
          </AuroraButton>
        </div>
      </motion.div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 left-10 w-64 h-64 bg-aurora-primary rounded-full blur-3xl opacity-20"
        animate={{
          x: [0, 30, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </section>
  )
}
```

### AI Chat Interface

```typescript
// components/chat/ai-message.tsx
"use client"

import { motion } from "framer-motion"
import { GlassCard } from "@/components/glass/glass-card"
import { cn } from "@/lib/utils"

interface AIMessageProps {
  message: string
  isThinking?: boolean
}

export function AIMessage({ message, isThinking }: AIMessageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="flex gap-3"
    >
      {/* Avatar with gradient border */}
      <div className="relative">
        <div className="absolute inset-0 bg-aurora-primary rounded-full animate-pulse-glow" />
        <div className="relative w-10 h-10 bg-maslow-dark-blue rounded-full flex items-center justify-center">
          <span className="text-white text-sm font-bold">AI</span>
        </div>
      </div>

      {/* Message */}
      <GlassCard className={cn(
        "flex-1",
        isThinking && "bg-aurora-primary/5 animate-pulse"
      )}>
        {isThinking ? (
          <div className="flex gap-2">
            <motion.span
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0 }}
            >●</motion.span>
            <motion.span
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
            >●</motion.span>
            <motion.span
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
            >●</motion.span>
          </div>
        ) : (
          <p className="text-maslow-dark-blue dark:text-maslow-white">{message}</p>
        )}
      </GlassCard>
    </motion.div>
  )
}
```

---

## Performance Guidelines

### Optimization Checklist

```typescript
// lib/performance/optimization.ts

// 1. Lazy load heavy components
export const Aurora3D = dynamic(() => import('@/components/3d/aurora-background'), {
  ssr: false,
  loading: () => <div className="animate-pulse bg-aurora-primary/20 h-full" />
})

// 2. Debounce expensive operations
export const useDebounceCallback = (callback: Function, delay: number) => {
  const timeoutRef = useRef<NodeJS.Timeout>()

  return useCallback((...args: any[]) => {
    clearTimeout(timeoutRef.current)
    timeoutRef.current = setTimeout(() => callback(...args), delay)
  }, [callback, delay])
}

// 3. GPU acceleration for animations
export const gpuAccelerated = {
  transform: 'translateZ(0)',
  willChange: 'transform, opacity',
  backfaceVisibility: 'hidden' as const,
  perspective: 1000
}

// 4. Reduce motion for accessibility
export const prefersReducedMotion = () => {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}
```

---

## Testing & Validation

### Component Testing Template

```typescript
// __tests__/aurora-button.test.tsx
import { render, screen } from '@testing-library/react'
import { AuroraButton } from '@/components/aurora/aurora-button'

describe('AuroraButton', () => {
  it('applies gradient background', () => {
    render(<AuroraButton>Test</AuroraButton>)
    const button = screen.getByRole('button')
    expect(button).toHaveClass('bg-aurora-primary')
  })

  it('uses only approved colors', () => {
    const { container } = render(<AuroraButton>Test</AuroraButton>)
    const styles = window.getComputedStyle(container.firstChild as Element)

    // Verify no unauthorized colors
    expect(styles.backgroundColor).not.toMatch(/#(?![6DC4AD|73C1AE|...])/i)
  })
})
```

---

## Deployment Checklist

```markdown
## Pre-Deploy Validation

### Design System Compliance

□ All components use aurora gradients
□ Glass morphism applied to cards/modals
□ 3D elements load asynchronously
□ Motion respects prefers-reduced-motion
□ Dark mode tested and optimized

### Performance Metrics

□ Lighthouse score > 90
□ First Contentful Paint < 1.5s
□ Cumulative Layout Shift < 0.1
□ GPU acceleration on animations
□ Images optimized with next/image

### Accessibility

□ WCAG 2.1 AA compliant
□ Keyboard navigation complete
□ Screen reader tested
□ Focus states visible
□ Color contrast ratios met

### Browser Compatibility

□ Chrome/Edge (latest)
□ Firefox (latest)
□ Safari (14+)
□ Mobile responsive (320px+)
□ P3 color space fallbacks
```

---

## Version History

- **v3.0.0** - Complete aurora gradient system with 3D integration
- **v2.0.0** - Added glassmorphism and Framer Motion
- **v1.0.0** - Initial Shadcn integration

---

## Support & Resources

- **Design Tokens**: `/design-tokens.json`
- **Storybook**: `npm run storybook`
- **Documentation**: `/docs`

---

This comprehensive guide ensures consistent, beautiful, and performant implementations of the Maslow design system. Any deviations from these guidelines should be explicitly approved by the design team.

**Remember: The gradients are not decorative—they are the soul of the Maslow brand.**
