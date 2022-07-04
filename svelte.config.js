import preprocess from "svelte-preprocess";
import adapter from '@sveltejs/adapter-static';
//const dev = process.env.NODE_ENV !== 'production';
/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
		preprocess({
			postcss: true
		}),
	],
	kit: {
		appDir: 'internal',
		trailingSlash: "never",
		files: {
			assets: "./static",
			routes: "./src/routes",
			lib: "./src/lib",
			template: 'src/app.html'
		},
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: "200.html",
			precompress: false
		}),
		prerender: {
			default: true
		},
		version: {
			name: Date.now().toString(),
			pollInterval: 0
		},
		vite: {
			build: {
				minify: true
			}
		}
	}
};

export default config;
