# System Architecture

## Overall Architecture Strategy

### Integration Approach: **Additive Architecture**
The Maslow Design System v3.0 integration follows an **additive architecture pattern** - we preserve the entire existing Untitled UI React component library while adding Maslow-branded variants alongside.

```
Existing Untitled UI Components (Unchanged)
├── /components/base/buttons/button.tsx
├── /components/ui/card.tsx
├── /components/ui/input.tsx
└── ... (all existing components preserved)

New Maslow Components (Added)
├── /components/maslow/aurora/aurora-button.tsx    # Extends base/Button
├── /components/maslow/glass/glass-card.tsx        # Extends ui/Card  
├── /components/maslow/3d/aurora-background.tsx    # New WebGL component
└── ... (new Maslow variants)
```

### Key Architectural Decisions

#### 1. Component Extension Pattern
```typescript
// Pattern: Extend existing components rather than replace
import { Button, type ButtonProps } from "@/components/base/buttons/button";

export interface AuroraButtonProps extends ButtonProps {
    variant?: "primary" | "secondary" | "ghost" | "warm";
    glow?: boolean;
    morphing?: boolean;
}

export const AuroraButton = forwardRef<HTMLButtonElement, AuroraButtonProps>(
    ({ className, variant = "primary", ...props }, ref) => {
        return (
            <motion.div>
                <Button ref={ref} className={cn(auroraVariants[variant], className)}>
                    {children}
                </Button>
            </motion.div>
        );
    }
);
```

**Benefits:**
- Zero breaking changes to existing code
- Maintains API compatibility
- Preserves existing functionality
- Allows gradual migration

#### 2. CSS Architecture: Custom Properties + Tailwind

```css
/* /styles/maslow.css - Core design system */
@theme {
    /* Maslow color palette as CSS custom properties */
    --maslow-teal: 165 45% 65%;
    --aurora-primary: linear-gradient(...);
    
    /* Utility class definitions */
    --color-aurora-primary: var(--aurora-primary);
}

@layer utilities {
    .bg-aurora-primary {
        background: var(--aurora-primary);
        background-size: 200% 200%;
    }
    
    .glass {
        background: linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.075) 100%);
        backdrop-filter: blur(var(--glass-blur)) saturate(var(--glass-saturate));
    }
}
```

**Benefits:**
- Dynamic theming via CSS variables
- Tailwind CSS v4.1 @theme directive support
- Easy dark mode implementation
- Performance optimized

## Directory Structure

### Project Organization
```
/Users/kesh/Documents/Github -Local/react/
├── .claude/                      # Claude Code context management
│   ├── CLAUDE.md                 # Main project context  
│   └── CLAUDE.local.md           # Local development notes
├── context/                      # Project specifications
│   ├── requirements.md           # What we're building
│   ├── design.md                # How it looks/works  
│   ├── tech-stack.md            # Technology decisions
│   ├── architecture.md          # This file
│   └── task-list.md             # Breakdown of work
├── components/
│   ├── base/                    # Existing Untitled UI (unchanged)
│   ├── ui/                      # Existing Untitled UI (unchanged)
│   └── maslow/                  # New Maslow components
│       ├── aurora/              # Aurora gradient components
│       │   ├── aurora-button.tsx
│       │   └── aurora-button.story.tsx
│       ├── glass/               # Glassmorphism components  
│       │   ├── glass-card.tsx
│       │   └── glass-card.story.tsx
│       ├── 3d/                  # WebGL/Three.js components
│       │   └── aurora-background.tsx
│       ├── index.ts             # Barrel exports
│       ├── maslow-showcase.demo.tsx
│       └── maslow-showcase.story.tsx
├── hooks/
│   ├── maslow/                  # Maslow-specific hooks
│   │   ├── use-aurora.ts        # Aurora background controls
│   │   └── use-reduced-motion.ts # Accessibility support  
│   └── ... (existing hooks)
├── utils/
│   ├── maslow/                  # Maslow utilities
│   │   └── cn.ts                # className utility
│   └── ... (existing utils)
├── styles/
│   ├── globals.css              # Base styles + imports
│   ├── maslow.css               # Complete Maslow design system
│   ├── theme.css                # Existing theme (unchanged)  
│   └── typography.css           # Existing typography (unchanged)
├── .changelog.md                # Implementation history
├── .plan.md                     # Future roadmap + analysis
└── maslow_branding_kit.V3.md    # Original design specifications
```

