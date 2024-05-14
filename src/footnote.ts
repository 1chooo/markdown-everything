import * as vscode from 'vscode';

export function renderFootnote(md: any) {
	if (vscode.window.activeTextEditor?.document.languageId === 'markdown') {
		return md.use(require('markdown-it-footnote'));
	}
	return md;
}
