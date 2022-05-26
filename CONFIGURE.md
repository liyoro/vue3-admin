构建过程参考 [Vite官方文档](https://cn.vitejs.dev/)

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

### vue-router

```
pnpm add vue-router
```

### Pinia

[pinia-plugin-persist](https://seb-l.github.io/pinia-plugin-persist/)

```
pnpm add pinia pinia-plugin-persist -D
```



## 错误

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