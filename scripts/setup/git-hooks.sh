#!/usr/bin/env bash

# ==============================================================================
# Git Hooks
# ==============================================================================

setup_git_hooks() {
    if ! cmd_exists mise exec -- pre-commit; then
        return 0
    fi

    echo "🔧 Installing pre-commit hooks..."
    mise exec -- pre-commit install
}
