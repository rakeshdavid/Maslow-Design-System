# Genesis Guide - Context-Sensitive Instructions

You are providing step-by-step guidance based on what the user is currently doing.

## Task

Provide contextual, step-by-step instructions based on the current work context:

1. **Analyze Current Context**:
    - Current directory and file types
    - Recent commands or activities
    - Project stage (setup, development, deployment)
    - Available Genesis features

2. **Provide Contextual Steps**:

    ```bash
    Working in /components → Component development guide
    Git operations → Workflow optimization steps
    New repository → Project setup sequence
    Documentation files → Context updating steps
    Package.json changes → Development server restart guide
    ```

3. **Step-by-Step Format**:

    ```bash
    🎯 For [Current Activity]

    Step 1: [Specific action] - [Why]
    Step 2: [Next action] - [Why]
    Step 3: [Final action] - [Why]

    💡 Pro tip: [One efficiency suggestion]
    ```

4. **Adapt to Project Type**:
    - React projects → Component and Storybook workflows
    - Backend projects → API development and testing
    - Full-stack → Coordination between frontend/backend
    - Infrastructure → Deployment and monitoring

5. **Include Personal Workflows**:
    - Show relevant /myflow:\* commands if they exist
    - Suggest workflow capture if patterns are detected
    - Recommend optimization based on usage

## Response Format

```
🧭 Context Guide: [What you're doing]

📋 Step-by-Step:
1. [Action] - [Immediate benefit]
2. [Action] - [Why this next]
3. [Action] - [Final outcome]

⚡ Quick Commands:
- [Relevant Genesis command]
- [Personal workflow if available]

💡 Efficiency Tip: [One specific suggestion]

Next: /genesis:help for general guidance
```

## Context Detection Patterns

```bash
File: *.tsx, *.jsx → React component development
File: *.py → Python backend development
File: package.json → Frontend configuration
File: requirements.txt → Python project setup
Directory: /components → Component development workflow
Directory: /api, /src → Backend development workflow
Git activity → Version control optimization
New files → Documentation and structure suggestions
```

Keep instructions specific to current context, not generic advice.
Provide 2-4 concrete steps, not overwhelming lists.
Focus on immediate next actions that move work forward.
