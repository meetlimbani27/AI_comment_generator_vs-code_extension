# Project Structure

## Overview
This is a VS Code extension project that generates comments for selected code using an AI model.

## Directory Structure

```
commentgenerator/
├── .vscode/                      # VS Code configuration
│   ├── extensions.json           # Recommended extensions
│   ├── launch.json              # Debug launch configurations
│   ├── settings.json            # VS Code settings
│   └── tasks.json               # Build tasks
├── src/                         # Source code
│   ├── extension.ts             # Main extension entry point
│   ├── manageEditor.ts          # Editor management utilities
│   ├── ollama.ts               # Ollama AI integration
│   ├── promptBuilder.ts        # Prompt generation logic
│   └── test/                   # Test files
│       └── extension.test.ts   # Extension tests
├── .gitignore                  # Git ignore rules
├── .vscode-test.mjs            # VS Code test configuration
├── .vscodeignore               # VS Code package ignore rules
├── CHANGELOG.md                # Version change history
├── eslint.config.mjs           # ESLint configuration
├── package.json                # Project dependencies and scripts
├── README.md                   # Project documentation
├── tsconfig.json               # TypeScript configuration
└── vsc-extension-quickstart.md # Quick start guide
```

## Key Components

1. **Extension Core (`src/extension.ts`)**
   - Main entry point for the extension
   - Registers commands and manages extension lifecycle

2. **Editor Management (`src/manageEditor.ts`)**
   - Handles VS Code editor interactions
   - Manages comment insertion into files

3. **AI Integration (`src/ollama.ts`)**
   - Integrates with Ollama AI model
   - Handles comment generation requests

4. **Prompt Building (`src/promptBuilder.ts`)**
   - Constructs prompts for the AI model
   - Formats code context for comment generation

## Configuration Files
- `package.json`: NPM package configuration and extension metadata
- `tsconfig.json`: TypeScript compiler settings
- `eslint.config.mjs`: Code linting rules
- `.vscodeignore`: Files to exclude from the extension package

## Testing
Tests are located in `src/test/` directory and can be run using the VS Code Test Runner.
