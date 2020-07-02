const copyPack = require('copy-webpack-plugin');


module.exports = {
	plugins: [
		new CopyPlugin({
			patterns: [
				{
					from: './node_modules/@astrouxds/rux-static',
					globalOptions: {
						dot: true,
						gitignore: true,
						ignore: ['readme.md', 'package.json', 'favicon.ico'],
					}
				},
			],
		}),
	],
};