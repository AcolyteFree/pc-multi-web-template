# vuePC端多页
vue PC端多页项目

# vue

> vue+webpack+element 多页项目

[![node version](https://img.shields.io/badge/node.js-%3E=_6.00-green.svg?style=flat-square)](http://nodejs.org/download/)
# 安装启动

#### 安装Node
推荐安装最新的 `LTS` 版本Node，如果本地没有安装Node或安装了低版本的Node，可以按下面的指引安装最新版的Node：

1. **Windows系统**，访问[https://nodejs.org/](https://nodejs.org/)，下载最新的 `LTS` 版本Node，点击默认安装即可。
2. **Mac系统**安装方式跟Windows一样。
3. **Linux系统**，推荐使用源码安装方式，这样无需自己配置 `path`，如果无法用源码安装，也可以直接二进制版本的Node，解压后把里面的bin目录路径加到系统的 `PATH` 即可：
	- **源码安装**：从[Node官网](https://nodejs.org/en/download/)下载最新版的**Source Code**(或者用`wget`命令下载)，解压文件(`tar -xzvf node-xxx.tar.gz`)，进入解压后的根目录(`node-xxx`)，依次执行`./configure`、`./make`和`./make install`。
	- **直接用二进制版本**：从[Node官网](https://nodejs.org/en/download/)下载最新版的**Linux Binaries**(或者用`wget`命令下载)，解压文件(`tar -xzvf node-xxx.tar.gz`)，解压后将Node二进制文件的bin目录完整路径加到系统的 `PATH`。

Node安装完成后，在命令行执行 `node -v` 查看下对应的Node版本是否安装成功：

	$ node -v
	v8.9.4
我们可以使用淘宝镜像：

	npm install cnpm -g --registry=https://registry.npm.taobao.org

## Build Setup

``` bash
# install dependencies
npm install 
or
cnpm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```


## Root Folder Structure
[http://localhost:8010/user/login.html](http://localhost:8010/user/login.html)

[http://localhost:8010/user/index.html](http://localhost:8010/user/index.html)

[http://localhost:8010/customer/index.html](http://localhost:8010/customer/index.html)

## Build

``` bash
# build for production with minification
npm run build // Firstly
node server.js  // Secondly

```
Then visit the pages
[http://localhost:2333/user/login.html](http://localhost:2333/user/login.html)

## Root Folder Structure

```bash
├── src  # main folder
│   ├── assets  # common assets folder
│   │   ├── img
│   │   │   └── logo.png
│   │   ├── js
│   │   └── css
│   ├── components # common components folder
│   │   └── modal.vue
│   └── pages  # pages
│       ├── user  # user part (folder name can be customized)
│       │   ├── login # login.html (folder name can be customized)
│       │   │   ├── app.js   # entry js (file name can't be customized unless you change the webpack.config.js)
│       │   │   ├── app.vue  # login vue (file name can be customized)
│       │   │   └── app.html # template html (file name can't be customized unless you change the webpack.config.js)
│       │   └── index # index.html
│       │       ├── app.js
│       │       ├── app.html
│       │       └── app.vue
│       └── customer # customer part (folder name can be customized)
│           └── home # home.html
│               ├── app.html
│               ├── app.js
│               └── app.vue
├── LICENSE
├── .babelrc          # babel config (es2015 default)
├── .eslintrc.js      # eslint config (eslint-config-vue default)
├── server.js         # port 2333
├── package.json
├── postcss.config.js # postcss (autoprefixer default)
├── webpack.config.js
└── README.md
```

## Dist Folder Structure

```bash
├── assets
│   ├── css
│   │   ├── customer
│   │   │   ├── home.css
│   │   │   └── home.css.map
│   │   ├── user
│   │   │   ├── index.css
│   │   │   ├── index.css.map
│   │   │   ├── login.css
│   │   │   └── login.css.map
│   │   ├── vendors.css
│   │   └── vendors.css.map
│   └── js
│       ├── customer
│       │   └── home.js
│       ├── user
│       │   ├── index.js
│       │   └── login.js
│       └── vendors.js
├── b02bdc1b846fd65473922f5f62832108.ttf
├── customer
│   └── home.html
├── logo.png
└── user
    ├── index.html
    └── login.html
```

 ## 配置接口代理
``` bash
 静态资源文件夹
    assetsSubDirectory: 'static',
 发布路径
    assetsPublicPath: '/',

 代理配置表，在这里可以配置特定的请求代理到对应的API接口
 例如将'localhost:8080/api/xxx'代理到'www.example.com/api/xxx'
 代理可以配置多个 如下例子
    proxyTable: {
      '/api': {
          target: 'www.example.com/', -------------------> 接口的域名
          secure: false,   ------------------------------>如果是https接口，需要配置这个参数
          changeOrigin: true, ---------------------------> 如果接口跨域，需要进行这个参数配置
          pathRewrite: {
            '^/api': ''
          }
      },
      '/api1': {
          target: 'www.example1.com/', -------------------> 接口的域名
          secure: false,  --------------------------------> 如果是https接口，需要配置这个参数
          changeOrigin: true,  ---------------------------> 如果接口跨域，需要进行这个参数配置
          pathRewrite: {
            '^/api1': ''
          }
      }
    },
    
```

```
  // 需要代理访问的域名
  let baseUrl = {                      
      serverB: 'http://baidu.com',
      serverA: 'http://gateway.fangkuaiyi.com',
  }
  // 配置请求接口和代理域名
  export const getInfo = async (param = {}, config = {}) => 
        await ajax.get(`${baseUrl.serverB}/mobile/home/getHeadData`,param, config);
        
``` 
## 注意
pages 下面有很多界面 有1级界面也有2级界面 ，如果我们需要
在pages下面新建一个文件夹 例如 test 在test中直接放入我们的
文件 app.html,app.js,app.vue,访问的时候直接访问http://127.0.0.1:8010/test.html  

不过不建议这么做，这样的做法是如果非要1级界面的时候才用这种方式。