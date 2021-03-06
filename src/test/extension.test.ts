import * as assert from 'assert';

import * as vscode from 'vscode';
import * as myExtension from '../extension';

const galleryConfig = require('../../node_modules/prettier-eslint-gallery/src/config');

suite('settings', () => {

  test('settings should contain valid gallery values', () => {
    assert.equal(
      galleryConfig
        .getAvailableStyles()
        .indexOf(vscode.workspace.getConfiguration('prettier-eslint-gallery').style) != -1,
      true,
      'style in settings must be a valid gallery one',
    );

    assert.equal(
      galleryConfig
        .getAvailableModes()
        .indexOf(vscode.workspace.getConfiguration('prettier-eslint-gallery').mode) != 0,
      true,
      'mode in settings must be a valid gallery one',
    );
  });

});
