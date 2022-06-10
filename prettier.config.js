module.exports = {
	printWidth: 100, // 单行长度
	// 缩进字节数
	tabWidth: 2,
	// 使用制表符而不是空格缩进行
	useTabs: true,
	vueIndentScriptAndStyle: true,
	singleQuote: true, // 使用单引号
	semi: false, // 结尾不用分号(true有，false没有)
	proseWrap: 'never',
	htmlWhitespaceSensitivity: 'ignore',
	endOfLine: 'lf', // "<lf|crlf|cr|auto>" 行尾换行符,默认是lf
	// 多行时尽可能打印尾随逗号。（例如，单行数组永远不会出现逗号结尾。） 可选值"<none|es5|all>"，默认none
	trailingComma: 'none',
	bracketSpacing: true, // 在对象前后添加空格-eg: { foo: bar }
	// 在JSX中使用单引号而不是双引号
	jsxSingleQuote: true,
	jsxBracketSameLine: true //多属性html标签的‘>’折行放置
}
