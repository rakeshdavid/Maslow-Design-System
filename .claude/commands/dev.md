# Dev - Smart Development Server Management

You are starting and managing the development environment with intelligent stack detection.

## Task

Start the optimal development environment for this project:

1. **Detect Project Stack**:
    - Analyze package.json for frontend frameworks
    - Check for backend server configurations
    - Identify database requirements
    - Detect testing and development tools

2. **Start Development Services**:

    ```bash
    # Frontend Frameworks
    React: npm run dev || npm start || yarn dev
    Next.js: npm run dev (with turbopack if available)
    Vue: npm run serve || npm run dev
    Angular: ng serve --open
    Svelte: npm run dev

    # Backend Services
    Node.js: npm run dev || node --watch server.js
    Python: uvicorn main:app --reload || python manage.py runserver
    Go: air || go run main.go
    Rust: cargo watch -x run

    # Databases (if configured)
    PostgreSQL: Start if needed
    MongoDB: Start if needed
    Redis: Start if needed
    ```

3. **Development Tools Integration**:
    - Start Storybook if available (`npm run storybook`)
    - Launch test watchers if configured
    - Start database services if required
    - Open relevant development URLs

4. **Worktree Context**:
    - Display current branch and worktree information
    - Show related development environments
    - Suggest parallel development opportunities

5. **Development Dashboard**:

    ```bash
    🚀 Development Environment Active

    📱 Frontend: http://localhost:3000
    🖼️  Storybook: http://localhost:6006
    🛠️  API: http://localhost:8000
    📊 Admin: http://localhost:8080

    🌿 Branch: feature/new-component
    📁 Worktree: /main-project
    🔄 Parallel: /hotfix-worktree (if any)
    ```

## Parameters

- `$ARGUMENTS`: Service specification (e.g., --frontend-only, --full-stack, --storybook, --testing)

## Smart Detection Patterns

```bash
# Package.json scripts detection
"dev": "next dev" → Next.js development
"storybook": "start-storybook" → Component development
"test:watch": "jest --watch" → Testing environment

# Configuration files
next.config.js → Next.js project
vue.config.js → Vue project
angular.json → Angular project
cargo.toml → Rust project
```

## Parallel Development Support

```bash
# Multiple worktree development
if [ -f .git ]; then
  echo "🌳 Available worktrees:"
  git worktree list
  echo "💡 Use 'git wt add ../project-name branch-name' for parallel development"
fi
```

## Output

Provide:

- Services started and their URLs
- Current development context
- Parallel development opportunities
- Relevant development commands
- Quick access links and shortcuts

Start a comprehensive development environment optimized for this project's specific stack and workflow needs.
