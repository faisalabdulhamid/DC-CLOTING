let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix
	// .js('resources/assets/js/application/application.js', 'public/js')
	.js('resources/assets/app/main.js', 'public/js/app.js')
	// .js('resources/assets/js/client/client.js', 'public/js')
    // .sass('resources/assets/sass/client.scss', 'public/css');
	// .sourceMaps()
