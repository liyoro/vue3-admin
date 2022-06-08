# vue3-admin

pnpm + Vite + Vue3 + Typescript + Pinia + Element-Plus +

## 运行

启动开发服务器

```
pnpm run dev

别名：vite dev，vite serve
```

## 代码总览

```
vue3-admin
├─ .vscode					# vscode推荐配置
├─ config					# 项目配置项
├─ public					# 静态资源文件（忽略打包）
├─ src
	├─ api					# API 接口管理
	├─ assets				# 静态资源文件
	├─ components			# 全局组件
	├─ hooks               	# 封装 Hooks
	├─ layout				# 页面框架布局
	├─ routers				# 路由管理
	├─ store				# pinia store
	├─ styles				# 全局样式
	├─ utils				# 工具库
	├─ views				# 页面
	├─ App.vue             	# 入口页面 
	├─ auto-imports.d.ts 	# 依赖按需自动导入
	├─ components.d.ts		# 项目组件自动按需导入
	├─ env.d.ts				# ts 识别 vue 文件
	└─ main.ts             	# 入口文件
├─ .editorconfig			# 编辑器配置（格式化）
├─ .env.development			# 开发环境配置
├─ .env.production			# 生产环境配置
├─ .eslintignore			# 忽略 Eslint 校验
├─ .eslintrc.js           	# Eslint 校验配置
├─ .gitignore             	# git 提交忽略
├─ .npmrc					# npm运行时配置文件
├─ .prettierignore        	# 忽略 prettier 格式化
├─ index.html				# 入口 html
├─ LICENSE					# 开源协议
├─ package.json				# 包管理
├─ pnpm-lock.yaml			# pnpm包版本锁
├─ postcss.config.js      	# postcss 配置
├─ prettier.config.js		# prettier 配置
├─ README.md				# 项目介绍文档
├─ CONFIGURE.md				# 项目配置介绍文档
├─ tsconfig.json			# typescript 全局配置
└─ vite.config.ts			# vite 配置


├─ directives          	# 全局指令文件

```
