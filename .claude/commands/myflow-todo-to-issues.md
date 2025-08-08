# /myflow:todo-to-issues - Auto-Convert Todos to GitHub Issues

## Overview

Automatically converts TodoWrite tasks into properly formatted GitHub issues with smart categorization, templates, and project context.

## Usage

```bash
/myflow:todo-to-issues
```

## What This Command Does

### 🤖 Automated Steps

1. **Scans Current Todos**: Reads all pending/in-progress tasks from TodoWrite
2. **Smart Categorization**: Analyzes task content to determine issue type
3. **Template Application**: Applies appropriate GitHub issue templates
4. **Priority Mapping**: Converts todo urgency to GitHub issue priority
5. **Context Integration**: Adds project-specific context and references
6. **Batch Creation**: Creates all issues in sequence with proper formatting

### 👤 What You Still Control

- Final review of generated issue content before creation
- Custom labels and milestone assignments
- Issue descriptions and acceptance criteria refinement
- Project-specific customizations

## Issue Templates

### Component Development Tasks

```markdown
## 🎯 Priority: [Auto-detected from todo content]

**Estimated Time**: [Auto-estimated based on task complexity]
**Dependencies**: [Auto-detected from related todos]

## 📋 Description

[Auto-generated from todo content with Maslow context]

## ✅ Acceptance Criteria

[Generated checklist based on task type]

## 📁 Files to Create/Modify

[Auto-detected file paths based on component patterns]

## 📖 References

[Auto-linked to relevant project documentation]

## 🎯 Definition of Done

[Standard completion criteria for task type]
```

### Bug Fix Tasks

```markdown
## 🐛 Bug Report

**Priority**: [High/Medium/Low based on todo urgency]
**Affected Component**: [Auto-detected from task content]

## Problem Description

[Extracted from todo task description]

## Steps to Reproduce

[Generated template for bug reproduction]

## Expected vs Actual Behavior

[Template for behavior documentation]

## Acceptance Criteria

- [ ] Bug is reproduced and documented
- [ ] Root cause identified
- [ ] Fix implemented and tested
- [ ] Regression testing completed
```

### Infrastructure Tasks

```markdown
## 🏗️ Infrastructure Task

**Type**: [Setup/Configuration/Optimization]
**Impact**: [Project-wide/Component-specific]

## Task Description

[Detailed description from todo item]

## Implementation Steps

[Auto-generated checklist based on task type]

## Testing Requirements

[Standard testing criteria for infrastructure changes]
```

## Smart Detection Rules

### Component Tasks (Creates "component" label)

- Contains: "component", "tsx", "story", "implement"
- Template: Component Development
- Auto-adds: Maslow design constraints, Storybook requirements

### Bug Tasks (Creates "bug" label)

- Contains: "fix", "bug", "error", "issue", "broken"
- Template: Bug Report
- Auto-adds: Debugging steps, testing requirements

### Documentation Tasks (Creates "documentation" label)

- Contains: "docs", "readme", "guide", "document"
- Template: Documentation
- Auto-adds: Writing guidelines, review process

### Performance Tasks (Creates "performance" label)

- Contains: "optimize", "performance", "slow", "memory"
- Template: Performance Improvement
- Auto-adds: Benchmarking requirements, testing criteria

### Infrastructure Tasks (Creates "infrastructure" label)

- Contains: "setup", "config", "deploy", "build"
- Template: Infrastructure
- Auto-adds: System requirements, rollback plans

## Priority Mapping

### Todo Status → GitHub Priority

- `in_progress` → `priority:high` (actively being worked on)
- `pending` + urgent keywords → `priority:high`
- `pending` + component/feature → `priority:medium`
- `pending` + docs/cleanup → `priority:low`

### Urgent Keywords

- "critical", "urgent", "blocking", "broken", "error"
- "deadline", "asap", "immediately", "fix"

## Context Integration

### Maslow Project Context

- Auto-adds Maslow design constraints for UI components
- Includes references to style guide and color palette
- Links to existing component patterns
- Adds performance and accessibility requirements

