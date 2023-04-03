interface LinkItem {
  icon: string
  title: string
  desc: string
  link: string
}

type LinkGroup = {
  title: string
  children: LinkItem[]
}


export const homeLinkData: LinkGroup[] =  [
  {
    title: '工具箱',
    children: [
      {
        icon: 'https://static.npmjs.com/b0f1a8318363185cc2ea6a40ac23eeb2.png',
        title: 'Npm',
        desc: 'Npm 包管理仓库',
        link: "https://www.npmjs.com",
      },
      {
        icon: 'https://developer.mozilla.org/favicon-48x48.cbbd161b.png',
        title: 'MDN',
        desc: 'web 技术参考文档',
        link: "https://developer.mozilla.org",
      },
      {
        icon: 'https://caniuse.com/img/favicon-128.png',
        title: 'Can I use',
        desc: '前端 API 兼容性查询',
        link: 'https://caniuse.com'
      },
      {
        icon: 'https://quickref.me/images/favicon.png?v=1',
        title: 'Quick Reference',
        desc: '编程语言参考速查表',
        link: "https://quickref.me",
      },
      {
        icon: 'https://tinypng.com/images/apple-touch-icon.png',
        title: 'TinyPNG',
        desc: '在线图片压缩工具',
        link: 'https://tinypng.com'
      },
      {
        icon: 'https://squoosh.app/c/favicon-c9cf50ef.ico',
        title: 'Squoosh',
        desc: '压缩图片、转换格式',
        link: 'https://squoosh.app'
      },
      {
        icon: "https://favicon.io/assets/static/favicon.b9532cc.ed88c65f76fa003989a0c683d668c765.png",
        title: "favicon",
        desc: "在线制作、转换favicon",
        link: "https://favicon.io",
      }
    ]
  },
  {
    title: 'AI 导航',
    children: [
      {
        icon: '',
        title: 'ChatGPT',
        desc: '基于 GPT 的聊天机器人',
        link: 'https://chat.openai.com/chat'
      },
      {
        icon: 'https://www.notion.so/images/logo-ios.png',
        title: 'Notion AI',
        desc: '基于 AI 的笔记工具',
        link: 'https://www.notion.so'
      },
      {
        icon: 'https://www.midjourney.com/apple-touch-icon.png',
        title: 'Midjourney',
        desc: '基于 AI 的绘画工具',
        link: 'https://www.midjourney.com'
      }
    ]
  },
  {
    title: '刷题',
    children: [
      {
        icon: 'https://leetcode.cn/favicon.ico',
        title: 'LeeCode',
        desc: '刷题网站',
        link: 'https://leetcode.cn'
      },
      {
        icon: '//jsn.lintcode.com/static/img/favicon.ico',
        title: 'lintcode',
        desc: '刷题网站',
        link: 'https://www.lintcode.com'
      },
    ]
  },
  {
    title: 'Flutter 生态',
    children: [
      {
        icon: 'https://flutter.cn/assets/images/cn/flutter-icon.png',
        title: 'flutter',
        desc: '使用 dart 作为开发语言的跨平台框架',
        link: 'https://flutter.cn'
      },
      {
        icon: 'https://pub.dev/favicon.ico?hash=nk4nss8c7444fg0chird9erqef2vkhb8',
        title: 'Pub.dev',
        desc: 'Flutter 包管理中心',
        link: 'https://pub.dev'
      },
      {
        icon: 'https://book.flutterchina.club/assets/img/logo.png',
        title: 'Flutter 中文网',
        desc: 'Flutter 中文入门文档',
        link: 'https://book.flutterchina.club'
      },
      {
        icon: 'https://flutter.cn/assets/images/cn/flutter-icon.png',
        title: '组件自查库',
        desc: '组件自查库',
        link: 'https://toly1994328.gitee.io/flutter_web/#/'
      }
    ]
  },
  {
    title: 'React 生态',
    children: [
      {
        icon: 'https://zh-hans.reactjs.org/favicon.ico',
        title: 'React',
        desc: '用于构建用户界面的 JavaScript 库',
        link: 'https://zh-hans.reactjs.org'
      },
      {
        icon: 'https://reactrouter.com/favicon-light.png',
        title: 'React Router',
        desc: 'React 的声明式路由',
        link: 'https://reactrouter.com'
      },
      {
        icon: 'https://nextjs.org/static/favicon/safari-pinned-tab.svg',
        title: 'Next.js',
        desc: '一个用于 Web 的 React 框架',
        link: 'https://nextjs.org'
      },
      {
        icon: 'https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg',
        title: 'UmiJS',
        desc: '插件化的企业级前端应用框架',
        link: 'https://umijs.org'
      },
      {
        icon: 'https://gw.alipayobjects.com/zos/rmsportal/rlpTLlbMzTNYuZGGCVYM.png',
        title: 'Ant Design',
        desc: '一套企业级 UI 设计语言和 React 组件库',
        link: 'https://ant.design'
      },
      {
        icon: 'https://gw.alipayobjects.com/zos/bmw-prod/69a27fcc-ce52-4f27-83f1-c44541e9b65d.svg',
        title: 'Ant Design Mobile',
        desc: '构建移动 WEB 应用程序的 React 组件库',
        link: 'https://mobile.ant.design'
      },
      {
        icon: 'https://docs.pmnd.rs/apple-touch-icon.png',
        title: 'Zustand',
        desc: '一个小型、快速、可扩展的 React 状态管理解决方案',
        link: 'https://docs.pmnd.rs/zustand/getting-started/introduction'
      },
      {
        icon: 'https://valtio.pmnd.rs/favicon.ico',
        title: 'Valtio',
        desc: 'makes proxy-state simple for React and Vanilla',
        link: 'https://valtio.pmnd.rs'
      },
      {
        icon: 'https://jotai.org/favicon.svg',
        title: 'Jotai',
        desc: 'primitive and flexible state management for React',
        link: 'https://jotai.org'
      },
      {
        icon: 'https://cn.redux.js.org/img/redux.svg',
        title: 'Redux',
        desc: 'JavaScript 应用的状态容器，提供可预测的状态管理',
        link: 'https://cn.redux.js.org'
      },
      {
        icon: 'https://zh.mobx.js.org/assets/mobx.png',
        title: 'MobX',
        desc: '一个小型、快速、可扩展的 React 状态管理解决方案',
        link: 'https://zh.mobx.js.org'
      },
      {
        icon: 'https://ahooks.js.org/simple-logo.svg',
        title: 'ahooks',
        desc: '一套高质量可靠的 React Hooks 库',
        link: 'https://ahooks.js.org/zh-CN'
      }
    ]
  },
  {
    title: 'Vue 生态',
    children: [
      {
        icon: 'https://cn.vuejs.org/logo.svg',
        title: 'Vue 3',
        desc: '渐进式 JavaScript 框架',
        link: 'https://cn.vuejs.org'
      },
      {
        icon: 'https://cn.vuejs.org/logo.svg',
        title: 'Vue 2',
        desc: '渐进式 JavaScript 框架',
        link: 'https://v2.cn.vuejs.org'
      },
      {
        icon: 'https://cn.vuejs.org/logo.svg',
        title: 'Vue Router',
        desc: 'Vue.js 的官方路由\n为 Vue.js 提供富有表现力、可配置的、方便的路由',
        link: 'https://router.vuejs.org/zh'
      },
      {
        icon: 'https://pinia.vuejs.org/logo.svg',
        title: 'Pinia',
        desc: '符合直觉的 Vue.js 状态管理库',
        link: 'https://pinia.vuejs.org/zh'
      },
      {
        icon: 'https://nuxt.com/icon.png',
        title: 'Nuxt.js',
        desc: '一个基于 Vue.js 的通用应用框架',
        link: 'https://nuxt.com'
      },
      {
        icon: 'https://vueuse.org/favicon.svg',
        title: 'VueUse',
        desc: 'Vue Composition API 的常用工具集',
        link: 'https://vueuse.org'
      },
      {
        icon: 'https://element.eleme.cn/favicon.ico',
        title: 'Element UI',
        desc: '基于 Vue 2，面向设计师和开发者的组件库',
        link: 'https://element.eleme.cn'
      },
      {
        icon: 'https://element-plus.org/images/element-plus-logo-small.svg',
        title: 'Element Plus',
        desc: '基于 Vue 3，面向设计师和开发者的组件库',
        link: 'https://element-plus.org'
      },
      {
        icon: 'https://vuetifyjs.com/favicon.ico',
        title: 'Vuetify',
        desc: '基于 Vue 的material设计组件库',
        link: 'https://vuetifyjs.com'
      },
      {
        icon: 'https://www.antdv.com/assets/logo.1ef800a8.svg',
        title: 'Ant Design Vue',
        desc: 'Ant Design 的 Vue 实现，开发和服务于企业级后台产品',
        link: 'https://antdv.com'
      },
      {
        icon: 'https://fastly.jsdelivr.net/npm/@vant/assets/logo.png',
        title: 'Vant',
        desc: '轻量、可定制的移动端 Vue 组件库',
        link: 'https://vant-ui.github.io/vant'
      },
      {
        icon: 'https://webapp.didistatic.com/static/webapp/shield/Cube-UI_logo.ico',
        title: 'Cube UI',
        desc: '基于 Vue.js 实现的精致移动端组件库',
        link: 'https://didi.github.io/cube-ui'
      },
      {
        icon: 'https://img14.360buyimg.com/imagetools/jfs/t1/167902/2/8762/791358/603742d7E9b4275e3/e09d8f9a8bf4c0ef.png',
        title: 'NutUI',
        desc: '京东风格的轻量级移动端组件库',
        link: 'https://nutui.jd.com'
      }
    ]
  },
  {
    title: '小程序相关',
    children: [
      {
        icon: 'https://res.wx.qq.com/a/wx_fed/assets/res/OTE0YTAw.png',
        title: '微信小程序文档',
        desc: '微信小程序官方开发者文档',
        link: 'https://developers.weixin.qq.com/miniprogram/dev/framework/'
      },
      {
        icon: 'https://web-assets.dcloud.net.cn/unidoc/zh/icon.png',
        title: 'uni-app',
        desc: '使用 Vue.js 开发所有前端应用的框架',
        link: 'https://uniapp.dcloud.net.cn'
      },
      {
        icon: 'https://taro.jd.com/static/images/favicon.ico',
        title: 'Taro',
        desc: '多端统一开发解决方案',
        link: 'https://taro.jd.com'
      },
      
      {
        icon: 'https://mpxjs.cn/favicon.ico',
        title: 'Mpx',
        desc: '增强型跨端小程序框架',
        link: 'https://mpxjs.cn'
      }
    ]
  },
  {
    title: 'JavaScript 框架类库',
    children: [
      {
        icon: 'https://www.typescriptlang.org/favicon-32x32.png?v=8944a05a8b601855de116c8a56d3b3ae',
        title: 'TypeScript',
        desc: 'Js的超集，提供了可选的静态类型和基于类的面向对象编程',
        link: 'https://www.typescriptlang.org'
      },
      {
        icon: 'https://www.electronjs.org/assets/img/favicon.ico',
        title: 'Electron',
        desc: '基于js、html、css的跨平台桌面应用开发框架',
        link: 'https://www.electronjs.org'
      },
      {
        icon: 'https://jquery.cuishifeng.cn/images/favicon.ico',
        title: 'jQuery API 中文文档',
        desc: '一个兼容多浏览器的 JavaScript 框架',
        link: 'https://jquery.cuishifeng.cn'
      },
      {
        icon: 'https://svelte.dev/svelte-logo-horizontal.svg',
        title: 'Svelte',
        desc: '将声明性组件转换为精准高效更新 DOM 的 JavaScript 代码',
        link: 'https://svelte.dev'
      }
    ]
  },
  {
    title: "图表相关",
    children: [
      {
        icon: 'https://echarts.apache.org/zh/images/favicon.png?_v_=20200710_1',
        title: 'Echarts',
        desc: '一个基于 JavaScript 的开源可视化图表库',
        link: 'https://echarts.apache.org/zh/index.html'
      },
      {
        icon: '',
        title: '图说',
        desc: '可视化配置Echarts',
        link: 'https://tushuo.baidu.com/'
      },
      {
        icon: 'https://static.tradingview.com/static/images/favicon.ico',
        title: 'TradingView',
        desc: '专业的金融图标库',
        link: 'https://cn.tradingview.com/'
      },
      {
        icon: 'https://antv.gitee.io//favicon-32x32.png?v=9772447a8d07a8fe19894b5176c6cb0d',
        title: 'AntV',
        desc: '蚂蚁旗下的数据可视化解决方案',
        link: 'https://antv.gitee.io/'
      }
    ]
  },
  {
    title: 'CSS 相关',
    children: [
      {
        icon: 'https://sass-lang.com/assets/img/logos/logo-b6e1ef6e.svg',
        title: 'Sass',
        desc: '一个成熟，稳定，功能强大的专业级 CSS 扩展语言',
        link: 'https://sass-lang.com'
      },
      {
        icon: 'https://postcss.org/assets/logo-3e39b0aa.svg',
        title: 'PostCSS',
        desc: '一个用 JavaScript 转换 CSS 的工具',
        link: 'https://postcss.org'
      },
      {
        icon: 'https://www.tailwindcss.cn/apple-touch-icon.png',
        title: 'TailwindCSS 中文网',
        desc: '一个功能类优先的 CSS 框架',
        link: 'https://www.tailwindcss.cn'
      }
    ]
  },
  {
    title: 'CSS 工具',
    children: [
      {
        icon: 'https://bennettfeely.com/clippy/pics/favicon.png',
        title: 'clip-path maker',
        desc: '可视化编辑clip-path',
        link: "https://bennettfeely.com/clippy/",
      },
      {
        icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAQpJREFUOE9jZFi9u57hP0MDA6mAkeEnAwNDOyPDqt3/SdULV8/I8JMsAx552zDIbT0CNodkA1742jFIbD6E5AgivaDAzclw3d2SIfXsdYYlD5/jNkCAlYXhw+8/cAXMjIwMj31sGDY+fc1QdeUuw/tfv1GCDMMLaUrSDLPuPQUrqtVSZMhVkWUQ2wRxcrCMGMPaJ6/wGwCT/RnsxGC4+yTDtU9f8UYSigtsRQQYjr/9yPAp0JGBa90+omIXxYAAaVGGVRZ6DGxr9xKlGSMab3hYMejuOs7w+x/xaQvFBTONNRnSz14n2nYUF1x2s2DQ3XWCJM0oBjz2sWWQ3XKYfANI1gmx/icjpdkZAOHjbEdOHlSBAAAAAElFTkSuQmCC',
        title: '贝赛尔曲线生成器',
        desc: '可视化生成贝塞尔曲线',
        link: 'https://cubic-bezier.com/'
      },
      {
        icon: 'https://neumorphism.io/favicon.ico',
        title: '阴影生成器(拟物)',
        desc: '可视化生成拟物阴影',
        link: 'https://neumorphism.io/'
      },
      {
        icon: 'https://shadows.brumm.af/favicon.svg',
        title: '多层阴影贝塞尔曲线生成器',
        desc: '可视化生成多层阴影',
        link: 'https://shadows.brumm.af/'
      },
      {
        icon: 'https://9elements.github.io/fancy-border-radius/favicon-32x32.png',
        title: '圆角生成器',
        desc: '可视化生成圆角',
        link: 'https://9elements.github.io/fancy-border-radius'
      },
      {
        icon: 'https://getwaves.io/icons/icon-48x48.png?v=f13a1a2e88a9720e746d5561039d3f5f',
        title: '波浪生成器',
        desc: '可视化生成波浪背景',
        link: 'https://getwaves.io'
      },
      {
        icon: '',
        title: '优惠券生成器',
        desc: '可视化生成优惠券',
        link: 'https://coupon.codelabo.cn/'
      },
      {
        icon: 'https://www.cssfilters.co/images/icons/favicon-32x32.png',
        title: '滤镜生成器',
        desc: '可视化生成滤镜',
        link: 'https://www.cssfilters.co'
      }
    ]
  },
];
