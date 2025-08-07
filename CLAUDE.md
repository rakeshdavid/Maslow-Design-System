# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Untitled UI React is a comprehensive open-source React component library built with:

- **React 19.1** and **TypeScript 5.8**
- **Tailwind CSS v4.1** for styling
- **React Aria** components for accessibility
- **Storybook** for component development and testing
- **Next.js 15.3** for modern React features

The library provides over 100+ UI components organized into three main categories:

- `components/base/` - Core UI primitives (buttons, inputs, forms, etc.)
- `components/application/` - Complex components (tables, navigation, modals, etc.)
- `components/foundations/` - Basic elements (icons, logos, etc.)

## Development Commands

### Core Commands

```bash
# Development and testing
npm run storybook          # Start Storybook dev server on port 6006
npm run build-storybook    # Build static Storybook
npm run test              # Run all checks (type-check + lint + prettier)

# Code quality
npm run lint              # Fix ESLint issues in components/
npm run lint:check        # Check ESLint issues without fixing
npm run type-check        # Run TypeScript type checking
npm run prettier          # Format code with Prettier
npm run prettier:check    # Check Prettier formatting
```

### Testing Approach

- No unit test framework configured - this is a component library focused on visual testing through Storybook
- Always run `npm run test` before committing changes (runs type-check + lint + prettier checks)
- Each component has corresponding `.demo.tsx` and `.story.tsx` files for Storybook integration

## Code Architecture & Patterns

### Component Structure

Components follow a consistent pattern:

- **Base components**: Core UI primitives in `components/base/`
- **Application components**: Complex components in `components/application/`
- **Shared assets**: Reusable elements in `components/shared-assets/`

### Styling System

- **CSS-in-JS approach**: Components use the `styles` object pattern with `sortCx()` utility
- **Tailwind CSS v4.1**: Extensive use of utility classes with custom design tokens
- **Style organization**: Styles are organized by `common`, `sizes`, and `colors/variants`
- **Responsive design**: Built-in responsive utilities and breakpoint management

### Key Utilities

- `@/utils/cx.ts` - Enhanced Tailwind class merging with `twMerge`
- `@/utils/sortCx()` - Helper for organizing style objects (IntelliSense compatibility)
- `@/utils/is-react-component.ts` - Runtime component type checking
- `@/hooks/` - Custom React hooks for common functionality

### TypeScript Patterns

- Extensive use of TypeScript with strict mode enabled
- Generic props interfaces for reusable components
- Union types for component variants
- Path aliases configured: `@/*`, `@/components/*`, `@/utils/*`, `@/hooks/*`

### React Aria Integration

- All interactive components built on React Aria foundation
- Accessibility-first approach with ARIA attributes
- Keyboard navigation and screen reader support built-in
- Form components use React Aria's form primitives

### Component API Patterns

- Consistent prop naming: `size`, `color`, `isDisabled`, `isLoading`
- Icon props: `iconLeading`, `iconTrailing` (supports both React components and elements)
- Polymorphic components: Many components can render as different HTML elements
- Compound component patterns for complex UI (e.g., Table, Dropdown)

### File Naming Conventions

- Component files: `component-name.tsx`
- Demo files: `component-name.demo.tsx`
- Storybook files: `component-name.story.tsx`
- Utility files: `kebab-case.ts`
- Type files: `component-types.ts` when needed

## Important Development Notes

### ESLint Configuration

- Uses flat config format with comprehensive rules
- Enforces consistent type imports with separate-type-imports
- Prettier integration with automatic formatting
- React Hooks rules enforced
- Unused imports automatically removed

### Storybook Integration

- Primary development environment for components
- Each component should have demo and story files
- Stories used for visual testing and documentation
- Custom decorators in `components/internal/decorators.tsx`

### Package Management

- Uses both npm and bun (bun.lock present)
- Dependencies include modern React ecosystem tools
- Dev dependencies focused on TypeScript, ESLint, Prettier, and Storybook

### Build System

- Vite configuration for fast development
- TypeScript compilation with Next.js plugin
- Tailwind CSS with PostCSS integration
- Path resolution configured for clean imports

## Maslow Design System Integration

**Current Project Status**: ~70% complete integration of Maslow Design System v3.0

### Key Integration Points
- **Additive Architecture**: Maslow components extend existing Untitled UI components without breaking changes
- **Component Locations**: All Maslow components in `/components/maslow/` directory
- **Styling System**: Complete 25-color Maslow palette in `/styles/maslow.css`
- **Dependencies**: Framer Motion, Three.js, GSAP installed with `--legacy-peer-deps`

### Context Files
For detailed project context, see:
- **Project Context**: `.claude/CLAUDE.md` (main context file)
- **Implementation History**: `.changelog.md` (completed phases 1-10)  
- **Future Roadmap**: `.plan.md` (remaining phases 11-15)
- **Specifications**: `/context/` directory (requirements, design, tech stack, architecture)
- **Infrastructure**: `/infrastructure/` directory (deployment context)

### Next Priority
**Phase 11: Typography Component** - Create Typography component with aurora gradient text support

### Maslow Development Constraints
- **NEVER create new color values** - only use the approved 25-color palette
- **NEVER use flat colors for primary actions** - must use gradients
- **ALWAYS use predefined gradients**: `bg-aurora-primary`, `bg-aurora-secondary`
- **ALWAYS include glassmorphism** on floating elements
- **ALWAYS add motion** to interactive elements

## Important Instructions

Do what has been asked; nothing more, nothing less.
NEVER create files unless they're absolutely necessary for achieving your goal.
ALWAYS prefer editing an existing file to creating a new one.
NEVER proactively create documentation files (\*.md) or README files. Only create documentation files if explicitly requested by the User.
