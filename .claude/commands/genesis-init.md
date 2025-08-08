# Genesis Init - Simple Project Setup

You are helping set up a project with Genesis Framework in the simplest way possible.

## Task

Create essential project structure with guided, progressive setup:

1. **Simple Setup Mode**:
   If `--simple` flag is provided:
    - Create only essential structure (.claude/ directory with basic commands)
    - Focus on immediate usability over comprehensive setup
    - Provide clear next steps for progressive enhancement

2. **Detect Project Context**:
    - Scan for package.json, requirements.txt, go.mod, etc.
    - Identify if this is React, Node.js, Python, etc.
    - Check existing directory structure

3. **Create Essential Structure Only**:

    ```
    .claude/
    ├── commands/           # Genesis guidance commands
    │   ├── genesis-help.md
    │   ├── genesis-status.md
    │   ├── genesis-next.md
    │   └── genesis-capture.md
    └── hooks/             # Basic automation hooks
        └── session-start.sh
    ```

4. **Simple Initial Setup**:
    - Create basic `.claude/CLAUDE.md` with project type detection
    - Set up git worktree alias if not present
    - Enable session-start hook for context display

5. **Progressive Enhancement Guidance**:
    - Show immediate next steps after setup
    - Explain how to capture workflows with `/genesis:capture`
    - Suggest stack-specific optimizations available

## Parameters

- `$ARGUMENTS`: Optional project type, framework, or specific instructions

## Output Format

```
🎉 Genesis Setup Complete!

📊 Project Type: [Detected project type]
⚡ Time: 2 minutes

✅ What's Ready:
- /genesis:help - Get guidance anytime
- /genesis:next - See your next step
- /dev - Smart development server

🎯 Next Steps:
1. Try: /genesis:help
2. Capture a workflow: /genesis:capture
3. See what's possible: /genesis:status

💡 Start simple: Use /genesis:help whenever you need guidance
```

## Setup Philosophy

- **Simple first**: Only essential features initially
- **Progressive enhancement**: Add complexity as needed
- **Immediate value**: Working features right after setup
- **Learning path**: Clear steps to grow capabilities

Focus on getting the user productive immediately, not overwhelming them with features.
