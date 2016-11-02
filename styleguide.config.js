const path = require('path');

module.exports = {
	title: 'basic style guide',
	sections: [
		{ name: 'Basic Styles', content: './docs/intro.md' },
		{ components: './lib/components/**/**/*.js'}
	],
	updateWebpackConfig(webpackConfig) {
		// Your source files folder or array of folders ('lib' here), should not include node_modules
		const dir = path.join(__dirname, 'lib');
		webpackConfig.module.loaders.push(
			// Babel loader will use your project’s .babelrc
			{
				test: /\.jsx?$/,
				include: dir,
				loader: 'babel'
			},
			// Other loaders for your components
			{
				test: /\.css$/,
				include: dir,
				loader: 'style!css?modules&importLoaders=1'
			}
		);
		return webpackConfig;
	}
};