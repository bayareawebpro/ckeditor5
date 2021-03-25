'use strict';
const path = require( 'path' );
const { styles } = require( '@ckeditor/ckeditor5-dev-utils' );
const CKEditorWebpackPlugin = require( '@ckeditor/ckeditor5-dev-webpack-plugin' );
const TerserWebpackPlugin = require( 'terser-webpack-plugin' );

module.exports = {
	devtool: 'source-map',
	performance: { hints: false },
	entry: path.resolve( __dirname, 'src', 'index.js' ),
	output: {
		library: 'CkEditor',
		path: path.resolve( __dirname, 'build' ),
		filename: 'ckeditor.js',
		libraryTarget: 'window',
		libraryExport: 'default'
	},
	optimization: {
		minimizer: [
			new TerserWebpackPlugin( {
				sourceMap: true,
				terserOptions: {
					output: {
						comments: /^!/
					}
				},
				extractComments: false
			} )
		]
	},
	plugins: [
		new CKEditorWebpackPlugin( {
			language: 'en',
		} )
	],
	module: {
		rules: [
			{
				test: /ckeditor5-[^/\\]+[/\\]theme[/\\]icons[/\\][^/\\]+\.svg$/,
				use: [ 'raw-loader' ]
			},
			{
				test: /ckeditor5-[^/\\]+[/\\]theme[/\\].+\.css$/,
				use: [
					{
						loader: 'style-loader',
						options: {
							injectType: 'singletonStyleTag',
							attributes: {
								'data-cke': true
							}
						}
					},
					{
						loader: 'postcss-loader',
						options: styles.getPostCssConfig( {
							themeImporter: {
								themePath: require.resolve( '@ckeditor/ckeditor5-theme-lark' )
							},
							minify: true
						} )
					},
				]
			}
		]
	}
};
