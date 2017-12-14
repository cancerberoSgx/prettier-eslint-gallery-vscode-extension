'use strict';
import * as vscode from 'vscode'
import { Range, Position } from 'vscode'
const formatter = require('prettier-eslint-gallery')
import f from 'prettier-eslint-gallery'

export function activate(context: vscode.ExtensionContext) {
    let disposable = vscode.commands.registerCommand('extension.prettier-eslint-gallery', () => {

        let editor = vscode.window.activeTextEditor
        let extensionConfig = vscode.workspace.getConfiguration('prettier-eslint-gallery')
        let config = Object.assign({source: editor.document.getText()}, extensionConfig)
        let result = formatter(config)
        debugger;
        editor.edit((editorEdit) => {
            editorEdit.replace(
                new Range(editor.document.lineAt(0).range.start, 
                    editor.document.lineAt(editor.document.lineCount - 1).range.end), 
                result
            ) 
        })
    })

    context.subscriptions.push(disposable)
}

// this method is called when your extension is deactivated
export function deactivate() {
}