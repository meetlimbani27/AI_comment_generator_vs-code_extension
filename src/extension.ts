
import * as vscode from 'vscode';
import { buildPrompt } from './promptBuilder';
import { generateComment } from './ollama';
import { addCommentToFile, getCurrentLine } from './manageEditor';

export function activate(context: vscode.ExtensionContext) {


	console.log('Congratulations, your extension "commentgenerator" is now active!');


	const generateCommentCommand  = vscode.commands.registerCommand('commentgenerator.generateComment', async () => {

		vscode.window.showInformationMessage('Generating comment, please wait');

		const editor = vscode.window.activeTextEditor;
		if (editor === undefined ) {
			vscode.window.showErrorMessage("Can't find active editor")
			return;
		}

		const prompt = await buildPrompt(editor);
		console.log(prompt);

		if( prompt === undefined) {
			vscode.window.showErrorMessage("Failed to generate prompt");
			return;
		}

		const comment = await generateComment(prompt);
		console.log("comment is: ",comment);

		if (comment === undefined) {
            vscode.window.showErrorMessage('Failed to generate comment');
            return;
        }

		const fileURI = editor.document.uri;
		const fileName = editor.document.fileName;
		const currentLine = getCurrentLine(editor);

		addCommentToFile(fileURI, fileName, currentLine, comment);
	});

	context.subscriptions.push(generateCommentCommand );
}

// This method is called when your extension is deactivated
export function deactivate() {}
