/**
 * @fileoverview CSS plugin.
 * @author Nicholas C. Zakas
 */

//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------

import { CSSLanguage } from "./languages/css-language.js";
import { CSSSourceCode } from "./languages/css-source-code.js";
import noEmptyBlocks from "./rules/no-empty-blocks.js";
import noDuplicateImports from "./rules/no-duplicate-imports.js";
import noUnknownAtRules from "./rules/no-unknown-at-rules.js";
import noInvalidProperties from "./rules/no-invalid-properties.js";

//-----------------------------------------------------------------------------
// Plugin
//-----------------------------------------------------------------------------

const plugin = {
	meta: {
		name: "@eslint/css",
		version: "0.0.0", // x-release-please-version
	},
	languages: {
		css: new CSSLanguage(),
	},
	rules: {
		"no-empty-blocks": noEmptyBlocks,
		"no-duplicate-imports": noDuplicateImports,
		"no-unknown-at-rules": noUnknownAtRules,
		"no-invalid-properties": noInvalidProperties,
	},
	configs: {},
};

Object.assign(plugin.configs, {
	recommended: {
		plugins: { css: plugin },
		rules: {
			"css/no-empty-blocks": "error",
			"css/no-duplicate-imports": "error",
			"css/no-unknown-at-rules": "error",
			"css/no-invalid-properties": "error",
		},
	},
});

export default plugin;
export { CSSLanguage, CSSSourceCode };