### Component Architecture Layers

#### Layer 1: Base Components (Existing)
- **Purpose**: Core UI primitives from Untitled UI
- **Examples**: Button, Card, Input, Dialog
- **Status**: Completely unchanged, preserved as-is
- **Usage**: Direct imports for non-Maslow use cases

#### Layer 2: Maslow Extensions (New)
- **Purpose**: Maslow-branded variants with aurora/glass effects
- **Pattern**: Extend Layer 1 components with additional props
- **Examples**: AuroraButton extends Button, GlassCard extends Card
- **Usage**: Import for Maslow-branded interfaces

#### Layer 3: Pure Maslow Components (New)
- **Purpose**: Components unique to Maslow (no base equivalent)
- **Examples**: AuroraBackground (WebGL), Typography (gradient text)
- **Pattern**: Built from scratch following Maslow guidelines
- **Usage**: Maslow-specific functionality

#### Layer 4: Composition Components (Future)
- **Purpose**: Pre-composed templates and sections
- **Examples**: AuroraHero, AI Chat Interface
- **Pattern**: Combine multiple Layer 2/3 components
- **Usage**: Rapid development of Maslow interfaces

## Data Flow & State Management

### Component State Architecture
```typescript
// Local component state for UI interactions
const [isHovered, setIsHovered] = useState(false);
const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

// Motion values for animations (Framer Motion)
const mouseX = useMotionValue(0);
const mouseY = useMotionValue(0);
const rotateX = useTransform(mouseY, [-0.5, 0.5], [7.5, -7.5]);

// Global state for system preferences
const prefersReducedMotion = useReducedMotion();
const { auroraIntensity, setAuroraIntensity } = useAurora();
```

### No Global State Management
- **Decision**: No Redux/Zustand required for current scope
- **Rationale**: Components are self-contained with local state only
- **Future**: Can be added if complex cross-component state needed

### Animation State Management
```typescript
// Framer Motion handles animation state internally
<motion.div
    animate={{ opacity: 1, scale: 1 }}
    transition={{ type: "spring", stiffness: 400 }}
    whileHover={{ scale: 1.05 }}
/>

// Three.js state managed via React Three Fiber
function AuroraMesh() {
    const meshRef = useRef<THREE.Mesh>(null);
    useFrame((state) => {
        if (meshRef.current) {
            uniforms.u_time.value = state.clock.elapsedTime;
        }
    });
}
```

## Performance Architecture

### Bundle Splitting Strategy
```typescript
// Lazy loading for heavy 3D components
const AuroraBackground = lazy(() => import('@/components/maslow/3d/aurora-background'));

// Dynamic imports for code splitting
const ThreeJSComponents = dynamic(() => import('./three-components'), {
    ssr: false,
    loading: () => <div className="animate-pulse bg-aurora-primary/20 h-full" />
});
```

### Animation Performance
- **GPU Acceleration**: All animations use transform/opacity only
- **RAF Optimization**: RequestAnimationFrame for smooth 60fps
- **Will-Change**: Strategic use of will-change property
- **Reduced Motion**: Comprehensive accessibility support

### Memory Management
```typescript
// Three.js cleanup
useEffect(() => {
    return () => {
        // Cleanup geometry, materials, textures
        geometry?.dispose();
        material?.dispose();
        renderer?.dispose();
    };
}, []);

// Framer Motion cleanup (automatic)
// React handles cleanup of motion components
```

## Integration Patterns

### Existing Component Integration
```typescript
// Existing component usage (unchanged)
import { Button } from "@/components/base/buttons/button";
<Button variant="primary">Regular Button</Button>

// Maslow variant usage (new)
import { AuroraButton } from "@/components/maslow/aurora/aurora-button";
<AuroraButton variant="primary" glow>Aurora Button</AuroraButton>

// Both can coexist in the same interface
<div>
    <Button variant="secondary">Cancel</Button>
    <AuroraButton variant="primary" glow>Continue</AuroraButton>
</div>
```

### CSS Integration Pattern
```css
/* Existing Untitled UI styles (unchanged) */
.btn-primary { background: blue; }

/* New Maslow utilities (additive) */
.bg-aurora-primary { background: var(--aurora-primary); }
.glass { backdrop-filter: blur(20px); }

/* No conflicts - different class names */
```

### Storybook Integration
```typescript
// Existing Untitled UI stories (unchanged)
export default {
    title: "UI/Button",
    component: Button
};

// New Maslow stories (separate namespace)  
export default {
    title: "Maslow/Aurora/AuroraButton",
    component: AuroraButton
};
```

