const daisyui = require('daisyui');

/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				bubblegum: ['Fredoka', 'sans-serif']
			}
		}
	},

	plugins: [daisyui],
	daisyui: {
		themes: ['cupcake']
	}
};

module.exports = config;
