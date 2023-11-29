module.exports = {
	"env": {
		"browser": false,
		"node": true,
		"es2021": true
	},
	"extends": [
		"eslint:recommended",
		"plugin:vue/vue3-essential"
	],
	"overrides": [ 
		{
			"env": {
				"node": true
			},
			"files": [
				".eslintrc.{js,cjs}"
			],
			"parserOptions": {
				"sourceType": "script"
			}
		}
	],
	"parserOptions": {
		"ecmaVersion": "latest",
		"sourceType": "module"
	},
	"plugins": [
		"vue"
	],
	"rules": {
		"no-mixed-spaces-and-tabs": ["error", "smart-tabs"],
		"indent": [
			"error",
			"tab"
		],
		"linebreak-style": "off",
		"quotes": [
			"error",
			"double"
		],
		"semi": "off"
	}
}