## Scalability Architecture

### Horizontal Scaling (More Components)
```
Current: 3 Maslow components implemented
├── AuroraButton
├── GlassCard  
└── AuroraBackground

Future: 12+ components planned
├── Typography (Phase 11)
├── Motion presets (Phase 12)
├── AuroraCard, GlassModal, GlassInput (Phase 13)
├── AnimatedSection, MorphingText, Float3D (Phase 14)
└── Templates & Examples (Phase 15)
```

### Vertical Scaling (Enhanced Features)
- **Animation Complexity**: From simple hover to complex 3D interactions
- **Accessibility**: From basic to WCAG 2.1 AA compliance
- **Performance**: From functional to optimized (60fps, <1.5s load)
- **Theming**: From static to dynamic (real-time theme switching)

### Code Organization Scaling
```typescript
// Current simple structure
/components/maslow/aurora/aurora-button.tsx

// Future complex structure  
/components/maslow/
├── aurora/
│   ├── buttons/
│   │   ├── aurora-button.tsx
│   │   ├── aurora-icon-button.tsx
│   │   └── aurora-button-group.tsx
│   ├── cards/
│   │   ├── aurora-card.tsx
│   │   └── aurora-hero-card.tsx
│   └── navigation/
│       ├── aurora-nav.tsx
│       └── aurora-breadcrumb.tsx
```

## Error Handling Architecture

### Component Error Boundaries
```typescript
// Error boundary for 3D components
class WebGLErrorBoundary extends Component {
    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        if (error.message.includes('WebGL')) {
            // Fallback to CSS gradient background
            this.setState({ hasWebGLError: true });
        }
    }
    
    render() {
        if (this.state.hasWebGLError) {
            return <div className="bg-aurora-primary h-full" />;
        }
        return this.props.children;
    }
}
```

### Graceful Degradation
```typescript
// Feature detection for advanced effects
const supportsBackdropFilter = CSS.supports('backdrop-filter', 'blur(1px)');
const supportsWebGL = !!window.WebGLRenderingContext;

// Conditional rendering
{supportsBackdropFilter ? (
    <GlassCard intensity="strong">Content</GlassCard>
) : (
    <Card className="bg-white/90">Content</Card>
)}
```

### Runtime Error Recovery
```typescript
// Animation fallbacks
const prefersReducedMotion = useReducedMotion();
const shouldAnimate = !prefersReducedMotion && supportsAnimations;

// Automatic fallback chain
<AuroraBackground 
    fallback={<div className="bg-aurora-primary" />}
    onError={() => setUseWebGL(false)}
/>
```

## Security Architecture

### XSS Prevention
- **Content Security Policy**: Strict CSP headers in production
- **Input Sanitization**: All user content sanitized
- **Safe innerHTML**: No dangerouslySetInnerHTML usage

### Dependency Security  
- **Regular Audits**: npm audit run before each release
- **Known Vulnerabilities**: Monitor security advisories
- **Minimal Dependencies**: Only essential packages included

### WebGL Security
- **Context Validation**: Validate WebGL context before use
- **Shader Compilation**: Safe shader compilation with error handling
- **Resource Limits**: Prevent excessive memory usage

## Testing Architecture

### Component Testing Strategy
```typescript
// Unit tests for component logic
describe('AuroraButton', () => {
    it('applies correct aurora gradient', () => {
        render(<AuroraButton variant="primary">Test</AuroraButton>);
        expect(screen.getByRole('button')).toHaveClass('bg-aurora-primary');
    });
    
    it('respects reduced motion preferences', () => {
        mockReducedMotion(true);
        render(<AuroraButton>Test</AuroraButton>);
        expect(screen.getByRole('button')).not.toHaveClass('animate-aurora-shift');
    });
});
```

### Visual Regression Testing
- **Storybook Snapshots**: Screenshot testing for visual consistency  
- **Cross-Browser Testing**: Automated testing across target browsers
- **Responsive Testing**: Viewport testing for mobile/desktop

### Performance Testing
- **Lighthouse CI**: Automated performance audits
- **Animation Profiling**: 60fps validation for all animations  
- **Bundle Analysis**: Size impact monitoring

---

*This architecture is designed for maintainability, scalability, and performance while preserving the existing codebase integrity. All architectural decisions prioritize developer experience and end-user performance.*