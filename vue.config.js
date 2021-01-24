module.exports = {
    configureWebpack:{
        resolve:{
            alias:{
                // 配置快捷路径  @ ：src
                'assets':'@/assets',
                'network':'@/network',
                'views':'@/views',
                'components':'@/components',
                'common':'@/common',
                'content':'@/content'
            }
        }
    },
    // devServer:{
    //     proxy:{
    //         ["/dev-api"]:{
    //         target:'https://www.baidu.com',
    //           changeOrigin:true,
    //             pathRewrite: {
    //                 ['^' + "/dev-ap"]: ''
    //             }
    //         }
    //     }

    // }
};
