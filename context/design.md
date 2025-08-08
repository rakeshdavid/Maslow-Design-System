# Maslow Design System v3.0 - Design Specifications

## Design Philosophy

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

## Color System

### Core 25-Color Palette

```css
/* Primary Brand Colors */
--maslow-teal: 165 45% 65%; /* #6DC4AD - Primary brand */
--maslow-teal-v1: 166 41% 62%; /* #73C1AE - Hover state */
--maslow-teal-v2: 166 51% 58%; /* #60C3AE - Active state */
--maslow-accent-green: 133 79% 50%; /* #2CD552 - Accent */

/* Secondary Colors */
--maslow-pink: 327 75% 71%; /* #EE7BB3 - Secondary */
--maslow-pink-v: 320 52% 68%; /* #DA85B2 - Pink variant */
--maslow-purple-deep: 260 67% 28%; /* #401877 - Deep purple */
--maslow-purple-v1: 310 36% 46%; /* #9D4B8E - Purple variant 1 */
--maslow-purple-v2: 290 26% 55%; /* #A070A6 - Purple variant 2 */
--maslow-purple-v3: 290 29% 55%; /* #A56FA8 - Purple variant 3 */

/* Foundation Colors */
--maslow-dark-blue: 220 49% 14%; /* #121D35 - Text/foundation */
--maslow-sky-blue: 200 46% 50%; /* #469DBB - Sky accent */
--maslow-coral: 14 56% 68%; /* #E19379 - Coral accent */
--maslow-gray-dark: 0 0% 20%; /* #333333 - Dark gray */
--maslow-gray-mid: 0 0% 65%; /* #A5A5A5 - Mid gray */

/* Background Colors */
--maslow-silver: 220 24% 92%; /* #E6EAF3 - Light background */
--maslow-gray-light: 0 0% 93%; /* #EEEEEE - Light gray */
--maslow-white: 0 0% 100%; /* #FFFFFF - Pure white */

/* Alert Colors */
--maslow-warning: 35 87% 56%; /* #F3A326 - Warning */
--maslow-warning-v: 34 82% 60%; /* #EBA93D - Warning variant */
--maslow-bright-yellow: 57 100% 69%; /* #FFF860 - Bright yellow */
--maslow-error: 0 67% 50%; /* #D52C2C - Error */
```

### Aurora Gradient System

#### Primary Aurora (Main Brand)

7-color gradient flowing through the core brand colors:

