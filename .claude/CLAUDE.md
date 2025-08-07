# CLAUDE.md

## Project Overview
Integration of Maslow Design System v3.0 into existing Untitled UI React component library using additive architecture - preserving the original component library while adding Maslow-branded variants with aurora gradients, glassmorphism effects, and WebGL backgrounds for human-centered AI interfaces.

## Architecture
- **Frontend**: React 19.1 + TypeScript 5.8 + Tailwind CSS v4.1 + Storybook v9.1 + Framer Motion + Three.js
- **Backend**: N/A (Component library)
- **Database**: N/A (Component library)
- **Infrastructure**: Local development (Node.js), Vercel (planned deployment), npm with --legacy-peer-deps
- **Monitoring**: Lighthouse audits, Web Vitals tracking, Storybook visual regression testing

## Development Guidelines
- Use Conventional Commits (feat/fix/docs/style/refactor/test/chore)
- Run linters after major changes (`npm run test` = type-check + lint + prettier)
- No backwards compatibility unless specified (additive integration maintains compatibility)
- Test everything before proceeding (Storybook visual testing + TypeScript + accessibility)

## MCP Usage
- Use Playwright for UI verification and web automation testing
- Use gh CLI for GitHub operations (repository creation, issues, PRs)
- Use Context7 for documentation lookup (add `use context7` to prompts)

## Critical Rules
- Think hard for planning - break complex Maslow components into phases
- Break complex tasks into PR-sized chunks (one component per implementation cycle)
- Always validate infrastructure changes (test Storybook builds, verify performance)

---

## Current Status: ~70% Complete (January 2025)

### ✅ Completed Implementation (Phases 1-10)
- **Complete 25-color Maslow palette** with CSS variables in `/styles/maslow.css`
- **Aurora gradient system** (primary, secondary, mesh, warm) with 7 keyframe animations
- **Core components**: AuroraButton (4 variants), GlassCard (3D tilt), AuroraBackground (WebGL)
- **Storybook integration** with comprehensive showcase and interactive demos
- **Performance optimizations**: GPU acceleration, lazy loading, reduced motion support

### 🎯 Next Priority: Phase 11 - Typography Component System
Create Typography component with gradient text support using `bg-clip-text` for aurora text effects.

## Maslow Development Constraints
- **NEVER create new color values** - only use the approved 25-color palette
- **NEVER use flat colors for primary actions** - must use gradients (`bg-aurora-primary`)
- **ALWAYS include glassmorphism** on floating elements with proper backdrop-filter
- **ALWAYS add motion** to interactive elements with reduced motion support

## Key Files & Structure
```
/styles/maslow.css                    # Complete 25-color system + aurora gradients
/components/maslow/                   # All Maslow component variants
├── aurora/aurora-button.tsx          # Primary CTA with 4 variants + animations
├── glass/glass-card.tsx              # 3D tilt glassmorphism container
├── 3d/aurora-background.tsx          # WebGL Three.js background with shaders
└── maslow-showcase.demo.tsx          # Full system demonstration

/context/                             # Project specifications
├── requirements.md                   # What we're building
├── design.md                        # Maslow v3.0 design specifications  
├── tech-stack.md                    # Technology decisions
├── architecture.md                  # System design patterns
└── task-list.md                     # Phases 11-15 roadmap

/.changelog.md                        # Complete phases 1-10 history
/.plan.md                            # Future roadmap + compliance analysis
```

## MCP Server Configuration
**Location**: `~/.config/claude-desktop/claude_desktop_config.json`
- **Context7**: Documentation lookup with `use context7` in prompts
- **Playwright**: Browser automation for UI testing and verification
- **GitHub CLI**: Repository operations, issue management, PR creation

## Quick Start Commands
```bash
# Development
npm run storybook          # Start component development server (port 6006)
npm run test              # Full validation (type-check + lint + prettier)

# GitHub CLI Setup (one-time)
gh auth login             # Authenticate with GitHub

# Install with legacy peer deps (required for Maslow dependencies)
npm install --legacy-peer-deps [package-name]
```

## Repository Migration Strategy (Clean Upload)
1. **Current State**: Forked from `untitleduico/react` with Maslow integration
2. **Goal**: Clean new repository with Maslow work as initial professional commit
3. **Process**: Remove `.git`, init fresh repo, create new GitHub repo via `gh` CLI, clean first commit
4. **Benefits**: Professional history, no original repository baggage, clean collaboration setup

---
*This project follows additive integration patterns to preserve existing functionality while adding Maslow design system capabilities. All development follows strict color palette compliance and accessibility standards.*