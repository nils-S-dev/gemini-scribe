import * as vscode from 'vscode';
import { Optional } from './types/Optional';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { error } from './utils';

export class Scribe {

	private constructor(
		public selection: vscode.Selection,
		public code: string
	) { }

	static init(
		selection: vscode.Selection
	): Promise<Scribe> {
		return new Promise<Scribe>(async (resolve, reject) => {

			try {

				const editor: Optional<vscode.TextEditor> = vscode.window.activeTextEditor;
				if (!editor) throw error('No active editor found.');
			
				const apiKey: Optional<string> = 
				vscode.workspace.getConfiguration('gemini-scribe').get('apiKey')
				if (!apiKey) throw error('An API key must be provided via the plugin configuration.');
		
				const ai = new GoogleGenerativeAI(apiKey);
				const gemini = ai.getGenerativeModel({ model: "gemini-1.5-flash" });
		
				// @TODO rewrite to make it appropirate for a single selection
				const code = 
					Array.from(
						{ length: selection.end.line - selection.start.line + 1 }, 
						(_, i) => editor.document.lineAt(selection.start.line + i).text
					)
					.flat()
					.reduce(
						(result, line, index) => {
							return result += `${index === 0 ? "" : "\n"}${line}`;
						},
						""
					)
					.replace(/(\/\*[\s\S]*?\*\/)|(\/\/[^\n]*)/g, '');
		
				const result = await gemini.generateContent(
					`
					Please provide a proper documentation for the code I provide you below. 
					Do not respond with any text other than the document code. 
					Be aware that the code provided to you while be in a language associated with the following file Extension: "${
						editor.document.fileName.substring(editor.document.fileName.lastIndexOf('.') + 1)
					}"
					Do not change anything about the code itself, just provide the documentation.
					Do not indicate the language with backticks
					If the code below includes comments remove them before adding new ones
		
					${code}
				`
				);
				const processed = result.response.text();
	
				resolve(new Scribe(
					selection,
					processed
				));
			} catch (err) {
				reject(err);
			}

		});
	}
 
}