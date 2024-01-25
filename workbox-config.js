module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{jpeg,png,html,js,json,mp4}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};