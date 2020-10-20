module.exports = {
  // base: '/blog/',
  theme: 'reco',
  title: '知行合一',
  description: '知之真切笃实处即是行 行之明觉精察处即是知',
  dest: 'docs/.vuepress/dist',
  host: 'localhost',
  port: 9999,
  cache: true,
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico', type: 'image/x-icon' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
  ],
  plugins: [
    ['@vuepress-reco/vuepress-plugin-screenfull', true],
    ['@vuepress/medium-zoom', true],
    ['flowchart', true],
    ['ribbon', true],
  ],
  locales: {
    '/': {
      lang: 'zh-CN',
    },
    // '/en/': {
    //   lang: 'en-US',
    // },
  },
  markdown: {
    lineNumbers: true,
    // anchor: { permalink: false },
    toc: { includeLevel: [2, 3] },
  },
  themeConfig: {
    author: '阳明先生',
    authorAvatar: '/avatar.png',
    codeTheme: 'tomorrow',
    huawei: false,
    lastUpdated: '上次更新',
    logo: '/logo.png',
    mode: 'auto',
    modePicker: true,
    record: '',
    search: true,
    searchMaxSuggestions: 10,
    subSidebar: 'auto',
    sidebarDepth: 2,
    startYear: '2016',
    type: 'blog',
    nav: [
      { text: '首页', link: '/', icon: 'reco-home' },
      { text: '归档', link: '/timeline/', icon: 'reco-date' },
      { text: 'GitHub', link: 'https://github.com/NiRongFei', icon: 'reco-github' },
    ],
    friendLink: [
      {
        title: 'vuepress-theme-reco',
        desc: 'A simple and beautiful vuepress Blog & Doc theme.',
        logo: 'https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png',
        link: 'https://vuepress-theme-reco.recoluan.com',
      },
    ],
    blogConfig: {
      category: {
        location: 2,
        text: '分类',
      },
      tag: {
        location: 3,
        text: '标签',
      },
    },
    // 密钥配置
    // keyPage: {
    //   keys: ['1208'],
    //   color: '#1E90FF',
    //   lineColor: '#1E90FF',
    //   absoluteSecrecy: true
    // },
    locales: {
      '/': {
        label: '简体中文',
        selectText: '选择语言',
        editLinkText: '在 GitHub 上编辑此页',
        serviceWorker: {
          updatePopup: {
            message: '发现新内容可用.',
            buttonText: '刷新',
          },
        },
        recoLocals: {
          homeBlog: {
            tag: '标签',
            article: '文章',
            category: '分类',
            friendLink: '友情链接',
          },
        },
      },
      '/en/': {
        label: 'English',
        selectText: 'Languages',
        editLinkText: 'Edit this page on GitHub',
        serviceWorker: {
          updatePopup: {
            message: 'New content is available.',
            buttonText: 'Refresh',
          },
        },
        recoLocals: {
          homeBlog: {
            tag: 'Tag',
            article: 'Article',
            category: 'Category',
            friendLink: 'Friend Link',
          },
        },
      },
    },
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
      hideListAccessNumber: true,
      placeholder: '知行合一',
      avatar: 'mp',
    },
  },
}
