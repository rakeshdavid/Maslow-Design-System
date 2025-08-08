# Genesis Workflow - Development Workflow Configuration

You are setting up optimized development workflows using Claude Code's advanced features.

## Task

Configure comprehensive development workflows with automation, quality gates, and efficiency optimizations:

1. **Git Workflow Configuration**:

    ```bash
    # Set up git worktree alias if not present
    git config --global alias.wt 'worktree'

    # Configure branch naming conventions
    feature/* → Component/feature development
    hotfix/* → Emergency fixes with dedicated worktree
    release/* → Stable release preparation
    review/* → Code review and testing
    ```

2. **Quality Gates Setup**:
    - Configure pre-commit hooks for code quality
    - Set up linting and formatting automation
    - Configure type checking (if applicable)
    - Set up testing automation

3. **Development Hooks Configuration**:
   Create `.claude/hooks/` with:

    **session-start.sh**:

    ```bash
    #!/bin/bash
    echo "🚀 Genesis Framework Active"
    echo "📋 Current Sprint: $(cat .plan.md | head -1)"
    echo "🔧 Stack: $(grep 'Primary' context/tech-stack.md)"
    ```

    **pre-tool-use.sh**:

    ```bash
    #!/bin/bash
    # Validate tool usage patterns
    # Suggest more efficient alternatives
    # Log usage for pattern recognition
    ```

4. **Slash Commands Integration**:
   Create workflow-specific commands:
    - `/dev` - Start development server with optimal settings
    - `/test` - Run comprehensive testing suite
    - `/build` - Production build with validation
    - `/deploy` - Deployment workflow
    - `/review` - Code review preparation

5. **GitHub Integration Setup**:

    ```bash
    # Configure GitHub CLI for automation
    gh auth status

    # Set up automated workflows
    - PR templates with quality checklists
    - Issue templates for bug reports and features
    - GitHub Actions integration with Claude Code
    ```

6. **MCP Workflow Integration**:
    - Configure MCPs for seamless development workflow
    - Set up automation triggers
    - Create integration patterns for common tasks

## Parameters

- `$ARGUMENTS`: Workflow options (e.g., --git-flow --quality-gates --github-integration --mcp-automation)

## Workflow Templates

### Frontend Development Workflow

```bash
1. Feature branch creation with automatic worktree
2. Component development with live Storybook
3. Testing with Playwright integration
4. PR creation with automated quality checks
5. Review workflow with isolated environment
6. Merge with automatic deployment
```

### Backend Development Workflow

```bash
1. Feature branch with API development focus
2. Database migration and testing
3. API testing and documentation
4. Integration testing with MCPs
5. Security scanning and validation
6. Deployment with monitoring setup
```

### Full-Stack Development Workflow

```bash
1. Parallel frontend/backend development with worktrees
2. Integration testing across stack layers
3. End-to-end testing with Playwright
4. Performance testing and optimization
5. Deployment coordination across services
```

## Automation Configuration

### Hooks System

```json
{
    "sessionStart": "Display project context and current tasks",
    "preToolUse": "Validate and suggest optimizations",
    "postToolUse": "Log patterns and trigger follow-up actions",
    "userPromptSubmit": "Enhance context with project intelligence"
}
```

### Quality Gates

```bash
# Universal quality checks
- Code formatting (Prettier, gofmt, black, rustfmt)
- Linting (ESLint, pylint, golangci-lint, clippy)
- Type checking (TypeScript, mypy, etc.)
- Testing (unit, integration, e2e)
- Security scanning
- Documentation generation
```

## Development Server Integration

```bash
# Stack-specific development commands
React: npm run dev with Storybook
Vue: npm run serve with Vue devtools
Angular: ng serve with optimization
Node.js: nodemon with debugging
Python: uvicorn/gunicorn with hot reload
Go: air with live reload
```

## Output

Provide:

- Workflow configuration summary
- Hooks and automation setup
- Quality gates implemented
- Slash commands created
- GitHub integration status
- MCP workflow patterns
- Development server configuration
- Recommended next steps for team adoption

Configure a comprehensive development workflow that maximizes efficiency while maintaining quality and consistency.
