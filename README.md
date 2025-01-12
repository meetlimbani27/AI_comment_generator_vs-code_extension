# Comment Generator VS Code Extension

A powerful VS Code extension that automatically generates insightful code comments using AI. Simply select your code and get meaningful comments that explain its purpose and functionality.

## 🚀 Features

- **Smart Comment Generation**: Generates contextual comments for selected code blocks
- **Multi-Language Support**: Works with various programming languages
- **Easy to Use**: Simple keyboard shortcut or command palette integration
- **AI-Powered**: Leverages Ollama's AI model for intelligent comment generation
- **Real-Time Processing**: Quick comment generation with minimal delay

## 🛠️ Tech Stack

- **TypeScript**: Main development language
- **VS Code Extension API**: For extension development
- **Ollama AI**: Local AI model for comment generation
- **Node.js**: Runtime environment
- **ESLint**: Code linting and formatting

## 📋 Requirements

1. **Node.js**: Version 16.x or higher
2. **VS Code**: Version 1.96.0 or higher
3. **Ollama**: Local installation required
   - Must be running on `http://127.0.0.1:11434`
   - Phi3.5 model must be installed

## 🚀 Installation & Setup

1. **Clone the Repository**

   ```bash
   git clone [repository-url]
   cd commentgenerator
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Install Ollama**

   - Follow instructions at [Ollama's official website](https://ollama.ai)
   - Pull the Phi3.5 model:
     ```bash
     ollama pull phi3.5
     ```

4. **Start Ollama Server**
   ```bash
   ollama serve
   ```

## 🏃‍♂️ Running the Extension

### Development Mode

1. Open the project in VS Code:

   ```bash
   code .
   ```

2. Press `F5` to start debugging
   - This will open a new VS Code window with the extension loaded
   - The debug console will show any logs or errors

### Testing the Extension

1. In the new VS Code window:
   - Open any code file
   - Select a code block
   - Press `Ctrl+Shift+P` (Windows/Linux) or `Cmd+Shift+P` (Mac)
   - Type "Generate Comment" and select the command

### Building for Production

1. **Compile the Extension**

   ```bash
   npm run compile
   ```

2. **Package the Extension**
   ```bash
   npm run vscode:prepublish
   ```

## 🎮 Usage

1. Select a block of code you want to comment
2. Use one of these methods to generate a comment:
   - Press `Ctrl+Shift+P` and type "Generate Comment"
   - Use the context menu (right-click) and select "Generate Comment"
3. The AI-generated comment will be automatically inserted above your selected code

### OR

1. Go to Key Bindings in your VS Code Settings and then search for "Generate Comment" command and then bind the key you are comfortable with , this will allow you to quickly generate comments from the key bindings you created.

## ⚙️ Extension Settings

Currently, this extension doesn't require any additional settings. It works out of the box with the default configuration.

## 🔍 Troubleshooting

1. **No Comment Generated**

   - Ensure Ollama server is running
   - Check if Phi3.5 model is installed
   - Verify your code selection

2. **Slow Response**
   - Check your Ollama server connection
   - Ensure you have sufficient system resources

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. Commit your changes
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```
4. Push to the branch
   ```bash
   git push origin feature/AmazingFeature
   ```
5. Open a Pull Request

## 🐛 Known Issues

- First-time comment generation might be slower due to model loading from Ollama
- Currently supports basic comment syntax for js and python only

## 🔮 Future Enhancements

- Support for more programming languages
- Customizable comment styles
- Integration with more AI models
- Comment style configuration options
- Batch comment generation

---

**Made with 🧡 by Meet**
