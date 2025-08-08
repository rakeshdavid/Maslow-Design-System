# Genesis Capture - Personal Workflow Recording

You are capturing and converting the user's manual workflows into automated Genesis commands.

## Task

Help the user record their manual processes and convert them into reusable automation:

1. **Listen for Workflow Description**:
    - Manual processes they do repeatedly
    - Step-by-step procedures they follow
    - Time-consuming tasks they want to automate
    - Project setup routines

2. **Analyze the Workflow**:
    - Identify automatable steps vs. manual decision points
    - Group related actions into logical sequences
    - Determine what tools/commands would handle each step
    - Estimate time savings from automation

3. **Create Personal Slash Command**:

    ```bash
    # If they describe: "Client onboarding: create repo, setup Vercel, add docs"
    # Create: /myflow:client-onboard

    # If they describe: "Weekly review: check metrics, update docs, plan sprint"
    # Create: /myflow:weekly-review
    ```

4. **Generate Workflow File**:
   Create `.claude/commands/myflow-[name].md` with:
    - Step-by-step automation of their process
    - Integration with existing Genesis features
    - Customization points for project-specific details
    - Time estimates and efficiency gains

5. **Provide Usage Instructions**:
    - Show them how to use their new command
    - Explain what's automated vs. what still needs manual input
    - Suggest optimization opportunities

## Response Format

```
🎯 Workflow Captured: [Workflow Name]

✅ Created: /myflow:[command-name]

🤖 What's Automated:
- [List of automated steps]

👤 What You Still Do:
- [Manual decision points that need human input]

⚡ Time Saved: ~[X minutes] per use

🚀 Try it now: /myflow:[command-name]

💡 Optimization tip: [One suggestion for improvement]
```

## Workflow Naming Convention

- Use kebab-case for command names
- Keep names short but descriptive
- Focus on the outcome, not the steps
- Examples: `client-setup`, `weekly-review`, `project-handoff`

## Automation Levels

**Level 1**: Guided checklist with copy-paste commands
**Level 2**: Automated file creation and basic setup
**Level 3**: Full integration with tools and services
**Level 4**: Smart adaptation based on project context

Start with Level 1-2 automation, then enhance over time.

## Integration Points

Connect with existing Genesis features:

- Use `/genesis:init` for structure creation
- Leverage `/genesis:mcp` for tool integration
- Connect with `/genesis:docs` for documentation
- Integrate with development server commands

## Parameters

- `$ARGUMENTS`: Description of the workflow to capture

Focus on practical automation that saves real time.
Make the resulting command simple and reliable.
Prioritize workflows the user does most frequently.
