## 项目简介

项目是理财类微信小程序，包含七日花费汇总、本月预算、每月详情等功能。

### 技术栈

-   前端框架：uni-app
-   状态管理：pinia
-   组件库：uni-ui、vant、ucharts

## 运行程序

1. 安装依赖

```shell
# npm
npm install

```

2. 运行程序

```shell
# 微信小程序端
npm run dev:mp-weixin
```

3. 微信开发者工具导入 `/dist/dev/mp-weixin` 目录

### 工程结构解析

```
├── .vscode                    # VS Code 插件 + 设置
├── dist                       # 打包文件夹（可删除重新打包）
├── src                        # 源代码
│   ├── wxcomponents           # 全局组件
│   ├── pages                  # 主包页面
│       ├── index               # 首页
│       ├── detail              # 详情
│       ├── my                  # 我的
│       └── login               # 登录页
│   ├── static                 # 存放应用引用的本地静态资源的目录
│       ├── images              # 普通图片
│       └── tabs                # tabBar 图片
│   ├── stores                 # 全局 pinia store
│       ├── modules             # 模块
│       └── index.ts            # store 入口
│   ├── styles                 # 全局样式
│       └── fonts.scss          # 字体图标
│   ├── types                  # 类型声明文件
│       └── component.d.ts      # 全局组件类型声明
│   ├── utils                  # 工具库
│   ├── App.vue                # 入口页面
│   ├── main.ts                # Vue初始化入口文件
│   ├── pages.json             # 配置页面路由等页面类信息
│   ├── manifest.json          # 配置appid等打包信息
│   └── uni.scss               # uni-app内置的常用样式变量
├── .editorconfig              # editorconfig配置
├── .eslintrc.cjs              # eslint配置
├── .prettierrc.json           # prettier配置
├── .gitignore                 # git忽略文件
├── index.html                 # H5端首页
├── package.json               # package.json依赖
├── tsconfig.json              # typescript配置
└── vite.config.ts             # vite配置
```
