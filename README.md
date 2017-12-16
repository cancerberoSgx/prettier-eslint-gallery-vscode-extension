[![Build Status](https://travis-ci.org/cancerberoSgx/prettier-eslint-gallery-vscode-extension.png?branch=master)](https://travis-ci.org/cancerberoSgx/prettier-eslint-gallery-vscode-extension)
[![Dependencies](https://david-dm.org/cancerberosgx/prettier-eslint-gallery-vscode-extension.svg)](https://david-dm.org/cancerberosgx/prettier-eslint-gallery-vscode-extension)
[![devDependencies Status](https://david-dm.org/cancerberosgx/prettier-eslint-gallery-vscode-extension/dev-status.svg)](https://david-dm.org/cancerberosgx/prettier-eslint-gallery-vscode-extension?type=dev)


# What's this?

Visual Studio Code extension to format JavaScript code using popular styleguides like airbnb, standardjs, google, facebook, etc. Based on eslint and prettier. Based on [prettier-eslint-gallery](https://github.com/cancerberoSgx/prettier-eslint-gallery)

## Installing

This project is still not published in the official marketplace - for installing you must [install it locally](https://code.visualstudio.com/docs/extensions/example-hello-world#_installing-your-extension-locally):

```sh
cd $HOME/.vscode/extensions # or in windows cd %USERPROFILE%\.vscode\extensions
git clone https://github.com/cancerberoSgx/prettier-eslint-gallery-vscode-extension.git
cd prettier-eslint-gallery-vscode-extension
npm install
```

# Using

In vscode **User Settings** you can configure which style guide you want to configure with property `"prettier-eslint-gallery.style"` . If you want to force ecma 5 compatible output you can use property
`"prettier-eslint-gallery.mode": "default_es5"`

Then open any JavaScript file, enter `control-shift-p` search for "Format JavaScript with prettier-eslint-gallery". This will format the current editor - you must save the file after that.

Note: the first time it could take a couple of seconds to the tool to do the fomatting - but next runs will be must faster

# TODO / ISSUES

 * publish it in vscode marketplace
 * Format a selection
 * format using my custom eslintrc
 * format a whole folder and automatically save the files
