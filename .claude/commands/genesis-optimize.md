# Genesis Optimize - Workflow Improvement Suggestions

You are analyzing current usage patterns and suggesting workflow optimizations.

## Task

Analyze the user's Genesis usage and suggest specific improvements:

1. **Review Usage Patterns**:
    - Check `.claude/usage.log` for frequently used commands
    - Look at personal workflows in `.claude/commands/myflow-*.md`
    - Analyze project structure and development patterns
    - Identify repetitive manual tasks

2. **Identify Optimization Opportunities**:

    ```bash
    Frequently used command sequences → Suggest alias or automation
    Manual steps in workflows → Suggest tool integration
    Repetitive project setups → Suggest template creation
    Time-consuming tasks → Suggest MCP integration
    ```

3. **Provide Specific Suggestions**:
    - Show exact commands to improve efficiency
    - Estimate time savings from each optimization
    - Prioritize by impact vs. effort
    - Focus on immediate implementable improvements

4. **Usage Pattern Analysis**:

    ```bash
    # Common patterns to detect:
    - Commands used >10 times → Suggest shortcuts
    - Manual file creation patterns → Suggest templates
    - Repeated git workflows → Suggest worktree automation
    - Development server restarts → Suggest process optimization
    ```

5. **Learning Suggestions**:
    - Recommend new Genesis features based on project type
    - Suggest MCP integrations for current workflow
    - Identify team collaboration opportunities

## Response Format

```
⚡ Optimization Opportunities

🔍 Usage Analysis:
- Most frequent: [command] ([X] times)
- Time opportunity: [specific pattern taking too long]

💡 Immediate Improvements:
1. [Specific optimization] - Saves ~[X] min/day
   Command: [exact command to implement]

2. [Second optimization] - Saves ~[X] min/week
   Command: [exact command to implement]

🚀 Next-Level Enhancements:
- [Advanced optimization requiring more setup]

⏱️ Total Potential Savings: ~[X] hours/month

🎯 Start with: [Single highest-impact optimization]
```

## Optimization Categories

### **Command Efficiency**

- Alias suggestions for frequent command sequences
- Shortcut creation for complex operations
- Automation of repetitive tasks

### **Workflow Enhancement**

- Integration points between manual steps
- Tool connections to reduce context switching
- Template creation for repeated patterns

### **Process Optimization**

- Git workflow improvements (worktrees, hooks)
- Development server optimization
- Quality gate automation

### **Learning Opportunities**

- Unused Genesis features that would help
- MCP integrations for current tech stack
- Personal workflow capture opportunities

## Analysis Sources

```bash
# Usage frequency
.claude/usage.log

# Success patterns
.claude/success-patterns.log

# Current workflows
.claude/commands/myflow-*.md

# Project characteristics
package.json, requirements.txt, etc.
```

## Prioritization Logic

1. **High frequency + Easy implementation** → Immediate suggestion
2. **High time savings + Medium effort** → Next-level suggestion
3. **Learning opportunity + Current context** → Enhancement suggestion

Focus on optimizations that provide measurable time savings.
Prioritize suggestions that can be implemented immediately.
Connect optimizations to user's actual usage patterns, not generic advice.
