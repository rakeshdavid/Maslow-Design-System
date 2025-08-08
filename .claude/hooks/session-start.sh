#!/bin/bash

# Genesis Framework Session Start Hook
# Simple project context display when starting a Claude Code session

echo "🚀 Genesis Active"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

# Display current project info
if [ -f ".claude/CLAUDE.md" ]; then
    PROJECT_NAME=$(grep "^# " .claude/CLAUDE.md | head -1 | sed 's/# //')
    echo "📋 Project: $PROJECT_NAME"
fi

# Display current sprint/plan
if [ -f ".plan.md" ]; then
    CURRENT_PLAN=$(head -3 .plan.md | tail -1)
    echo "🎯 Current Focus: $CURRENT_PLAN"
fi

# Display tech stack
if [ -f "context/tech-stack.md" ]; then
    PRIMARY_STACK=$(grep -E "Primary|Framework|Stack" context/tech-stack.md | head -1)
    echo "🔧 $PRIMARY_STACK"
fi

# Git status and worktree info
echo ""
echo "🌿 Git Status:"
CURRENT_BRANCH=$(git branch --show-current 2>/dev/null || echo "Not a git repository")
echo "   Branch: $CURRENT_BRANCH"

# Show worktrees if any
if command -v git &> /dev/null && git rev-parse --git-dir > /dev/null 2>&1; then
    WORKTREE_COUNT=$(git worktree list | wc -l)
    if [ $WORKTREE_COUNT -gt 1 ]; then
        echo "   Worktrees: $((WORKTREE_COUNT-1)) additional"
        echo "   💡 Use 'git wt list' to see all worktrees"
    fi
fi

# Development server suggestions
echo ""
echo "🚀 Quick Start Commands:"
if [ -f "package.json" ]; then
    if grep -q '"dev"' package.json; then
        echo "   /dev - Start development server"
    fi
    if grep -q '"storybook"' package.json; then
        echo "   npm run storybook - Component development"
    fi
elif [ -f "requirements.txt" ] || [ -f "pyproject.toml" ]; then
    echo "   /dev - Start Python development server"
elif [ -f "go.mod" ]; then
    echo "   go run main.go - Start Go application"
elif [ -f "Cargo.toml" ]; then
    echo "   cargo run - Start Rust application"
fi

# Genesis Framework commands
echo ""
echo "🧬 Genesis Commands:"
echo "   /genesis:init - Initialize project structure"
echo "   /genesis:docs - Generate/update documentation"
echo "   /genesis:mcp - Configure development MCPs"
echo "   /genesis:workflow - Set up development workflow"

# Quick help reminder
echo ""
echo "💡 Need help? Type: /genesis:help"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""