module.exports = {
  description: '知之真切笃实处即是行 行之明觉精察处即是知',
  dest: 'docs/.vuepress/dist',
  host: 'localhost',
  port: 9999,
  theme: 'reco',
  title: '知行合一',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
  ],
  markdown: {
    lineNumbers: true
  },
  plugins: [['@vuepress/medium-zoom', true], ['flowchart', true]],
  themeConfig: {
    author: '阳明先生',
    huawei: false,
    lastUpdated: '上次更新',
    logo: '/avatar.png',
    record: '',
    search: true,
    searchMaxSuggestions: 10,
    sidebar: 'auto',
    startYear: '2016',
    type: 'blog',
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
    // 密钥配置
    // keyPage: {
    //   keys: ['1208'],
    //   color: '#1E90FF',
    //   lineColor: '#1E90FF'
    // },
    nav: [
      { text: '首页', link: '/', icon: 'reco-home' },
      { text: '时间轴', link: '/timeLine/', icon: 'reco-date' },
      { text: 'GitHub', link: 'https://github.com/NiRongFei', icon: 'reco-github' }
    ],
    themePicker: {
      color1: '#FF4500',
      color2: '#FF8C00',
      color3: '#1E90FF',
      color4: '#32CD32',
    },
    // 评论配置
    valineConfig: {
      appId: 'whppHI8DkmobI7y024L9igwz-9Nh9j0Va',
      appKey: 'FNsaruds1fk5TgLFhQ0e1Fc3',
      placeholder: '知行合一',
      avatar: 'mp'
    }
  }
}
