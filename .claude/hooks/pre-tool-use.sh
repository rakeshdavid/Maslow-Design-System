#!/bin/bash

# Genesis Framework Pre-Tool-Use Hook  
# Validates tool usage and suggests optimizations before execution

TOOL_NAME="$1"
TOOL_ARGS="$2"

# Log tool usage for pattern recognition
echo "$(date): $TOOL_NAME $TOOL_ARGS" >> .claude/usage.log

# Git operation optimizations
if [[ "$TOOL_NAME" == "git" ]]; then
    if [[ "$TOOL_ARGS" == *"checkout"* ]]; then
        echo "💡 Consider using git worktrees for parallel development:"
        echo "   git wt add ../project-feature feature-branch"
        echo ""
    fi
    
    if [[ "$TOOL_ARGS" == *"commit"* ]]; then
        # Check if quality gates should be run
        if [ -f "package.json" ]; then
            echo "🔍 Remember to run quality checks before committing:"
            echo "   npm run test (if available)"
            echo ""
        fi
    fi
fi

# Development server suggestions  
if [[ "$TOOL_NAME" == "npm" || "$TOOL_NAME" == "yarn" || "$TOOL_NAME" == "pnpm" ]]; then
    if [[ "$TOOL_ARGS" == *"run dev"* || "$TOOL_ARGS" == *"start"* ]]; then
        echo "🚀 Development server starting..."
        if [ -f "package.json" ] && grep -q '"storybook"' package.json; then
            echo "💡 Consider also starting Storybook for component development:"
            echo "   npm run storybook"
            echo ""
        fi
    fi
fi

# File creation suggestions
if [[ "$TOOL_NAME" == "Write" ]]; then
    FILE_PATH="$TOOL_ARGS"
    
    # Component creation suggestions
    if [[ "$FILE_PATH" == *"components/"* && "$FILE_PATH" == *".tsx" ]]; then
        COMPONENT_NAME=$(basename "$FILE_PATH" .tsx)
        echo "🧬 Creating React component. Consider also creating:"
        echo "   ${FILE_PATH%.tsx}.demo.tsx - Component demo"
        echo "   ${FILE_PATH%.tsx}.story.tsx - Storybook story"
        echo "   ${FILE_PATH%.tsx}.test.tsx - Component tests"
        echo ""
    fi
    
    # Documentation file suggestions
    if [[ "$FILE_PATH" == *".md" ]]; then
        echo "📝 Creating documentation. Consider updating:"
        echo "   .changelog.md - Track this change"
        if [[ "$FILE_PATH" == *"context/"* ]]; then
            echo "   Other context files may need updates too"
        fi
        echo ""
    fi
fi

# MCP usage suggestions
if [[ "$TOOL_NAME" == "mcp" ]]; then
    echo "🔌 MCP operation detected."
    if [ -f ".mcp.json" ]; then
        echo "📋 Current MCP configuration exists"
    else
        echo "💡 Consider creating .mcp.json for team sharing"
    fi
    echo ""
fi

# Performance monitoring for frequently used commands
USAGE_COUNT=$(grep -c "$TOOL_NAME" .claude/usage.log 2>/dev/null || echo "0")
if [ "$USAGE_COUNT" -gt 10 ]; then
    echo "⚡ Command '$TOOL_NAME' used $USAGE_COUNT times."
    echo "💡 Consider creating an alias or workflow automation."
    echo ""
fi

# Exit successfully to allow tool execution
exit 0