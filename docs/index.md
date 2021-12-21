---
home: true
# heroImage: /img/web.png
heroText: 元集
tagline: 这是一个简单安静全面的分享小站。
# actionText: 立刻进入 →
# actionLink: /web/
bannerBg:
      model: random # auto => 网格纹背景(有bodyBgImg时无背景)，默认 | none => 无 | standard '大图地址' | background: 自定义背景样式  |  random '大图地址（数组）'    提示：如发现文本颜色不适应你的背景时可以到palette.styl修改$bannerTextColor变量

      imgUrl: [
        'https://cdn.jsdelivr.net/gh/LFJINGT/image-hosting/bg01.jpg',
        'https://cdn.jsdelivr.net/gh/LFJINGT/image-hosting/bg02.jpg',
        'https://cdn.jsdelivr.net/gh/LFJINGT/image-hosting/bg03.jpg',
        'https://cdn.jsdelivr.net/gh/LFJINGT/image-hosting/bg04.jpg',
        'https://cdn.jsdelivr.net/gh/LFJINGT/image-hosting/bg05.jpg',
        'https://cdn.jsdelivr.net/gh/LFJINGT/image-hosting/bg06.jpg',
        'https://cdn.jsdelivr.net/gh/LFJINGT/image-hosting/bg07.jpg',
        'https://cdn.jsdelivr.net/gh/LFJINGT/image-hosting/bg08.jpg',
        'https://cdn.jsdelivr.net/gh/LFJINGT/image-hosting/bg09.jpg',
        'https://cdn.jsdelivr.net/gh/LFJINGT/image-hosting/bg10.jpg',
        'https://cdn.jsdelivr.net/gh/LFJINGT/image-hosting/bg11.jpg',
        'https://cdn.jsdelivr.net/gh/LFJINGT/image-hosting/bg12.jpg',
        'https://cdn.jsdelivr.net/gh/LFJINGT/image-hosting/bg13.jpg',
        'https://cdn.jsdelivr.net/gh/LFJINGT/image-hosting/bg14.jpg',
        'https://cdn.jsdelivr.net/gh/LFJINGT/image-hosting/bg15.jpg',
        'https://cdn.jsdelivr.net/gh/LFJINGT/image-hosting/bg16.jpg',
        'https://cdn.jsdelivr.net/gh/LFJINGT/image-hosting/bg17.jpg',
        'https://cdn.jsdelivr.net/gh/LFJINGT/image-hosting/bg18.jpg',
        'https://cdn.jsdelivr.net/gh/LFJINGT/image-hosting/bg19.jpg',
        'https://cdn.jsdelivr.net/gh/LFJINGT/image-hosting/bg20.jpg',
        'https://cdn.jsdelivr.net/gh/LFJINGT/image-hosting/bg21.jpg',
        'https://cdn.jsdelivr.net/gh/LFJINGT/image-hosting/bg22.jpg',
        'https://cdn.jsdelivr.net/gh/LFJINGT/image-hosting/bg23.jpg',
        'https://cdn.jsdelivr.net/gh/LFJINGT/image-hosting/bg24.jpg',
        'https://cdn.jsdelivr.net/gh/LFJINGT/image-hosting/bg25.jpg',
        'https://cdn.jsdelivr.net/gh/LFJINGT/image-hosting/bg26.jpg',
        'https://cdn.jsdelivr.net/gh/LFJINGT/image-hosting/bg27.jpg',
        'https://cdn.jsdelivr.net/gh/LFJINGT/image-hosting/bg28.jpg',
        'https://cdn.jsdelivr.net/gh/LFJINGT/image-hosting/bg29.jpg',
        'https://cdn.jsdelivr.net/gh/LFJINGT/image-hosting/bg30.jpg',
        'https://cdn.jsdelivr.net/gh/LFJINGT/image-hosting/bg31.jpg',
        'https://cdn.jsdelivr.net/gh/LFJINGT/image-hosting/bg32.jpg',
        'https://cdn.jsdelivr.net/gh/LFJINGT/image-hosting/bg33.jpg',

      ]


        
# features: # 可选的
#   - title: 导航大全
#     details: JavaScript、ES6、Vue框架等前端技术
#     link: /nav/ # 可选
#     # imgUrl: /img/web.png # 可选
#   - title: 软件分享
#     details: html(5)/css(3)，前端页面相关技术
#     link: /software/
#     # imgUrl: /img/ui.png
#   - title: 文章分享
#     details: 技术文档、教程、技巧、总结等文章
#     link: /article/
    # imgUrl: /img/other.png

