# Personal Workflow Template

This template is used to create custom `/myflow:*` commands from captured workflows.

## Template Structure

```markdown
# MyFlow: [Workflow Name] - [Brief Description]

You are executing the user's personal workflow: [Workflow Name].

## Task

[Description of what this workflow accomplishes]

## Steps

1. **[Step Name]**: [What this step does]
    - [Specific actions or commands]
    - [Expected outcome]

2. **[Step Name]**: [What this step does]
    - [Specific actions or commands]
    - [Expected outcome]

3. **[Step Name]**: [What this step does]
    - [Specific actions or commands]
    - [Expected outcome]

## Manual Steps

[List any steps that require manual decision-making or input]

## Time Saved

- **Before**: [X] minutes manual process
- **After**: [Y] minutes with automation
- **Savings**: ~[X-Y] minutes per use

## Usage

Run this workflow with: `/myflow:[command-name]`

## Parameters

- `$ARGUMENTS`: [Description of any parameters this workflow accepts]

## Output

Provide confirmation of completed steps and any manual actions still needed.

## Customization Points

[Areas where the workflow might need project-specific adjustments]
```

## Example: Client Onboarding Workflow

```markdown
# MyFlow: Client Onboard - Complete client project setup

You are executing the user's client onboarding workflow.

## Task

Set up a complete client project with repository, deployment, and documentation.

## Steps

1. **Repository Setup**: Create and configure GitHub repository
    - Create repository with appropriate name
    - Set up branch protection rules
    - Configure issue and PR templates

2. **Deployment Configuration**: Set up Vercel deployment
    - Connect repository to Vercel
    - Configure environment variables
    - Set up preview deployments

3. **Documentation Creation**: Generate project documentation
    - Create comprehensive README
    - Set up project structure documentation
    - Initialize changelog

## Manual Steps

- Choose specific client branding/themes
- Configure client-specific environment variables
- Review and approve initial deployment

## Time Saved

- **Before**: 45 minutes manual setup
- **After**: 10 minutes with automation
- **Savings**: ~35 minutes per client

## Usage

Run this workflow with: `/myflow:client-onboard [client-name]`
```

This template provides the structure for converting any manual process into a reusable Genesis workflow command.
