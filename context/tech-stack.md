# Technology Stack & Dependencies

## Core Framework & Language

- **React**: v19.1.0 - Latest React with concurrent features
- **TypeScript**: v5.8.3 - Strict mode enabled for type safety
- **Next.js**: v15.3.5 - Framework for production builds (future deployment)

## Styling & Design System

- **Tailwind CSS**: v4.1.11 - Utility-first CSS with @theme directive support
- **CSS Custom Properties**: Extensive use for dynamic theming
- **PostCSS**: v8.5.6 - CSS processing and optimization

## Animation & Motion

- **Framer Motion**: v12.23.12 - Primary animation library for React components
- **GSAP**: v3.13.0 - Advanced animations and performance optimization
- **@gsap/react**: v2.1.2 - React integration for GSAP

## 3D & WebGL Graphics

- **Three.js**: v0.179.1 - Core 3D graphics library
- **@react-three/fiber**: v9.3.0 - React renderer for Three.js
- **@react-three/drei**: v10.6.1 - Useful helpers and abstractions
- **Leva**: v0.10.0 - GUI controls for debugging 3D scenes

## Component Architecture

- **React Aria**: v3.41.1 - Accessibility primitives
- **React Aria Components**: v1.10.1 - Pre-built accessible components
- **Class Variance Authority**: v0.7.1 - Type-safe component variants
- **clsx**: v2.1.1 - Conditional className utility
- **Tailwind Merge**: v3.3.1 - Tailwind class conflict resolution

## Additional Libraries

- **Lottie React**: v2.4.1 - Vector animation rendering
- **React Intersection Observer**: v9.16.0 - Scroll-triggered animations
- **React Hook Form**: v7.60.0 - Form management (existing in project)
- **Vaul**: v1.1.2 - Drawer/modal components
- **Sonner**: v2.0.6 - Toast notifications

## Development & Build Tools

- **Vite**: v7.1.0 - Fast build tool and dev server
- **Storybook**: v9.1.1 - Component development and documentation
- **ESLint**: v9.30.1 - Code linting and quality
- **Prettier**: v3.6.2 - Code formatting
- **TypeScript ESLint**: v8.36.0 - TypeScript-specific linting rules

## Tailwind CSS Plugins

- **@tailwindcss/typography**: v0.5.16 - Typography utilities
- **tailwindcss-animate**: v1.0.7 - Animation utilities
- **tailwindcss-react-aria-components**: v2.0.0 - React Aria integration
- **@tailwindcss/postcss**: v4.1.11 - PostCSS integration
- **@tailwindcss/vite**: v4.1.11 - Vite integration

## Package Management

- **npm**: Primary package manager
- **Installation Flag**: `--legacy-peer-deps` required for all Maslow-related packages due to Tailwind CSS v4.1 compatibility

## Version Compatibility Notes

### React v19.1.0 Compatibility

- **Framer Motion**: v12.23.12+ required for React 19 support
- **React Aria**: v3.41.1+ provides React 19 compatibility
- **Three.js Ecosystem**: All packages tested and compatible

### Tailwind CSS v4.1 Impact

- **New @theme Directive**: Replaces traditional theme extension
- **CSS Variables**: Native support for CSS custom properties
- **Peer Dependency Conflicts**: Requires --legacy-peer-deps for installation
- **PostCSS Integration**: Uses @tailwindcss/postcss plugin

### TypeScript Strict Mode

- **Strict Type Checking**: Enabled across all components
- **No Implicit Any**: All types explicitly defined
- **Exact Optional Property Types**: Strict prop type checking
- **No Unused Locals**: Clean code enforcement

## Performance Optimizations

### Bundle Size Management

```json
// Webpack Bundle Analyzer recommendations
"three": "0.179.1",           // Tree-shakeable imports
"framer-motion": "12.23.12",  // Optimized for production builds
"@react-three/fiber": "9.3.0" // Minimal runtime overhead
```

### Animation Performance

- **GPU Acceleration**: All animations use transform/opacity only
- **Will-Change**: Applied strategically to animated elements
- **RequestAnimationFrame**: Used for smooth 60fps animations
- **Reduced Motion**: Comprehensive support for accessibility