- Pink (#EE7BB3) → Pink Variant (#DA85B2) → Purple V2 (#A070A6) → Purple V3 (#A56FA8) → Teal (#6DC4AD) → Teal V2 (#60C3AE) → Accent Green (#2CD552)
- **Angle**: 120deg
- **Usage**: Primary CTAs, hero sections, main brand elements

#### Secondary Aurora (Cool Tones)

5-color gradient with cooler, more professional feel:

- Purple Deep (#401877) → Purple V1 (#9D4B8E) → Purple V2 (#A070A6) → Sky Blue (#469DBB) → Teal (#6DC4AD)
- **Angle**: 135deg
- **Usage**: Secondary actions, supporting elements

#### Aurora Mesh (Background Effect)

Multi-layer radial gradient overlay:

- 4 radial gradients positioned at specific coordinates
- Creates organic, flowing background patterns
- **Usage**: Section backgrounds, overlay effects

#### Warm Aurora (Accent Gradient)

4-color warm gradient for special elements:

- Coral (#E19379) → Warning (#F3A326) → Warning Variant (#EBA93D) → Bright Yellow (#FFF860)
- **Angle**: 45deg
- **Usage**: Accent elements, warm interactions

### Dark Mode Adaptations

- **Enhanced Saturation**: Colors become more vibrant in dark mode
- **Increased Contrast**: Better readability with darker backgrounds
- **Stronger Glass Effects**: More prominent blur and opacity values
- **Gradient Intensity**: Aurora gradients become more pronounced

## Typography System

### Font Stack

- **Primary**: Manrope (200-800 weights) - Modern, clean, highly readable
- **Secondary**: Graphik (300-700 weights) - Specialty font for emphasis
- **Fallbacks**: system-ui, sans-serif

### Typography Scale

```typescript
const typographyVariants = {
    h1: "text-5xl font-extrabold leading-tight tracking-tight md:text-6xl lg:text-7xl",
    h2: "text-4xl font-bold leading-tight tracking-tight md:text-5xl",
    h3: "text-3xl font-semibold leading-snug md:text-4xl",
    h4: "text-2xl font-semibold leading-normal md:text-3xl",
    h5: "text-xl font-semibold leading-normal md:text-2xl",
    h6: "text-lg font-bold uppercase tracking-wide",
    body1: "text-base font-normal leading-relaxed",
    body2: "text-sm font-normal leading-relaxed",
    caption: "text-xs font-medium tracking-wide",
};
```

### Gradient Text

- Aurora gradient applied via `background-clip: text`
- Animated gradient position for living text effect
- Fallback to solid brand colors for accessibility

## Component Design Patterns

### Aurora Button Variants

#### Primary Button

- **Background**: Aurora primary gradient
- **Text**: White
- **States**: Hover (scale 1.05, y: -2px), Active (scale 0.98)
- **Effects**: Glow shadow, shimmer animation
- **Sizes**: sm, md, lg, xl

#### Secondary Button

- **Background**: Aurora secondary gradient
- **Text**: White
- **Effects**: Same interaction patterns as primary
- **Usage**: Supporting actions

#### Ghost Button

- **Background**: Transparent
- **Border**: 2px solid Maslow teal
- **Text**: Maslow teal
- **Hover**: Background teal/10, scale effects
- **Usage**: Tertiary actions, less prominent CTAs

#### Warm Button

- **Background**: Aurora warm gradient
- **Text**: Maslow dark blue (better contrast on warm colors)
- **Usage**: Special accents, seasonal elements

### Glass Card System

#### Glass Intensities

- **Subtle**: Light opacity (15%), subtle blur (20px)
- **Medium**: Balanced opacity (20%), medium blur (30px)
- **Strong**: High opacity (25%), strong blur (40px)

#### Interactive Features

- **3D Tilt**: Mouse tracking with perspective transforms
- **Hover States**: Z-axis translation, enhanced glow
- **Floating Animation**: Gentle y-axis movement

#### Glass Gradient Overlays

- **Aurora**: Primary aurora mesh at low opacity
- **Warm**: Warm gradient overlay for accent cards
- **Cool**: Cool gradient overlay for secondary cards
- **None**: Pure glass effect without gradients

### 3D & WebGL Integration

#### Aurora Background Shaders

```glsl
// Vertex Shader - Creates wave distortion
vec3 pos = position;
float wave = sin(pos.x * 3.0 + u_time) * 0.1;
pos.z += wave;

// Fragment Shader - Blends brand colors
vec3 color = mix(u_colorA, u_colorB, vUv.x);
color = mix(color, u_colorC, vWave + 0.5);
```

#### Performance Optimization

- **GPU Acceleration**: All 3D elements use GPU transforms
- **Lazy Loading**: WebGL components load asynchronously
- **Reduced Motion**: 3D effects disabled based on user preference

## Animation System

### Keyframe Animations

1. **aurora-shift**: Background gradient position animation (8s)
2. **gradient-x**: Horizontal gradient movement (15s)
3. **gradient-y**: Vertical gradient movement (15s)
4. **pulse-glow**: Opacity pulsing for glow effects (2s)
5. **float**: Vertical floating movement (6s)
6. **shimmer**: Shine effect across elements (2s)
7. **morph**: Border radius morphing for organic feel (8s)

### Spring Physics

- **Primary**: `cubic-bezier(0.68, -0.55, 0.265, 1.55)` - Bouncy
- **Smooth**: `cubic-bezier(0.19, 1, 0.22, 1)` - Ease out expo
- **Professional**: `cubic-bezier(0.87, 0, 0.13, 1)` - Ease in-out expo

### Motion Patterns

- **Entrance**: fadeInUp, scaleIn, slideInFromLeft
- **Interaction**: Scale transforms, y-axis translation
- **Micro**: Subtle hover states, focus indicators
- **Scroll**: Parallax effects, stagger reveals

## Glassmorphism Specifications

### Core Glass Properties

```css
background: linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.075) 100%);
backdrop-filter: blur(20px) saturate(180%);
border: 1px solid rgba(255, 255, 255, 0.18);
```

### Glass Variants

- **Card Glass**: Rounded corners (16px), subtle shadow
- **Modal Glass**: Strong blur (40px), enhanced opacity
- **Input Glass**: Border focus states, aurora rim effects
- **Navigation Glass**: Fixed positioning, scroll blur effects

### Aurora Mesh Integration

- Aurora mesh overlay at 10% opacity
- Creates dynamic, living background effect
- Synchronized with main aurora animations

## Accessibility Design Standards

### Color Contrast

- **Normal Text**: 4.5:1 minimum contrast ratio
- **Large Text**: 3:1 minimum contrast ratio
- **Focus States**: High contrast borders and outlines
- **Error States**: Color + iconography, never color alone

### Motion Accessibility

- **Reduced Motion**: All animations respect user preference
- **Focus Management**: Logical tab order, visible focus
- **Screen Readers**: Proper ARIA labels and descriptions
- **Keyboard Navigation**: All interactive elements accessible

### Responsive Design

- **Mobile First**: Optimized for 320px+ viewports
- **Touch Targets**: 44px minimum touch target size
- **Readable Text**: Appropriate font sizes across devices
- **Performance**: Optimized animations for mobile devices

## Implementation Guidelines

### Component Architecture

1. **Extend Base Components**: Build on existing Untitled UI foundation
2. **Prop Consistency**: Follow established patterns for props
3. **Default Values**: Sensible defaults for all optional props
4. **TypeScript**: Comprehensive type definitions
5. **Documentation**: JSDoc comments for all public APIs

### CSS Organization

1. **CSS Variables**: Use custom properties for all dynamic values
2. **Utility Classes**: Create reusable utility classes for common patterns
3. **Component Styles**: Scoped styles within component files
4. **Theme Integration**: Seamless dark/light mode switching

### Performance Considerations

1. **Bundle Size**: Minimize impact on build size
2. **Runtime Performance**: 60fps animations on target devices
3. **Memory Usage**: Efficient cleanup of 3D resources
4. **Progressive Enhancement**: Graceful degradation for older browsers
