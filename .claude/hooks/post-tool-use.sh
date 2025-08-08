#!/bin/bash

# Genesis Framework Post-Tool-Use Hook
# Captures successful patterns and triggers follow-up actions after tool execution

TOOL_NAME="$1"
TOOL_ARGS="$2"
EXIT_CODE="$3"

# Only process successful executions
if [ "$EXIT_CODE" -ne 0 ]; then
    exit 0
fi

# Log successful patterns
echo "$(date): SUCCESS $TOOL_NAME $TOOL_ARGS" >> .claude/success-patterns.log

# Git operation follow-ups
if [[ "$TOOL_NAME" == "git" ]]; then
    if [[ "$TOOL_ARGS" == *"commit"* ]]; then
        echo "✅ Commit successful!"
        
        # Suggest next steps
        CURRENT_BRANCH=$(git branch --show-current)
        if [[ "$CURRENT_BRANCH" == feature/* ]]; then
            echo "💡 Next steps for feature branch:"
            echo "   - Push changes: git push -u origin $CURRENT_BRANCH"
            echo "   - Create PR: gh pr create --draft"
            echo ""
        fi
        
        # Update changelog suggestion
        if [ -f ".changelog.md" ]; then
            LAST_COMMIT=$(git log -1 --pretty=format:"%s")
            echo "📝 Consider updating .changelog.md with: $LAST_COMMIT"
            echo ""
        fi
    fi
    
    if [[ "$TOOL_ARGS" == *"worktree add"* ]]; then
        WORKTREE_PATH=$(echo "$TOOL_ARGS" | awk '{print $3}')
        echo "🌿 Worktree created successfully!"
        echo "💡 Quick navigation:"
        echo "   cd $WORKTREE_PATH"
        echo "   code $WORKTREE_PATH (if using VS Code)"
        echo ""
    fi
fi

# File creation follow-ups
if [[ "$TOOL_NAME" == "Write" ]]; then
    FILE_PATH="$TOOL_ARGS"
    
    # Component creation follow-up
    if [[ "$FILE_PATH" == *"components/"* && "$FILE_PATH" == *".tsx" ]]; then
        echo "🧬 Component created successfully!"
        echo "💡 Next steps:"
        echo "   - Create component demo and story files"
        echo "   - Add component to index exports"
        echo "   - Consider adding to Storybook"
        echo ""
    fi
    
    # Documentation updates
    if [[ "$FILE_PATH" == *"context/"* ]]; then
        echo "📚 Context documentation updated!"
        echo "💡 Consider reviewing related context files for consistency"
        echo ""
    fi
    
    # Configuration file updates  
    if [[ "$FILE_PATH" == *".json" || "$FILE_PATH" == *".config."* ]]; then
        echo "⚙️  Configuration updated!"
        if [[ "$FILE_PATH" == *"package.json"* ]]; then
            echo "💡 Consider running npm install to update dependencies"
        fi
        echo ""
    fi
fi

# Development server startup follow-up
if [[ "$TOOL_NAME" == "npm" || "$TOOL_NAME" == "yarn" || "$TOOL_NAME" == "pnpm" ]]; then
    if [[ "$TOOL_ARGS" == *"run dev"* || "$TOOL_ARGS" == *"start"* ]]; then
        echo "🚀 Development server started!"
        
        # Detect and display likely URLs
        if [ -f "package.json" ]; then
            if grep -q "next" package.json; then
                echo "🌐 Likely available at: http://localhost:3000"
            elif grep -q "vite" package.json; then
                echo "🌐 Likely available at: http://localhost:5173"
            elif grep -q "create-react-app" package.json; then
                echo "🌐 Likely available at: http://localhost:3000"
            fi
        fi
        echo ""
    fi
fi

# MCP installation follow-up
if [[ "$TOOL_NAME" == "mcp" && "$TOOL_ARGS" == *"add"* ]]; then
    MCP_NAME=$(echo "$TOOL_ARGS" | awk '{print $2}')
    echo "🔌 MCP '$MCP_NAME' installed successfully!"
    echo "💡 Consider updating .mcp.json for team sharing"
    echo "📚 Check documentation for usage patterns"
    echo ""
fi

# Pattern recognition and learning
SUCCESS_COUNT=$(wc -l < .claude/success-patterns.log 2>/dev/null || echo "0")
if [ $((SUCCESS_COUNT % 50)) -eq 0 ] && [ "$SUCCESS_COUNT" -gt 0 ]; then
    echo "🎯 Milestone: $SUCCESS_COUNT successful operations!"
    echo "💡 Consider reviewing patterns in .claude/success-patterns.log"
    echo "🚀 Your workflow is becoming more efficient!"
    echo ""
fi

# Workspace optimization suggestions
if [ -f ".claude/usage.log" ]; then
    FREQUENT_COMMANDS=$(tail -100 .claude/usage.log | awk '{print $3}' | sort | uniq -c | sort -nr | head -3)
    
    # Suggest optimizations for frequently used patterns
    while IFS= read -r line; do
        COUNT=$(echo "$line" | awk '{print $1}')
        COMMAND=$(echo "$line" | awk '{print $2}')
        
        if [ "$COUNT" -gt 10 ]; then
            case "$COMMAND" in
                "git")
                    if [ $((COUNT % 20)) -eq 0 ]; then
                        echo "⚡ Optimization suggestion: Consider git aliases for frequent operations"
                    fi
                    ;;
                "npm")
                    if [ $((COUNT % 15)) -eq 0 ]; then
                        echo "⚡ Optimization suggestion: Consider package.json script shortcuts"
                    fi
                    ;;
            esac
        fi
    done <<< "$FREQUENT_COMMANDS"
fi

exit 0