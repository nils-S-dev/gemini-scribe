// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { Scribe } from './Scribe';
import { error } from './utils';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	const disposable = vscode.commands.registerCommand('gemini-scribe.addDocumentation', async (something) => {

		const editor = vscode.window.activeTextEditor;
        if (!editor) throw error('No active editor found.');

		const selections = editor?.selections;
		if (!selections) throw error('No selected lines could be determined.');

		Promise.all(
			selections.map(selection => Scribe.init(selection))
		)
		.then(
			(results: Array<Scribe>) => {
				editor.edit(editBuilder => {
					results.forEach(({
						selection,
						code
					}) => {
					  editBuilder.replace(selection, code);
					});
				  });
			}
		)
		.then(
			() => vscode.window.showInformationMessage('Documentation added successfully!')
		)
		.catch((err: Error)  => {
			vscode.window.showErrorMessage('An error occured while processing input', err.message);
		});
	});

	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}