import * as assert from 'assert';

// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
import * as vscode from 'vscode';
import * as highlightChars from '../../extension';

suite('Extension Test Suite', () => {
  vscode.window.showInformationMessage('Start all tests.');

  test("Should highlight bad characters in example file", () => {
    const editor = vscode.window.activeTextEditor;
    assert.ok(editor);
    const decorations = highlightChars.createDecorations(<vscode.TextEditor>editor);
    // the example file contains 18 dodgy characters
    assert.equal(decorations.length, 18);
    // make sure the first two decorators are where they should be
    assert.deepEqual(decorations[0].range.start, { _line: 0, _character: 18 });
    assert.deepEqual(decorations[1].range.start, { _line: 1, _character: 19 });
  });
});
