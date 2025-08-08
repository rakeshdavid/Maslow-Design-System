# Genesis Docs - Intelligent Documentation Generation

You are generating comprehensive project documentation using AI analysis of the codebase.

## Task

Create or update all project context and documentation files:

1. **Analyze Codebase Intelligence**:
    - Scan all source files for patterns and architecture
    - Analyze package.json, requirements.txt, or equivalent dependency files
    - Read existing README, documentation, or comments
    - Identify key components, services, and integrations

2. **Generate Context Files**:

    **requirements.md**:
    - Extract project goals from README, issues, or comments
    - Identify user stories and functional requirements
    - Document non-functional requirements (performance, security, etc.)
    - List integration requirements and external dependencies

    **architecture.md**:
    - Document system architecture from code analysis
    - Identify design patterns and architectural decisions
    - Map component relationships and data flow
    - Document API structure and database schema if applicable

    **tech-stack.md**:
    - Complete technology inventory from dependencies
    - Version information and compatibility notes
    - Development, testing, and deployment tool chain
    - Integration points and third-party services

    **task-list.md**:
    - Extract TODO comments and create task backlog
    - Identify incomplete features from code analysis
    - Generate improvement opportunities
    - Create testing and documentation tasks

3. **Update Project Plans**:

    **.changelog.md**:
    - Initialize with current project state
    - Document major milestones achieved
    - Set up template for future change tracking

    **.plan.md**:
    - Create sprint/milestone planning structure
    - Prioritize tasks based on dependencies
    - Set up project roadmap framework

4. **Generate Infrastructure Documentation**:

    **infrastructure/CLAUDE.md**:
    - Document deployment architecture
    - Environment configuration requirements
    - CI/CD pipeline documentation
    - Monitoring and observability setup

5. **Create Development Documentation**:
    - Setup and getting started guides
    - Development workflow documentation
    - Testing strategies and guidelines
    - Contribution guidelines

6. **AI-Enhanced Content**:
    - Use intelligent analysis rather than generic templates
    - Include specific examples from the actual codebase
    - Provide actionable insights and recommendations
    - Keep documentation current with code reality

## Parameters

- `$ARGUMENTS`: Specific documentation focus (e.g., --architecture, --requirements, --full, --update)

## Documentation Quality Standards

- **Accuracy**: Reflect actual code and system state
- **Completeness**: Cover all major aspects of the project
- **Clarity**: Use clear, concise language
- **Actionability**: Provide specific next steps and examples
- **Currency**: Keep documentation synchronized with code

## Smart Analysis Patterns

```bash
Frontend Projects:
- Component hierarchy and state management patterns
- API integration points and data flow
- UI/UX patterns and design system usage

Backend Projects:
- API endpoint documentation and schemas
- Database models and relationships
- Service architecture and communication patterns

Infrastructure:
- Deployment pipeline and environment configuration
- Resource requirements and scaling considerations
- Security and compliance documentation
```

## Output

Provide:

- Summary of files created/updated
- Key insights discovered from codebase analysis
- Recommended improvements or missing components
- Documentation maintenance recommendations
- Links between different documentation sections

Generate documentation that truly reflects and enhances understanding of this specific project, not generic templates.
