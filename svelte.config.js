import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: [vitePreprocess(), mdsvex()],
	kit: { 
		adapter: adapter({
			// default options are shown. On some platforms
			// these options are set automatically — see below
			pages: 'build',
			assets: 'build',
			fallback: "404.html",
			precompress: false,
			strict: true
		}),
		paths: {
			// @see https://svelte.dev/docs/kit/adapter-static#GitHub-Pages
			// I added base here and in deploy and it doesn't work. Why.
			base: process.argv.includes("dev") ? "" : "bempfoobq052021.github.io/shirakamifubuki-unofficial-fansite"
		}
	},
	extensions: ['.svelte', '.svx']
};

export default config;