### File Path Detection

- Detects component names and suggests file paths
- Auto-generates Storybook story requirements
- Includes TypeScript type definitions
- Suggests test file locations

## Example Conversion

### Input Todo:

```
"Create Typography component with gradient support"
```

### Output GitHub Issue:

```markdown
## 🎯 Priority: High (Component Development)

**Estimated Time**: 2-3 hours
**Dependencies**: None

## 📋 Description

Create Typography component with gradient text support using `bg-clip-text` for aurora text effects. This component is essential for Maslow Design System completion.

## ✅ Acceptance Criteria

- [ ] Create `/components/maslow/ui/typography.tsx` component
- [ ] Implement gradient text support via `bg-clip-text`
- [ ] Support semantic HTML elements (h1-h6, p, span)
- [ ] Include proper ARIA labels and accessibility
- [ ] Create comprehensive Storybook story
- [ ] Follow existing AuroraButton pattern for structure

## 📁 Files to Create

- `/components/maslow/ui/typography.tsx`
- `/components/maslow/ui/typography.story.tsx`

## 📖 References

- Use Maslow color palette from `/styles/maslow.css`
- Follow pattern from `/components/maslow/aurora/aurora-button.tsx`
- Reference `.plan.md` for detailed specifications

## 🎯 Definition of Done

- Component renders all typography variants correctly
- Gradient text displays aurora effects properly
- Storybook story covers all variants and props
- Code passes `npm run test` (lint + type-check + prettier)
- Component follows Maslow design constraints
```

## Advanced Features

### Batch Processing

- Processes all pending todos in one command
- Groups related tasks into epics/milestones
- Detects dependencies between tasks
- Suggests implementation order

### Smart Templating

- Learns from previous issue patterns
- Adapts templates based on project type
- Includes project-specific boilerplate
- Auto-links to relevant documentation

### Integration Points

- Works with `/genesis:init` project structure
- Uses `/genesis:docs` for documentation references
- Integrates with existing Maslow component patterns
- Respects project coding standards

## Time Savings Estimate

- **Manual Process**: 5-10 minutes per issue creation
- **Automated Process**: 30 seconds per todo conversion
- **Typical Session**: Convert 10 todos → Save ~45-90 minutes
- **Additional Benefits**: Consistent formatting, no missed requirements

## Usage Tips

### Best Practices

1. Write descriptive todo items with clear action verbs
2. Include component names or file paths when relevant
3. Use priority keywords ("urgent", "critical") for important tasks
4. Group related todos together for better dependency detection

### Customization

- Edit templates in this file to match your project needs
- Modify detection rules for your specific vocabulary
- Adjust priority mapping based on your workflow
- Add project-specific context sections

## Error Handling

- Validates GitHub CLI is authenticated
- Checks for existing issues with similar titles
- Handles network failures gracefully
- Provides rollback options for batch operations

## Future Enhancements

- Integration with project management tools (Linear, Notion)
- Automatic milestone and epic creation
- Smart scheduling based on dependencies
- Team member auto-assignment based on expertise

---

## Implementation Commands

When you run `/myflow:todo-to-issues`, it executes:

```bash
# 1. Read current todos from memory
echo "📋 Reading current todo list..."

# 2. Analyze and categorize each todo
echo "🔍 Analyzing todo items..."

# 3. Generate GitHub issues with templates
echo "📝 Generating GitHub issue content..."

# 4. Create issues via GitHub CLI
echo "🚀 Creating GitHub issues..."
gh issue create --title "[Title]" --body "[Generated Content]" --label "[Auto-detected labels]"

# 5. Update todos with issue links
echo "✅ Linking todos to created issues..."

# 6. Summary report
echo "🎯 Created [X] issues from [Y] todos. Time saved: ~[Z] minutes"
```

This workflow transforms your planning phase into an efficient issue creation system, ensuring nothing falls through the cracks and maintaining consistent project documentation standards.
