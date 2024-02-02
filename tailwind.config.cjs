const daisyui = require('daisyui');

/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				title: ['Bebas Neue'],
				custom: ['Courier']
			}
		}
	},

	plugins: [daisyui],
	daisyui: {
		themes: ['dim', 'retro', 'cyberpunk', 'valentine', 'aqua']
	}
};

module.exports = config;
