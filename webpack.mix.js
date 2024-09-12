const mix = require('laravel-mix');
let path = require('path')

mix
  .setPublicPath('dist')
  .js('resources/js/field.js', 'js')
  .sass('resources/sass/field.scss', 'css')
  .vue({ version: 3 })
  .webpackConfig({
    externals: {
      vue: 'Vue',
    },
    output: {
      uniqueName: 'brandonjbegle/nova4-google-autocomplete-field',
    }
  });
