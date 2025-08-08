# Genesis Status - Project Configuration Check

You are checking the current Genesis Framework configuration and showing what's ready to use.

## Task

Provide a clear status overview of the current project's Genesis setup:

1. **Check Genesis Structure**:

    ```bash
    ✅ .claude/ directory exists
    ✅ Basic commands available
    ✅ Hooks configured
    ⚠️  Personal workflows not captured yet
    ❌ MCP integration not set up
    ```

2. **Analyze Project Type**:
    - Detect from package.json, requirements.txt, go.mod, etc.
    - Show what Genesis recognizes about this project
    - Indicate if stack-specific optimizations are available

3. **Show Available Features**:

    ```bash
    🚀 Ready to Use:
    - /genesis:help - Get guidance anytime
    - /dev - Smart development server

    🔧 Needs Setup:
    - Personal workflow capture (/genesis:capture)
    - Development tool integration (/genesis:mcp)
    ```

4. **Personal Workflow Status**:
    - Check if any personal workflows have been captured
    - Show available /myflow:\* commands
    - Indicate optimization opportunities

5. **Next Action Suggestion**:
   Based on current state, suggest the single most valuable next step

## Response Format

```
📊 Genesis Status Check

🎯 Project Type: [Detected project type]
📁 Structure: [✅/⚠️/❌] Genesis framework
🔧 Tools: [✅/⚠️/❌] Development integration
👤 Workflows: [✅/⚠️/❌] Personal processes

🚀 Ready to Use Right Now:
- [List of available commands with simple descriptions]

🔧 Quick Improvements Available:
- [1-2 specific actions that would add immediate value]

🎯 Recommended Next Step:
[Single specific command/action] - [Why this helps]

💡 Tip: Use /genesis:help for guidance anytime
```

## Status Indicators

- ✅ **Ready**: Working and available to use
- ⚠️ **Partial**: Basic setup exists, can be improved
- ❌ **Missing**: Not configured, would add significant value

Focus on showing what's working NOW and what would add the most value if set up next.

Keep explanations simple and action-focused.
