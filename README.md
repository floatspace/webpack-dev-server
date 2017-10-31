
利用webpack-dev-server实现跨域请求

webpack-config.js中设置代理

devServer: {
        inline: true,
        proxy: {
            '/api/*': {  // http://127.0.0.1:3000/api/*
                target: 'http://127.0.0.1:3000',
                changeOrigin: true
            }
        }
    }
    
    
expressServer文件中是express服务器启动文件, 端口号为: 3000, 模拟请求数接口数据