# 文章列表显示方式: detailed 默认，显示详细版文章列表（包括作者、分类、标签、摘要、分页等）| simple => 显示简约版文章列表（仅标题和日期）| none 不显示文章列表
# postList: detailed
# simplePostListLength: 10 # 简约版文章列表显示的文章数量，默认10。（仅在postList设置为simple时生效）
---

<!--
## 关于

### 📚Blog
这是一个兼具博客文章、知识管理、文档查找的个人网站，主要内容是Web前端技术。如果你喜欢这个博客&主题欢迎到[GitHub](https://github.com/LFJINGT/vuepress-theme-vdoing)点个Star、获取源码，或者交换[友链](/friends/) ( •̀ ω •́ )✧

### 🎨Theme
本站主题是根据[VuePress](https://vuepress.vuejs.org/zh/)的默认主题修改而成。取名`Vdoing`(维度)，旨在轻松打造一个`结构化`与`碎片化`并存的个人在线知识库&博客，让你的知识海洋像一本本书一样清晰易读。配合多维索引，让每一个知识点都可以快速定位！ 更多[详情](https://github.com/LFJINGT/vuepress-theme-vdoing)。

<a href="https://github.com/LFJINGT/vuepress-theme-vdoing" target="_blank"><img src='https://img.shields.io/github/stars/LFJINGT/vuepress-theme-vdoing' alt='GitHub stars' class="no-zoom"></a>
<a href="https://github.com/LFJINGT/vuepress-theme-vdoing" target="_blank"><img src='https://img.shields.io/github/forks/LFJINGT/vuepress-theme-vdoing' alt='GitHub forks' class="no-zoom"></a>

</br>


## 特色功能
博客部分特色功能介绍

#### 一站式技术搜索

   博客内容中包含部分技术教程，可以利用搜索框快速搜索到相关文档，即使博客中没有的，你还可以选择最下方的 `在XXX中搜索“xxx”` 快速到达你想要找的内容。

#### 深色模式与阅读模式
关爱程序员，保护视力，点击右下角的主题模式按钮试试吧~

#### Demo演示模块
   为了更直观的展示一些代码的效果，博客添加了demo模块插件，可查看demo、源码，以及跳转到codepen在线编辑。**示例**：

::: demo [vanilla]
```html
<html>
  <div id="vanilla-box"></div>
</html>
<script>
  var box = document.getElementById('vanilla-box')
  box.innerHTML = 'Hello World! Welcome to EB'
</script>
<style>
#vanilla-box {
  color: #11a8cd;
}
</style>
```
:::


## :email: 联系

- **WeChat or QQ**: <a href="tencent://message/?uin=894072666&Site=&Menu=yesUrl" class='qq'>894072666</a>
- **Email**: <a href="mailto:894072666@qq.com">894072666@qq.com</a>
- **GitHub**: <https://github.com/LFJINGT>

</br>  -->

<!-- 首页小箭头 -->
<style>
.anchor-down {
  display: block;
  margin: 12rem auto 0;
  bottom: 45px;
  width: 20px;
  height: 20px;
  font-size: 34px;
  text-align: center;
  animation: bounce-in 5s 3s infinite;
  position: absolute;
  left: 50%;
  bottom: 30%;
  margin-left: -10px;
  cursor: pointer;
}
@-webkit-keyframes bounce-in{
  0%{transform:translateY(0)}
  20%{transform:translateY(0)}
  50%{transform:translateY(-20px)}
  80%{transform:translateY(0)}
  to{transform:translateY(0)}
}
.anchor-down::before {
  content: "";
  width: 20px;
  height: 20px;
  display: block;
  border-right: 3px solid #fff;
  border-top: 3px solid #fff;
  transform: rotate(135deg);
  position: absolute;
  bottom: 10px;
}
.anchor-down::after {
  content: "";
  width: 20px;
  height: 20px;
  display: block;
  border-right: 3px solid #fff;
  border-top: 3px solid #fff;
  transform: rotate(135deg);
}
</style>

<script>
export default {
  mounted () {
    const ifJanchor = document.getElementById("JanchorDown"); 
    ifJanchor && ifJanchor.parentNode.removeChild(ifJanchor);
    let a = document.createElement('a');
    a.id = 'JanchorDown';
    a.className = 'anchor-down';
    document.getElementsByClassName('hero')[0].append(a);
    let targetA = document.getElementById("JanchorDown");
    targetA.addEventListener('click', e => { // 添加点击事件
      this.scrollFn();
    })
  },

  methods: {
    scrollFn() {
      const windowH = document.getElementsByClassName('banner-conent')[0].clientHeight; // 获取窗口高度
      document.documentElement.scrollTop = windowH; // 滚动条滚动到指定位置
    }
  }
}
</script>
