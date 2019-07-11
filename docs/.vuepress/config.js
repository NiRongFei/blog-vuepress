module.exports = {
  title: '青青子衿 悠悠我心',
  description: '阳明的个人博客',
  host: 'localhost',
  port: 9999,
  dest: '../vuepress',
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
  ],
  theme: 'reco',
  themeConfig: {
    nav: [
      { text: '首页', link: '/', icon: 'reco-home' },
      { text: '时间轴', link: '/timeline/', icon: 'reco-date' },
      // {
      //   text: '联系我',
      //   icon: 'reco-message',
      //   items: [
      //     { text: 'NPM', link: 'https://www.npmjs.com/~reco_luan', icon: 'reco-npm' },
      //     { text: 'GitHub', link: 'https://github.com/recoluan', icon: 'reco-github' },
      //     { text: '简书', link: 'https://www.jianshu.com/u/cd674a19515e', icon: 'reco-jianshu' },
      //     { text: 'CSDN', link: 'https://blog.csdn.net/recoluan', icon: 'reco-csdn' },
      //     { text: '博客圆', link: 'https://www.cnblogs.com/luanhewei/', icon: 'reco-bokeyuan' },
      //     { text: 'WeChat', link: 'https://mp.weixin.qq.com/s/mXFqeUTegdvPliXknAAG_A', icon: 'reco-wechat' }
      //   ]
      // }
    ],
    blogConfig: {
      category: {
        location: 2,
        text: '分类'
      },
      tag: {
        location: 3,
        text: '标签'
      }
    },
    author: '阳明先生',
    huawei: false,
    lastUpdated: '上次更新',
    logo: '/head.png',
    record: '',
    search: true,
    searchMaxSuggestions: 10,
    sidebar: 'auto',
    startYear: '2016',
    type: 'blog'
    // 密钥配置
    // keyPage: {
    //   keys: ['your password'],
    //   color: '#42b983',
    //   lineColor: '#42b983'
    // },
    // 评论配置
    // valineConfig: {
    //   appId: '...',// your appId
    //   appKey: '...', // your appKey
    // }
  },
  markdown: {
    lineNumbers: true
  },
  plugins: [
    ['@vuepress/medium-zoom', true],
    ['flowchart', true]
  ]
}
