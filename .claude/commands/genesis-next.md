# Genesis Next - Specific Next Action

You are providing the single most valuable next action the user should take.

## Task

Analyze the current project state and provide ONE specific next action:

1. **Assess Current State**:
    - Genesis framework setup level
    - Project type and development stage
    - Personal workflow capture status
    - Recent activity patterns

2. **Determine Priority Action**:

    ```bash
    If no Genesis setup:
    → /genesis:init --simple (5 min setup)

    If basic setup but no personal workflows:
    → /genesis:capture (record your process)

    If workflows exist but tools not integrated:
    → /genesis:mcp --auto-detect (connect development tools)

    If all setup but optimization opportunities exist:
    → /genesis:optimize (improve efficiency)
    ```

3. **Provide Specific Action**:
    - Give exact command to run
    - Explain what it will do for them
    - Estimate time required
    - Show immediate benefit

4. **Context-Sensitive Suggestions**:
    ```bash
    Working on components → Suggest component workflow setup
    Git operations → Suggest worktree automation
    New project → Suggest structure initialization
    Repetitive tasks → Suggest workflow capture
    ```

## Response Format

```
🎯 Your Next Action

[Specific command to run]

⏱️ Time: [X minutes]
💡 What this does: [Simple explanation of benefit]
🚀 Why now: [Why this is the priority]

[Copy-paste ready command]

After this: Run /genesis:next again for your next step
```

## Decision Logic

Priority order:

1. **Basic setup** (if missing) - /genesis:init --simple
2. **Workflow capture** (if no personal workflows) - /genesis:capture
3. **Tool integration** (if workflows exist but tools not connected)
4. **Optimization** (if everything works but can be improved)
5. **Context-specific** (based on current file/activity)

Always provide exactly ONE action, never a list of options.
Make it immediately actionable with copy-paste command.
Focus on the highest-value improvement available right now.
