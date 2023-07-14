module.exports = {
    title: 'SpringMeng',
    theme:'reco',

    head: [
        // 设置 favor.ico，.vuepress/public 下
        [
            'link', { rel: 'icon', href: '/assets/img/1.jpg' }
        ],
        ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]

    ],
    themeConfig: {
        auth:"小孟",
        // 导航栏LOGO
        logo: '/assets/img/1.jpg',
        subSidebar: false,
        authorAvatar: '/assets/img/0100ebedf8e18b8a97a5dc862764f24.jpg',
        type: 'blog',
        // 顶部导航栏
        nav: require('./nav.js'),
        sidebar: require('./sidebar')
    },
    plugins:[
        ['@vuepress-reco/vuepress-plugin-bulletin-popover', {
            width: '200px', // 默认 260px
            body: [
                {
                    type: 'title',
                    content: '联系小孟',
                    style: 'text-aligin: center;'
                },
                {
                    type: 'image',
                    src: '/微信二维码.png'
                },
                {
                    type: 'title',
                    content: '面试小程序',
                    style: 'text-aligin: center;'
                },
                {
                    type: 'image',
                    src: '/gh_1c155634c0dc_258 (1).jpg'
                }
            ],
            footer: [

            ]
        }],
        ['vuepress-plugin-readmore-popular', {
            // 已申请的博客 ID
            blogId: '99864-4749568914124-863',
            // 已申请的微信公众号名称
            name: 'SpringMeng',
            // 已申请的微信公众号回复关键词
            keyword: '密码',
            // 已申请的微信公众号二维码链接
            qrcode: 'https://www.ittool.cc/google/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20230315200637.jpg',
            // // 文章内容的选择器，若使用的不是官方默认主题，则需要根据第三方的主题来设置
            // selector: 'div.theme-default-content',
            // // 自定义的 JS 资源链接，可用于 CDN 加速
            // libUrl: 'https://qiniu.techgrow.cn/readmore/dist/readmore.js',
            // // 自定义的 CSS 资源链接，可用于适配不同风格的博客
            // cssUrl: 'https://qiniu.techgrow.cn/readmore/dist/vuepress.css',
            // 文章排除添加导流工具的URL规则，支持使用路径、通配符、正则表达式的匹配规则
            excludes: { strExp: [], regExp: [] },
            // 是否反转URL排除规则的配置，即只有符合排除规则的文章才会添加导流工具
            reverse: false,
            selector:'div.theme-reco-content',
            // 每篇文章随机添加导流工具的概率，有效范围在 0.1 ~ 1 之间，1 则表示所有文章默认都自动添加导流工具
            random: 1
        }
        ]
    ]
}