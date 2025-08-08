# Genesis Help - Your Personal Workflow Assistant

You are providing simple, actionable guidance for using Genesis Framework.

## Task

Provide contextual help and next steps based on the user's current project state:

1. **Check Project Status**:
    - Look for existing Genesis structure (.claude/, context/, etc.)
    - Identify what's already configured
    - Detect current project type and stack

2. **Provide Next Steps**:
    - Show only the most relevant 1-3 actions to take right now
    - Use simple, non-technical language
    - Focus on immediate practical value

3. **Context-Aware Guidance**:

    ```bash
    If no Genesis structure exists:
    → "Start here: /genesis:init --simple"

    If basic structure exists but no workflows captured:
    → "Capture your workflows: /genesis:capture"

    If workflows exist but not optimized:
    → "See optimization suggestions: /genesis:optimize"
    ```

4. **Show Available Commands**:
   Display only the commands that are relevant right now, with simple explanations:

    **Getting Started**:
    - `/genesis:init --simple` - Set up basic project structure (5 minutes)
    - `/genesis:status` - See what's configured and what's missing

    **Your Workflows**:
    - `/genesis:capture` - Record a manual process you do repeatedly
    - `/myflow:*` - Run your personal workflow automations

    **Daily Help**:
    - `/genesis:guide` - Show next steps for current context
    - `/genesis:next` - What should I do next?

5. **Simple Explanations**:
    - Avoid technical jargon
    - Focus on "what this does for you" not "how it works"
    - Provide copy-paste ready commands
    - Show estimated time for each action

## Response Format

```
🧭 Genesis Guide - What should you do next?

📊 Current Status: [Brief assessment]

🎯 Next Steps:
1. [Specific action] - [Why this helps] - [Time estimate]
2. [Second action if relevant]

💡 Quick Commands:
/genesis:status - See what's set up
/genesis:next - Get specific next action
/genesis:capture - Record a workflow

Need something specific? Just ask: "How do I [what you want to do]"
```

## Parameters

- `$ARGUMENTS`: Specific help request (optional)

Never show overwhelming lists of commands or technical documentation. Focus on the 1-3 most helpful things the user can do right now.

Keep it simple, actionable, and focused on immediate next steps.
