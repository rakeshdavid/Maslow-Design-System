# Genesis MCP - Model Context Protocol Setup

You are configuring MCPs (Model Context Protocols) for optimal Claude Code integration.

## Task

Set up and configure the most relevant MCPs for this project:

1. **Analyze Project Requirements**:
    - Scan project structure and tech stack
    - Identify development workflow needs
    - Parse $ARGUMENTS for specific MCP requests

2. **Recommend Standard MCPs**:

    ```json
    Universal MCPs (All Projects):
    {
      "github": "Repository operations, PR management, issue tracking",
      "playwright": "End-to-end testing and UI automation"
    }

    Frontend Projects:
    {
      "figma": "Design system integration",
      "storybook": "Component development and testing"
    }

    Backend Projects:
    {
      "database": "Database operations and migrations",
      "sentry": "Error monitoring and debugging"
    }

    Infrastructure Projects:
    {
      "terraform": "Infrastructure as code",
      "cloudflare": "CDN and security configuration",
      "aws": "Cloud service management"
    }

    Project Management:
    {
      "linear": "Issue tracking and project planning",
      "notion": "Documentation and knowledge management",
      "asana": "Task and project management"
    }
    ```

3. **Create MCP Configuration**:
    - Generate `.mcp.json` with recommended MCPs
    - Configure project-specific settings
    - Set up authentication where required

4. **Validate MCP Installation**:
    - Check if MCPs can be installed successfully
    - Verify connectivity and authentication
    - Test basic functionality

5. **Create MCP Usage Documentation**:
    - Document how each MCP benefits this project
    - Provide usage examples for common scenarios
    - Create workflow integration patterns

6. **Update Project Context**:
    - Add MCP information to `context/tech-stack.md`
    - Update development workflow documentation
    - Create integration examples

## Parameters

- `$ARGUMENTS`: Specific MCP requests (e.g., --auto-detect, --github --linear, --infrastructure)

## MCP Installation Commands

```bash
# Universal installation
claude mcp add github
claude mcp add playwright

# Project-specific installations based on detected stack
Frontend: claude mcp add figma
Backend: claude mcp add sentry
Infrastructure: claude mcp add terraform

# Project management
claude mcp add linear
```

## Security Considerations

- Verify MCP authenticity and security
- Configure minimal required permissions
- Document authentication requirements
- Set up secure credential storage

## Usage Patterns

Create documentation for:

- **GitHub MCP**: PR creation, issue management, repository operations
- **Playwright MCP**: E2E testing, UI validation, screenshot comparison
- **Database MCP**: Query optimization, migration management
- **Monitoring MCPs**: Error tracking, performance monitoring

## Output

Provide:

- List of recommended MCPs for this project
- Installation commands executed
- Configuration files created
- Usage examples for each MCP
- Integration workflow documentation
- Any authentication setup required

Configure MCPs to maximize Claude Code's effectiveness for this specific project type and workflow.
