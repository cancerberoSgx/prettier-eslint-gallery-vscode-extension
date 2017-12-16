import * as vscode from 'vscode';
import { Range, Position } from 'vscode';


export function activate(context: vscode.ExtensionContext) {
  let disposable = vscode.commands.registerCommand('extension.prettier-eslint-gallery', () => {
    formatCurrentEditor();
  });
  context.subscriptions.push(disposable);
}

export function deactivate() {}


const formatter = require('prettier-eslint-gallery');
export function formatCurrentEditor(){
  let editor = vscode.window.activeTextEditor;
  let extensionConfig = vscode.workspace.getConfiguration('prettier-eslint-gallery');
  let config = Object.assign({ source: editor.document.getText() }, extensionConfig);
  let result;
  try {
    result = formatter(config);
  } catch (ex) {
    let errMessage = 'Cannot format code with syntax error' + ex
    vscode.window.showErrorMessage(errMessage);
    console.log(errMessage)
    console.log(ex.stack)
    debugger
    return;
  }
  editorReplaceText(editor, result)
}


export function editorReplaceText(editor, result, done=undefined){
  editor.edit(editorEdit => {
    editorEdit.replace(
      new Range(
        editor.document.lineAt(0).range.start,
        editor.document.lineAt(editor.document.lineCount - 1).range.end,
      ),
      result,
    );
    done && done()
  });
}
