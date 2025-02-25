import * as vscode from 'vscode';

export function error(msg: string): Error {
    vscode.window.showErrorMessage(msg);
    console.error(msg);
    return new Error(msg);
}