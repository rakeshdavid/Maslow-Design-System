# Genesis Stack - Technology Stack Configuration

You are configuring the technology stack for a Genesis Framework project.

## Task

Configure and optimize the project for the specified technology stack:

1. **Analyze Stack Requirements**:
    - Parse $ARGUMENTS for framework specification (e.g., --framework react, --infrastructure vercel)
    - Detect existing stack from package.json, requirements.txt, go.mod, etc.
    - Identify development, testing, and deployment tools

2. **Update Context Files**:
    - Update `context/tech-stack.md` with comprehensive stack details
    - Modify `context/architecture.md` for stack-specific patterns
    - Update `context/requirements.md` with stack capabilities

3. **Configure Development Environment**:

    ```bash
    # Frontend Stacks (React, Vue, Angular, Svelte)
    - Set up component development patterns
    - Configure testing framework integration
    - Set up build and dev server workflows

    # Backend Stacks (Node.js, Python, Go, Rust)
    - Configure API development patterns
    - Set up database integration if applicable
    - Configure service architecture

    # Full-Stack Frameworks (Next.js, Nuxt, SvelteKit)
    - Configure SSR/SSG patterns
    - Set up API route conventions
    - Configure deployment optimization
    ```

4. **Install Recommended MCPs**:

    ```json
    Frontend Projects:
    - @mcp/playwright (testing)
    - @mcp/figma (design integration)

    Backend Projects:
    - @mcp/database (if applicable)
    - @mcp/monitoring

    Infrastructure:
    - @mcp/cloudflare
    - @mcp/aws
    - @mcp/terraform
    ```

5. **Create Stack-Specific Slash Commands**:
    - Generate commands for common workflows in this stack
    - Create testing, building, and deployment shortcuts
    - Set up framework-specific development patterns

6. **Update Project Settings**:
    - Configure quality gates for this stack (linting, type checking, testing)
    - Set up appropriate git hooks
    - Configure development server and build processes

## Parameters

- `$ARGUMENTS`: Stack specification (e.g., --framework react --infrastructure vercel --database postgres)

## Stack Templates

### Frontend Stacks

- **React**: Component development, testing with Playwright, Storybook integration
- **Vue**: Composition API patterns, Pinia state management
- **Angular**: Service architecture, RxJS patterns
- **Svelte**: Reactive patterns, SvelteKit optimization

### Backend Stacks

- **Node.js**: Express/Fastify patterns, middleware architecture
- **Python**: FastAPI/Django patterns, async development
- **Go**: Gin/Echo patterns, concurrency optimization
- **Rust**: Actix/Axum patterns, performance optimization

### Infrastructure Stacks

- **Vercel**: Serverless optimization, edge functions
- **AWS**: Lambda, ECS, infrastructure as code
- **Docker**: Containerization, multi-stage builds
- **Kubernetes**: Deployment patterns, service mesh

## Output

Provide:

- Stack configuration summary
- Files updated/created
- Recommended development workflow
- Next steps for this stack
- Custom slash commands created for this stack

Configure the project comprehensively for optimal development in the specified stack.
