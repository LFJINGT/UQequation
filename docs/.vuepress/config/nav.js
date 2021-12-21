// nav
module.exports = [
  { text: '首页', link: '/' },
  {
    text: '导航大全',
    link: '/pages/70cdd8/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    // items: [
    //   // 说明：以下所有link的值只是在相应md文件定义的永久链接（不是什么特殊生成的编码）。另外，注意结尾是有斜杠的
    //   { text: '网站汇总', link: '/pages/70cdd8/' },
    //   // {
    //   //   text: '前端文章',
    //   //   items: [
    //   //     { text: '网站汇总', link: '/pages/70cdd8/' },
    //   //     // { text: 'Vue', link: '/pages/5d463fbdb172d43b/' },
    //   //   ],
    //   // },
    //   // {
    //   //   text: '学习笔记',
    //   //   items: [
    //   //     { text: '《JavaScript教程》', link: '/note/javascript/' },
    //   //     { text: '《JavaScript高级程序设计》', link: '/note/js/' },
    //   //     { text: '《ES6 教程》', link: '/note/es6/' },
    //   //     { text: '《Vue》', link: '/note/vue/' },
    //   //     { text: '《React》', link: '/note/react/' },
    //   //     {
    //   //       text: '《TypeScript 从零实现 axios》',
    //   //       link: '/note/typescript-axios/',
    //   //     },
    //   //     {
    //   //       text: '《Git》',
    //   //       link: '/note/git/',
    //   //     },
    //   //     {
    //   //       text: 'TypeScript',
    //   //       link: '/pages/51afd6/',
    //   //     },
    //   //     {
    //   //       text: 'JS设计模式总结',
    //   //       link: '/pages/4643cd/',
    //   //     },
    //   //   ],
    //   // },
    // ],
  },
  {
    text: '软件分享',
    link: '/software/',
    items: [
      {
        text: 'Android',
        items: [
          { text: 'Anytype 初探 可能不只是 Notion 离线版这么简单', link: '/pages/364457/' },
          { text: '两款小工具，让 Windows 和 Android 也能推流音频到 AirPlay', link: '/pages/39ebf5/' },
          { text: '强大的欧美曲库助力，手感上乘的竖屏音游新作 Beatstar', link: '/pages/c7a3ac/' },
          { text: '这些好看又好用的播放器，送给 2021 年还坚持在本地听歌的你', link: '/pages/f0e3f4/' },
        ],
      },
      {
        text: 'Windows',
        items: [
          { text: '实用而有趣的浏览器扩展，我们又为你找到了这 10 款', link: '/pages/63b79b/' },
          { text: '沉浸式抒写、操作便捷的 Markdown 简历工具—— 木及简历', link: '/pages/b1a2ff/' },
          { text: '零成本、低门槛创建专属数据分析工具', link: '/pages/eb1025/' },
          { text: '小巧身板也能称心如意，可以 DIY 的 Windows 启动器', link: '/pages/1a9bca/' },
          { text: '借 SmoothVideo Project 享受「丝般顺滑」的观影体', link: '/pages/0a302c/' },
        ],
      },
      {
        text: 'iOS',
        items: [
          { text: 'iPad 上独特的 3D 画布草图绘制工具 Mental Canvas', link: '/pages/33881f/' },
          { text: '为深度用户开发的新一代GTD应用 OneTodo', link: '/pages/4d4e02/' },
          { text: '也许是 Apple 平台最全能的视频播放 App: Infuse', link: '/pages/073a71/' },
        ],
      },
    ],
  },
  {
    text: '文章分享',
    link: '/article/',
    items: [
      { text: '技术文档', link: '/pages/9a7ee40fc232253e/' },
      { text: 'GitHub技巧', link: '/pages/4c778760be26d8b3/' },
      { text: 'Nodejs', link: '/pages/117708e0af7f0bd9/' },
      // { text: '博客搭建', link: '/pages/41f87d890d0a02af/' },
    ],
  },
  {
    text: '视频分享',
    link: '/video/',
    items: [
      { text: '黑马程序员匠心之作C++教程', link: '/pages/504475/' },
      { text: 'C语言入门', link: '/pages/8a6909/' },
      { text: 'Python基础教程全集', link: '/pages/2e3a1b/' },
      { text: 'C#编程', link: '/pages/4da736/' },
      { text: '《Python教程全套》完全入门版', link: '/pages/bc42ca/' },
    ],
  },
  {
    text: '我的收藏',
    link: '/pages/beb6c0bd8a66cea6/',
    // items: [
    //   { text: '网站', link: '/pages/beb6c0bd8a66cea6/' },
    //   { text: '资源', link: '/pages/eee83a9211a70f9d/' },
    //   { text: 'Vue资源', link: '/pages/12df8ace52d493f6/' },
    // ],
  },
  { text: '关于我们', link: '/about/' },
  // {
  //   text: '索引',
  //   link: '/archives/',
  //   items: [
  //     { text: '分类', link: '/categories/' },
  //     { text: '标签', link: '/tags/' },
  //     { text: '归档', link: '/archives/' },
  //   ],
  // },
]
