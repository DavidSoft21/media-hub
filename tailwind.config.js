/** @type {import('tailwindcss').Config} */

import typography from "@tailwindcss/typography"
import forms from "@tailwindcss/forms"
import aspectRatio from "@tailwindcss/aspect-ratio"
import containerQueries from "@tailwindcss/container-queries"

export default {
	content: [
		"./resources/**/*.blade.php",
		"./resources/**/*.js",
		"./resources/**/*.vue",
	],
	darkMode: false,
	theme: {
		extend: {},
	},
	plugins: [
		typography,
		forms,
		aspectRatio,
		containerQueries,
	],
};
