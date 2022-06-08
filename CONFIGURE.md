构建过程参考 [Vite官方文档](https://cn.vitejs.dev/)

* [@vitejs/plugin-vue](https://github.com/vitejs/vite/tree/main/packages/plugin-vue)
* [@vitejs/plugin-vue-jsx](https://github.com/vitejs/vite/tree/main/packages/plugin-vue-jsx)


使用`VSCode`开发

## 初始化项目

[pnpm](https://www.pnpm.cn/)

```
pnpm env use --global 13
```

### 方法一

```
pnpm create vite vue3-admin -- --template vue-ts
```

### 方法二

```
pnpm create vite

✔ Project name: … vue3-admin
✔ Select a framework: › vue
✔ Select a variant: › vue-ts
```

## 配置

### @types/node

```
pnpm add @types/node -D
```

### 代码格式化需要Vscode插件配合

`Prettier`、`ESLint`、`TSLint`

### eslint

[eslint-define-config](https://www.npmjs.com/package/eslint-define-config)

```
pnpm add eslint eslint-define-config -D
```

#### 初始化`eslint`

```
npx eslint --init
```

- How would you like to use ESLint? --- To check syntax and find problems
- What type of modules does your project use? --- JavaScript modules (import/export)
- Which framework does your project use? --- Vue.js
- Does your project use TypeScript? --- YES
- Where does your code run? --- Browser、Node
- What format do you want your config file to be in? --- JavaScript
- Would you like to install them now with npm? --- No

选 No，用 pnpm 安装

```
pnpm add eslint-plugin-vue@latest @typescript-eslint/eslint-plugin@latest @typescript-eslint/parser@latest -D
```

最终会生成`.eslintrc.js`文件，`eslint`在这个文件配置

#### 默认 eslint 不会解析 vue 文件，需要一个额外的解析器来解析

在`.eslintrc.js`文件添加

```
"parser":"vue-eslint-parser"
```

#### eslint 检查命令

```
"lint": "eslint . --ext .vue,.js,.ts,.jsx,.tsx --fix"
```

### prettier

```
pnpm add prettier -D
```

[官方文档](https://prettier.io/docs/en/options.html)

在`.eslintrc.js`文件添加

```
extends: [
  'prettier',
  'plugin:prettier/recommended'
]
```

`prettier`的配置在 `prettier.config.js`文件

#### prettier 检查命令

```
"format": "prettier --write \"./**/*.{vue,ts,tsx,js,jsx,css,less,scss,json,md}\""
```

### prettier、eslint冲突

```
pnpm add eslint-config-prettier eslint-plugin-prettier -D
```

### 依赖按需自动导入

[unplugin-auto-import](https://github.com/antfu/unplugin-auto-import)

```
pnpm add unplugin-auto-import -D
```

`vite.config.ts`配置

```
plugins: [
  AutoImport({
    imports: ['vue', 'vue-router'],
    dts: 'src/auto-imports.d.ts'
  })
]
```


### sass

```
pnpm add sass autoprefixer postcss -D
```

### vue-router

```
pnpm add vue-router
```

### element-plus

[element-plus](https://element-plus.org/zh-CN/#/zh-CN)

```
pnpm install element-plus -D
```

按需导入

```
pnpm add unplugin-vue-components -D
```

配置参考 [按需导入](https://element-plus.org/zh-CN/guide/quickstart.html#%E6%8C%89%E9%9C%80%E5%AF%BC%E5%85%A5)

*注意*

`vite.config.ts`配置文件里面，全局css文件需要改成如下，不然会报错

```
css: {
  preprocessorOptions: {
    scss: {
      additionalData: `@use "@/styles/variables.scss" as *;`
    }
  }
}
```

### Pinia

[pinia](https://github.com/vuejs/pinia)

[pinia-plugin-persist](https://seb-l.github.io/pinia-plugin-persist/)

```
pnpm add pinia pinia-plugin-persist -D
```

### vite-plugin-vue-setup-extend

name 可以写在 script 标签上

[vite-plugin-vue-setup-extend](https://github.com/vbenjs/vite-plugin-vue-setup-extend)

```
pnpm add vite-plugin-vue-setup-extend -D
```

### vite-plugin-compression 代码压缩

[vite-plugin-compression](https://github.com/vbenjs/vite-plugin-compression)

```
pnpm add vite-plugin-compression -D
```

### Chunk 拆包

```
// vite.config.ts
build: {
  rollupOptions: {
    output: {
      manualChunks: configManualChunk
    }
  }
}
```

## 错误

### 1

```
The 1 extension(s) below, in workspace recommendations have issues: johnsoncodehk.volar (not found in marketplace)
```

解：

``` extensions.json
{
  "recommendations": ["vue.volar"]
}
```

``` settings.json
"[vue]": {
    "editor.defaultFormatter": "Vue.volar"
}
```

### 2

```

```