### 3D Performance

- **Lazy Loading**: WebGL components loaded asynchronously
- **Memory Management**: Proper cleanup of Three.js resources
- **LOD (Level of Detail)**: Simple geometry for background elements
- **Culling**: Frustum culling for off-screen objects

## Development Commands

### Core Development

```bash
npm run storybook          # Start component development server
npm run build-storybook    # Build static Storybook
npm run type-check         # TypeScript validation
npm run lint               # ESLint code quality check
npm run prettier           # Code formatting
npm run test               # Full test suite (type-check + lint + prettier)
```

### Installation Commands

```bash
# Required for all new Maslow dependencies
npm install --legacy-peer-deps [package-name]

# Example installations
npm install --legacy-peer-deps framer-motion@12.23.12
npm install --legacy-peer-deps three@0.179.1
npm install --legacy-peer-deps @react-three/fiber@9.3.0
```

## Browser Support Matrix

### Primary Support (Fully Tested)

- **Chrome**: 120+ (Chromium-based browsers)
- **Firefox**: 120+
- **Safari**: 17+ (WebGL 2.0 required)
- **Edge**: 120+ (Chromium-based)

### Mobile Support

- **iOS Safari**: 17+ (WebGL and backdrop-filter support)
- **Chrome Mobile**: 120+
- **Firefox Mobile**: 120+
- **Samsung Internet**: 23+

### Feature Requirements

- **WebGL 2.0**: Required for Three.js aurora backgrounds
- **CSS backdrop-filter**: Required for glassmorphism effects
- **CSS Custom Properties**: Required for theming system
- **IntersectionObserver**: Required for scroll animations

### Fallback Strategy

```css
/* Glassmorphism fallback */
@supports not (backdrop-filter: blur(10px)) {
    .glass {
        background: rgba(255, 255, 255, 0.9);
    }
}

/* WebGL fallback */
@supports not (display: block) {
    .aurora-background {
        background: var(--aurora-primary);
    }
}
```

## Configuration Files

### TypeScript Configuration

```json
// tsconfig.json
{
    "compilerOptions": {
        "strict": true,
        "noEmit": true,
        "esModuleInterop": true,
        "moduleResolution": "bundler",
        "allowSyntheticDefaultImports": true,
        "jsx": "react-jsx"
    }
}
```

### ESLint Configuration

```json
// .eslintrc.js
{
    "extends": ["next/core-web-vitals", "@typescript-eslint/recommended", "prettier"],
    "plugins": ["@typescript-eslint", "unused-imports", "simple-import-sort"]
}
```

### Prettier Configuration

```json
// prettier.config.js
{
    "semi": true,
    "trailingComma": "es5",
    "singleQuote": false,
    "tabWidth": 4,
    "plugins": ["prettier-plugin-tailwindcss"]
}
```

## Environment Variables

```env
# Development
NODE_ENV=development
NEXT_PUBLIC_ENV=development

# Storybook
STORYBOOK_PORT=6006

# Performance monitoring (optional)
ANALYZE_BUNDLE=false
```

## Build Optimization

### Webpack Configuration

```javascript
// next.config.js
const config = {
    experimental: {
        optimizePackageImports: ["framer-motion", "three"],
    },
    webpack: (config) => {
        config.module.rules.push({
            test: /\.(glsl|vs|fs)$/,
            use: "raw-loader",
        });
        return config;
    },
};
```

### Tree Shaking

- **Three.js**: Import specific modules only
- **Framer Motion**: Use targeted imports
- **Lodash**: Avoid full library imports
- **React Aria**: Import components individually

## Security Considerations

- **Dependencies**: Regular updates for security patches
- **Bundle Analysis**: Monitor for vulnerable packages
- **CSP Headers**: Content Security Policy for production
- **HTTPS**: Required for WebGL and modern features

## Monitoring & Performance

- **Lighthouse**: Target score >90 for all metrics
- **Web Vitals**: Monitor CLS, LCP, FID
- **Bundle Analyzer**: Track bundle size impact
- **Performance Observer**: Monitor animation performance

---

_This tech stack is optimized for modern web development with focus on performance, accessibility, and developer experience. All dependencies are regularly updated and security-audited._
