vue和react的异同之处：https://v2.cn.vuejs.org/v2/guide/comparison.html
## Vscode插件
ES7+ React/Redux/React-Native snippets

rcc (快捷创建组件模板)
## React的特性
* 声明式设计
* 高效  -通过对DOM的模拟(虚拟dom),最大限度的减少与DOM的交互。
* 灵活
* JSX  -JSX是JS语法的扩展
* 组件
* 单向响应的数据流
## 创建项目
```bash
# 全局安装脚手架：
npm install -g create-react-app
# 创建项目
create-react-app my-app
# 或
npx create-react-app my-app
```
:::tip
这个过程会安装3个东西：
* react: react 的顶级库
* react-dom: 因为 react 有很多运行环境，比如 app 端的 react-native，我们要在web 上运行就是用 react-dom
* react-scripts: 包含运行和打包 react 应用程序的所有脚本及配置
:::
## 编写第一个React项目
上文中新建的项目，删除 src 下所有文件，新建 index.js 作为唯一入口文件。
```js
import React from 'react';
import ReactDOM from 'react-dom';
ReactDOM.render(
  // jsx语法  jsx = js + xml
  <h1>欢迎来到react</h1>,
  // 渲染到哪里
  document.getElementById(‘root’)
)
```
## JSX语法
JSX将HTML语法直接加入JS代码中，再通过翻译器转换到纯JS后由浏览器执行。在实际开发中，JSX在产品打包阶段都已经编译成纯JS，不会带来任何副作用，反而会让代码更加直观易于维护，编译过程由Babel的JSX编译器实现。\
使用React和JSX的时候，编译过程：\
JSX-使用react构造组件,babel进行编译 => JS对象 - "ReactDOM.render()" => DOM元素 => 插入页面

## 组件
### 类组件
```js
import React, { Component } from "react"
class App extends Component{
  render() {
    return <div>hello world</div>  // 只能有一个根标签
  }
}
export default App
```
### 函数组件
react16.8以前又叫无状态组件，现在有 hooks 之后，函数式组件也可以有状态了。
```js
function App() {
  return <div>hello world</div>
}
```

### 组件嵌套
```js
import React, { Component } from 'react'
class NavBar extends Component {
  render() {
    return <div>这是navbar<Child></Child></div>
  }
}
class Child extends Component {
  render() {
    return <div>child</div>
  }
}
class Swiper extends Component {
  render() {
    return <div>这是Swiper</div>
  }
}
const Tabbar = ()=><div>这是tabbar</div>
export default class classCom extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Swiper />
        <Tabbar />
      </div>
    )
  }
}
```

### 组件的样式
react推荐使用行内样式，因为react觉得每个组件都是一个独立整体。
* 涉及js逻辑请用{}包裹
* 样式要用对象映射
* 样式涉及到-连接，要改为驼峰写法
* 类名不能用class，因为class现在是关键字，要改为className
* label标签的for属性要改为htmlFor

```js
import React, {Component} from 'react'
import '../css/index.css'
export default class App extends Component {
  render() {
    var myname = 'zhangsan'
    var obj = {
      backgroundColor: "yellow",
      fontSize: "20px"
    }
    return (
      <div className='active' style={obj}>
        {10+20}-{myname}<br />
        {10>20?'aaa':'bbb'}
        <label htmlFor="username">用户名</label>
        <input type="text" id="username"></input>
      </div>
    )
  }
}
```

### 事件绑定
* 事件为驼峰写法，如：onClick
* 只需要写函数名
* 注意this指向问题
* 推荐使用箭头函数
```js
import React, { Component } from 'react'
export default class App extends Component {
  a = 100
  render() {
    return (
      <div>
        <input></input>
        {/* 箭头函数的this，取得是定义时候外层的this */}
        <button onClick={() => { console.log(this.a) }}>add</button>
        {/* 这种写法,函数是被react事件系统调用的,所以this指向事件系统,获取不到a */}
        {/* .bind(this)解决this指向问题 */}
        {/* call,改变this指向,自动执行函数
            apply,改变this指向,自动执行函数
            bind,改变this指向,不自动执行函数
        */}
        <button onClick={this.handleClick.bind(this)}>add2</button>
        <button onClick={this.handleClick2}>add3</button>
        <button onClick={() => {
          this.handleClick3()
        }}>add3</button>
      </div>
    )
  }
  handleClick() {
    console.log('click2', this.a)
  }
  handleClick2 = (evt) => {
    console.log('click3', evt)
  }
  handleClick3 = () => {
    console.log('click4')
  }
}
```
:::tip
React事件绑定跟原生事件绑定的区别：\
React事件绑定没有绑定在每一个具体的元素上，因为这样是比较消耗内存的，而是采用事件代理的模式，绑定在根节点上。\
event事件对象：\
和普通浏览器一样，事件handler会被自动传入一个event对象，这个对象和普通的浏览器event对象所包含的方法和属性基本一致。不同的是React中的event对象不是浏览器提供的，而是它自己内部构建的。它同样具有event.stopPropagation、event.preventDefault这种常用方法。
:::

### Ref的使用
```js
import React, { Component } from 'react'
export default class App extends Component {
  myRef = React.createRef()
  render() {
    return (
      <div>
        <input ref={this.myRef}></input>
        {/* // 访问this.myRef.current,可获得真实DOM */}
        <button onClick={() => { console.log(this.myRef.current) }}>add</button>
      </div>
    )
  }
}
```
### 组件的数据挂载方式
什么情况下render函数会执行：
* 首次加载
* setState改变组件内部state
* 接收到新的props

#### 状态（state）
* this.state.xxx 访问属性
* this.setState({xxx: xxx}) 修改属性
* this.state 是纯js对象
```js
import React, { Component } from 'react'
export default class classCom extends Component {
  state = {
    text: '收藏'
  }
  // 或者
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     text: '收藏'
  //   }
  // (构造器，因为是继承，而且定义了自己的属性，所以注意super()把父类的属性和方法继承过来)
  render() {
    return (
      <div>
        <button onClick={() => {
          this.setState({
            text: '取消收藏'
          })
        }}>{this.state.text}</button>
      </div>
    )
  }
}
```
##### setState同步异步
连续调用setState会被合并处理（处在同步逻辑中时），为了避免阻塞代码，合并后异步执行，同一属性的多次赋值以最后一次最准。
* setState处在同步的逻辑中，异步更新状态，更新真实DOM
* setState处在异步的逻辑中，同步更新状态，更新真实DOM

setState第二个参数为数据和真实DOM更新完成后的回调函数，可以在处在同步逻辑中时，知道何时数据更新完成。

#### 属性（props）
* 父组件传来。父组件通过组件上写key=value传参，子组件通过this.props获取属性。
* 传参时，如果写成isShow=”true”，那么这是一个字符串，如果写成isShow={true}，这个是布尔值。传参类型错误提示见下方属性验证。
* {...对象}展开赋值
```js
<Navbar {...obj}></Navbar>
```
* 默认属性值，同下属性验证两种写法，类属性为defaultProps

#### 属性验证
父组件传参类型错误时，控制台报错提示。\
propTypes（它是一个类属性）\
验证方法通过引入React验证模块，然后调用它的方法即可，例：\
```js
import xxx(任意命名) from "prop-types"
```
在类内部声明的是对象属性，要New才能访问到。直接类.xxx声明或在类内部有static标识的是类属性，不用new也能访问
第一种写法（写在类组件里面，由static标识，推荐）：
```js
import React, { Component } from 'react'
import xxx from 'prop-types'
export default class Navbar extends Component {
  static propTypes = {
    title: xxx.string
  }
  render() {
    let { title } = this.props
    return (
      <div>navbar-{title}</div>
    )
  }
}
```
第二种写法（写到类组件外面）：
```
Navbar.propTypes = {
  title: xxx.string
}
```
##### 函数式组件使用属性
函数式组件中没有this，采用形参的方式接收。函数式组件使用属性默认值、属性验证只能写在外面\
例：
```js
import React from 'react'
export default function SideBar(props) {
  return (
    <div></div>
  )
}
```

#### 属性VS状态
相似点：都是纯js对象，都会触发render更新。\
不同点：
* 属性能从父组件获取，状态不能
* 属性可以由父组件修改，状态不能
* 属性能在内部设置默认值，状态也可以，设置方式不一样
* 属性不在组件内部修改，状态要在组件内部修改
* 属性能设置子组件初始值，状态不可以

#### 列表渲染、条件渲染
```js
import React, { Component } from 'react'
export default class classCom extends Component {
  state = {
    list: ['111', '222', '333']
  }
  mytext = React.createRef()
  render() {
    // var newList = this.state.list.map((item, idx) => <li key={item}>{item}<button onClick={this.deleteItem.bind(this, idx)}>删除</button></li>)
    var newList = this.state.list.map((item, idx) => <li key={item}>{item}<button onClick={() => { this.deleteItem(idx) }}>删除</button></li>)
    return (
      <div>
        <input ref={this.mytext} type="text"></input>
        <button onClick={() => {
          let newList = [...this.state.list, this.mytext.current.value]
          this.setState({
            list: newList
          })
          this.mytext.current.value = ''
        }}>新增</button>
        <ul>
          {newList}
        </ul>
        {/* 条件渲染 */}
        {this.state.list.length===0 && <div>暂无待办事项</div>}
      </div>
    )
  }
  deleteItem(idx) {
    let newList = [...this.state.list]
    newList.splice(idx, 1)
    this.setState({
      list: newList
    })
  }
}
```
#### dangerouslySetInnerHTML(显示富文本)
```js
<div dangerouslySetInnerHTML={{__html: '<h1>hello</h1>'}}></div>
```

### 表单中的受控组件与非受控组件
区别在于是否收到react的props和state的控制

### 组件通信方式
#### 父子通信
父传子：props或者直接ref调用\
子传父：父组件传递一个函数给子组件，子组件调用这个函数，传递参数给父组件
#### 非父子通信
* 通过redux
* 状态提升至父组件，由父组件传递给子组件
* 发布订阅模式
```js
import React, { Component } from 'react'
var bus = {
  list: [],
  // 订阅
  subscribe(callback) {
    this.list.push(callback)
  },
  // 发布
  publish(text) {
    this.list.forEach(callback=>{
      callback && callback(text)
    })
  }
}
export default class App extends Component {
  render() {
    return (
      <div>
        <ChildA></ChildA>
        <ChildB></ChildB>
      </div>
    )
  }
}
class ChildA extends Component {
  render() {
    return (
      <div>
        <button onClick={()=>{
          bus.publish('A的内容1')
        }}>A点击1</button>
        <button onClick={()=>{
          bus.publish('A的内容2')
        }}>A点击2</button>
      </div>
    )
  }
}
class ChildB extends Component {
  constructor() {
    super()
    this.state = {
      info: ''
    }
    bus.subscribe((text)=>{
      this.setState({
        info: text
      })
    })
  }
  render() {
    return (
      <div>A过来的内容：{this.state.info}</div>
    )
  }
}
```
* context状态树传参
```js
import React, { Component } from 'react'
var bus = {
  list: [],
  // 订阅
  subscribe(callback) {
    this.list.push(callback)
  },
  // 发布
  publish(text) {
    this.list.forEach(callback=>{
      callback && callback(text)
    })
  }
}
export default class App extends Component {
  render() {
    return (
      <div>
        <ChildA></ChildA>
        <ChildB></ChildB>
      </div>
    )
  }
}
class ChildA extends Component {
  render() {
    return (
      <div>
        <button onClick={()=>{
          bus.publish('A的内容1')
        }}>A点击1</button>
        <button onClick={()=>{
          bus.publish('A的内容2')
        }}>A点击2</button>
      </div>
    )
  }
}
class ChildB extends Component {
  constructor() {
    super()
    this.state = {
      info: ''
    }
    bus.subscribe((text)=>{
      this.setState({
        info: text
      })
    })
  }
  render() {
    return (
      <div>A过来的内容：{this.state.info}</div>
    )
  }
}
```
#### 插槽
服用组件，一定程度减少父子通信\
使用：\
this.props.children（children为props的特殊属性）拿到组件标签内写的标签，为多个标签时，才会是一个数组。
```js
import React, { Component } from 'react'
class Child extends Component {
  render() {
    return <div>
      child
      {this.props.children[2]}
      {this.props.children[1]}
      {this.props.children[0]}
    </div>
  }
}

export default class App extends Component {
  render() {
    return (
      <div>
        <Child>
          <div>11111111</div>
          <div>222</div>
          <div>333</div>
        </Child>
      </div>
    )
  }
}
```
## 生命周期
### 初始化阶段
#### componentWillMount
只会在第一次初始化执行。render之前最后一次修改状态的机会\
即将弃用，推荐将这部分逻辑移到constructor或componentDidMount中
#### render
只能访问this.props和this.state，不允许修改状态和DOM输出
#### componentDidMount
只会在第一次初始化执行。成功render并渲染完成真实DOM之后触发，可以修改DOM\
可以进行数据请求axios、订阅函数调用、定时器、基于创建完成的DOM做一些操作等。
### 运行中阶段
#### componentWillReceiveProps
即将弃用，同componentWillMount。父组件状态更新会调用、
接收一个形参nextProps，也就是新属性、
this.props获取的是老属性
#### shouldComponentUpdate
性能优化生命周期\
同componentWillMount。返回一个布尔值，true表示允许更新，false表示不允许更新。\
此阶段调用this.state或者this.props获取的是老状态老属性。\
接收两个形参nextProps、nextState也就是新的属性和状态。\
用于做性能优化，在组件不需要更新后，返回false，将阻止组件更新。\
不要直接this.state.xxx=xxx这样去更新状态是因为state要储存老的状态，如果此时直接修改了老状态为新的状态，scu周期就不能正确判断新老状态，也不能做正确的性能优化。
#### componentWillUpdate
即将弃用，同componentWillMount。setState或Props会调用这个周期。不能修改属性和状态
#### render
同初始化阶段render
#### componentDidUpdate
setState或Props会调用这个周期。DOM更新完毕，可以修改DOM。\
接受两个形参preProps、prevState，也就是老的属性和状态。
### 销毁阶段
#### componentWillUnmount
组件销毁前调用。可以做一些清理工作，比如定时器、订阅函数、DOM操作等。
### 老生命周期问题
* componentWillMount，在SSR中这个方法将会被多次调用，所以会重复触发多次，同时在这里如果绑定事件，将无法解绑导致内存泄露，变得不够安全高效逐步废弃。
* componentWillreceiveProps外部组件多次频繁更新传入不同的props，会导致不必要的异步请求。
* componentWillUpdate，更新前记录DOM状态，可能会做一些处理，与componentDidUpdate相隔时间如果过长，会导致状态不太信任。

### 新生命周期的替代
#### getDerivedStateFromProps
一定场景下替代componentDidMount、componentWillReceiveProps。ComponentWillReceiveProps和它不能共存。\
不能发请求，因为异步请求返回结果后因为没有this无法赋值为新状态。\
需要搭配好componentDidUpdate使用，解决重复刷新的问题。\
第一次初始化组件以及后续的更新过程中（包括自身状态更新及父传子），返回一个对象作为新的state，返回null则说明不需要在这里更新state。\
接收两个形参nextProps、nextState也就是新属性新状态。\
例：
```js
import React, { Component } from 'react'
export default class App extends Component {
  state = {
    name: 'rain',
    age: '18'
  }
  // 它是类的方法，通过App.xxx调用，它是静态的，要加static
  // 首先要定义state, 然后这个周期需要返回一个对象
  // 同名就覆盖state的，没有的保留
  // 接收两个形参
  // 这里没有this，所以也没有this.state
  static getDerivedStateFromProps(nextProps, nextState) {
    console.log(nextState)
    return {
      name: 'Rain'
    }
  }
  render() {
    return (
      <div><button onClick={()=>{
        // 这里的name会被getDerivedStateFromProps周期中同名name覆盖
        this.setState({
          name: 'zhangsan'
        })
      }}>click</button>name: {this.state.name} - {this.state.age}</div>
    )
  }
}
```
#### getSnapshotBeforeUpdate
取代componentWillUpdate。不能共存。要返回一个值。触发时间为update发生的时候，在render之后DOM渲染之前返回一个值，作为componentDidUpdate的第三个参数。\
例：
```js
import React, { Component } from 'react'
export default class App extends Component {
  state = {
    list: [1,2,3,4,5,6,7,8,9,10]
  }
  getSnapshotBeforeUpdate() {
    console.log(this.myRef.current.scrollHeight)
    return this.myRef.current.scrollHeight
  }
  componentDidUpdate(prevProps, prevState, value) {
    console.log(value)
    this.myRef.current.scrollTop += this.myRef.current.scrollHeight-value
  }
  myRef = React.createRef()
  render() {
    return (
      <div>
        <button onClick={()=>{
          this.setState({
            list: [...[11,12,13,14,15,16,17,18,19], ...this.state.list]
          })
        }}>来邮件</button>
        <h1>邮箱应用</h1>
        <div style={{height:'200px', overflow: 'auto'}} ref={this.myRef}>
          <ul>
            {
              this.state.list.map(item=>{
                return <li key={item} style={{height:'100px', background:'yellow'}}>{item}</li>
              })
            }
          </ul>
        </div>
      </div>
    )
  }
}
```

### react中性能优化的方案
* shouldComponentUpdate\
  控制组件自身或者子组件是否需要更新，尤其在子组件非常多的情况下，需要进行优化。
* PureComponent\
  PureComponent会帮你比较新props跟旧的props、新的state和老的state（值相等，或者对象含有相同的属性且属性值相等），决定shouldComponentUpdate返回true或者false，从而决定要不要呼叫render function。\
注：如果你的state或props永远都会变，那PureComponent并不会比较快，因为shallowEqual也需要花时间。\
例：（引入的Component改为PureComponent即可）
```js
import React, { PureComponent } from 'react'
export default class App extends PureComponent {
  state = {
    name: '111'
  }
  render() {
    console.log('render')
    return (
      <div>
        <button onClick={()=>{
          this.setState({
            name: '22222'
          })
        }}>click</button>
        {this.state.name}
      </div>
    )
  }
}
```

### 轮播图实战
```js
import React, { Component } from 'react'
import Swiper, { Navigation, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
Swiper.use([Navigation, Pagination])
export default class classCom extends Component {
  state = {
    list: []
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        list: ['111', '222', '333']
      })
    }, 1000);
  }
  componentDidUpdate() {
    new Swiper('.swiper', {
      pagination: {
        el: '.swiper-pagination'
      }
    })
  }
  render() {
    return (
      <div>
        <div className="swiper" style={{ height: '200px', background: 'yellow' }}>
          <div className="swiper-wrapper">
            {
              this.state.list.map(item => {
                return <div className="swiper-slide" key={item}>{item}</div>
              })
            }
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </div>
    )
  }
}
```

## React Hooks
16.8以前函数式组件只能是无状态组件，被父组件控制，作为受控组件。
### 使用hooks理由
* 高阶组件为了复用，导致代码层级复杂
* 生命周期的复杂
* 写成functional组件，无状态组件，以后又需要状态，要改成类组件成本太高。

### useState(保存组件状态)
```js
const [state, setstate] = useState(initialState)
```
改变状态的时候会重新执行整个函数。\
第一个参数是变量名，第二个是修改这个变量值的方法。

### useEffect(副作用)
两个参数，回调函数和依赖变量的数组\
参数一的回调函数中可以再return一个函数，在组件销毁时会执行，可以清除一些事件监听、定时器等\
依赖的变量的值改变时，回调函数才会再次执行\
Function Component不存在生命周期\
useEffect相当于componentDidMount、componentDidUpdate、componentWillUnmount三个生命周期的合集\
```js
import React, { useState, useEffect } from 'react'
export default function App() {
  const [name, setname] = useState('rain')
  useEffect(() => {
setname(name.substring(0, 1).toUpperCase() + name.substring(1))
window.onresize = ()=>{ console.log(name) }
return ()=>{ window.onresize = null }
  }, [name]) // 如果是空数组则表示不依赖任何东西，只会在初始化的时候执行一次回调函数
  return (
    <div>
      {name}
      <button onClick={()=>{
        setname('xiaoming')
      }}>click</button>
    </div>
  )
}
```

### useEffect和useLayoutEffect
调用时机不同，useLayoutEffect和原来componentDidMount & componentDidUpdate一致，在react完成DOM更新后马上同步调用的代码，会阻塞页面渲染。而useEffect是会在整个页面渲染完成后才会调用的代码\
官方建议优先使用useEffect\
在实际使用中，如果想避免页面抖动(在useEffect里修改DOM很有可能出现)，可以把需要操作DOM的代码放在useLayoutEffect里，在这里做DOM修改会和react做出的更改一起被一次性渲染到屏幕上，只有一次回流、重回的代价

### useCallback(记忆函数)
两个参数，参数一为缓存的函数，参数二为依赖的变量数组\
防止因为组件重新渲染，导致方法被重新创建，起到缓存作用，只有依赖的变量变化了，才重新声明\
useState其实也是记忆函数\
```js
const handleClick = useCallback(
  ()=>{
    console.log(name)
  },
  [text, name]
)
```

### useMemo记忆组件
useCallback的功能完全可以由useMemo所取代，如果想通过useMemo返回一个记忆函数也是完全可以的\
useCallback(fn, inputs) 等价于 useMemo(()=>fn, inputs)\
唯一的区别：useCallback不会执行第一个参数函数，而是将它返回给你，而useMemo会执行第一个函数并将函数执行结果返回给你。所以在上面的例子中，可以返回handleClick来达到存储函数的目的\
所以useCallback常用来记忆事件函数，生成记忆后的事件函数并传递给子组件使用。而useMemo更适合经过函数计算得到一个确定的值，比如记忆组件。有点类似vue中的计算属性
```js
import React, { useState, useMemo } from 'react'
export default function App() {
  const list = ['1', '2', '3']
  const [text, settext] = useState('')
  const newList = useMemo(() => list.filter(item => item == text), [text])
  return (
    <div>
      <input value={text} onChange={(evt) => {
        settext(evt.target.value)
      }}></input>
      {
        newList.map(item => {
          return <div key={item}>{item}</div>
        })
      }
    </div>
  )
}
```

### useRef(保存引用值)
* useRef()等价于类组件中React.createRef()
* 不止可以使用在标签、组件上。还可以像useState一样保存变量\
  例：var myCount = useRef(0) 使用的时候 myCount.current获取值

底层原理是闭包

### useContext(减少组件层级)
可以直接在消费者customer端通过useContext(前面定义的公共context对象)获取到这个对象，然后直接使用。不需要再用<GlobalContext.Consumer>标签包裹

### useReducer
分离式的状态管理，在组件外部管理状态。多个组件状态共享，降低代码复杂度和耦合度。不支持异步操作\
例：（多组件共享状态，结合useContext使用）
```js
import React, { useContext, useReducer } from 'react'
const reducer = (prevState, action) => {
  let newState = { ...prevState }
  switch (action.type) {
    case 'changeA':
      newState.a = action.value
      return newState
    case 'changeB':
      newState.b = action.value
      return newState
    default:
      return newState
  }
}
const initialState = {
  a: '',
  b: ''
}
const GlobalContext = React.createContext()
function Child1() {
  const test = useContext(GlobalContext)
  return <div style={{ background: 'yellow' }}>
    <button onClick={() => {
      test.dispatch({
        type: 'changeA',
        value: '111'
      })
    }}>改变a</button>
    <button onClick={() => {
      test.dispatch({
        type: 'changeB',
        value: '222'
      })
    }}>改变b</button>
    {test.state.a}
    {test.state.b}
  </div>
}
function Child2(props) {
  const test = useContext(GlobalContext)
  return <div style={{ background: 'red' }}>{test.state.a}{props.children}</div>
}
function Child3(props) {
  const test = useContext(GlobalContext)
  return <div style={{ background: 'blue' }}>{test.state.b}{props.children}</div>
}
export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <GlobalContext.Provider value={
      {
        state,
        dispatch
      }
    }>
      <div>
        <Child1></Child1>
        <Child2><div>大爷</div></Child2>
        <Child3><div>二爷</div></Child3>
      </div>
    </GlobalContext.Provider>
  )
}
```
:::tip
只需要在父级使用useReducer()创建一个状态对象分享给各个子级，而不是各个子级都使用useReducer()创建，因为每次使用useRedecer()都是创建返回一个全新的对象，互不相关
:::

### 自定义hooks
复用JS逻辑\
当我们想在两个函数之间共享逻辑时，我们会把它提取到第三个函数中\
必须以"use"开头。如果不遵循这个规则，那么由于无法判断某个函数是否包含对其内部Hook的调用，React将无法自动检查你的Hooks是否违反了Hook的规则\
将代码片段封装方法供其他组件调用，可以接收传参，方法需要return逻辑处理的结果

## React路由
### 什么是路由
路由是根据不同的url地址展示不同的内容或页面\
一个针对React而设计的路由解决方案、可以友好的帮你解决React components到URL之间的同步映射关系
### 路由安装
这里使用react-router-dom, v5版本
```bash
npm install react-router-dom@5
```
### 路由使用
涉及到路由配置、重定向、路由嵌套\
HashRouter或BrowserRouter标签包裹所有路由标签\
Switch标签包裹Route标签时，直接返回第一个匹配的然后直接break\
Route标签通过path指定url，通过component指定路由组件，不写path时表示全匹配\
Redirect标签重定向，通过from匹配url，通过to定向到新url\
exact属性代表精准匹配，没有这个属性表示模糊匹配\
<!-- \
声明式导航和编程式导航：\
原生js中的声明式是a标签跳转，编程式是window.location.href进行跳转。下面见react中的路由跳转：\
声明式即<NavLink to="xxx">click</NavLink> 必须被HashRouter或BrowserRouter包裹\
NavLink标签的activeClassName属性可指定对应路由激活时的类名，默认为active\
编程式即路由的组件通过路由这个父级传过来的props，props.history.push(‘/xxx’)进行跳转。也可以使用hooks中的useHistory，const akk = useHistory()，此时akk等价前文提到的props.history\
\
路由原理：window.onhashchange可监听url变化，然后location.hash获取url\
\
动态路由传参：<Route path="/xxx/:id"/>冒号表占位符，id为传值属性名。路由组件中通过props.match.params.id获取\
query传参：history.push( {pathName: ‘/xxx’, query: { id: 111 } })，路由组件通过props.location.query.id获取\
state传参：history.push( {pathName: ‘/xxx’, state: { id: 111 } }),路由组件通过props.location.state.id获取\
\
路由拦截\守卫：<Route path="/xxx" render={()=><xxx />}>，通过render属性，函数的返回值为要渲染的组件。可以在函数中做逻辑判断显示不同的组件。如果要url和组件一起变化，则可以让函数直接返回Redirect重定向。通过render返回组件的形式，函数接收一个形参props包含路由的一切方法，供传递给函数返回的组件使用，<Route path="/xxx" render={(props)=><xxx {...props}/>}>。子组件要使用路由方法时，也需要父级传递，注意理解子组件是否直接实例化。如果组件多级嵌套，父级，父父级都还没有路由方法可以传递，可以使用路由组件提供的withRouter方法，const NewChild = withRouter(child),然后使用<NewChild />\
\
路由模式：url带#为hash模式，对应HashRouter标签。不带#为history模式，对应BrowserRouter标签。一般开发时，引入HashRouter或者BrowserRouter时都会as重命名为Router\
注意：BrowserRouter是真正向后端发请求要页面，如果后端没有对应的路径处理逻辑，就会404。让后端重新渲染index页面\ -->

### 反向代理
安装http-proxy-middleware
```js
npm install http-proxy-middleware -S
```
创建src/setupProxy.js并放置如下内容：
```js
const { createProxyMiddleware } = require(‘http-proxy-middleware’)
module.exports = function(app) {
  // 例
  app.use(
    '/api',
    createProxyMiddleware({
      // 当请求地址为api开头时，会自动在前面拼接target的地址
      target: 'https://i.maoyan.com',
      changeOrigin: true
    })
  )
}
```
:::tip
不需要在任何地方导入此文件。当您启动开发服务器时，它会自动注册\
此文件仅支持Node的JavaScript语法。不支持Flow、ES模块等\
将路径传递给代理函数允许您在路径上使用通配符和/或模式匹配，这比快速路由匹配更灵活\
:::

### CSS module
import引入的css文件最终会被放置在index.html中，单页面应用中会全局生效\
所有要css在某个页面单独生效，react脚手架提供了一个方案，在’.css‘前面加上’.module‘，然后在页面中引入这个css模块\
例：\
```js
import style from "/xxx/xxx.module.css"
// 这个name为css文件中起的类名，react最后会重命名这个类名。
<div className={style.name}></div>
```
:::tip
标签选择器react不会重命名\
如果使用了css模块化，但是又想让其中某个类名样式全局生效，可以使用:global(.test) { color:red }
:::

## Flux和Redux
### 介绍及设计和Redux使用的三大原则
Flux是一种架构思想，专门解决软件的结构问题。它跟MVC架构是同一类东西，但是更加简单和清晰。Flux存在多种实现，见下网址：\
https://github.com/voronianski/flux-comparison\
Facebook Flux是用来构建客户端Web应用的应用架构。它利用单向数据流的方式来组合React中的视图组件。它更像一个模式而不是一个正式的框架
![flux工作流](/img/fluxImg.png)
\
Redux最主要是用作应用状态的管理。简言之，Redux用一个单独的常量状态树(state对象)保存这一整个应用的状态，这个对象不能直接被改变。当一些数据变化了，一个新的对象就会被创建(使用action和reducers)，这样就可以进行数据追踪，实现时光旅行\
Redux使用三大原则：
* state以单一对象存储在store对象中。
* state只读(每次都返回一个新的对象)。
* 使用纯函数reducer执行state更新。

纯函数：
* 对外界没有副作用，例如对象的深拷贝，对原对象无影响。
* 同样的输入得到同样的输出
![Redux工作流](/img/reduxImg.png)

### Redux实战
![react实战](/img/reactEx.png)
:::warning
注意：页面销毁时，要取消订阅。不然dispatch的时候还是会分发到。subscribe订阅的时候会返回一个函数，取消订阅直接执行这个函数即可\
函数式组件为了确保数据已经更新完了，有些时候会执行大于一次。
:::

### Redux原理解析
```js
// redux简易源码
function myReduxCreator(reducer) {
  let list = []
  let state = reducer()
  function dispatch(action) {
    state = reducer(state, action)
    for (let i in list) {
      list[i] && list[i]()
    }
  }
  function subscribe(cb) {
    list.push(cb)
  }
  function getState() {
    return state
  }
  return {
    dispatch,
    subscribe,
    getState
  }
}
```

### Redux扩展
如果不同的action所处理的属性之间没有联系，我们可以把Reducer函数拆分。不同的函数负责处理不同属性，最终把它们合并成一个Reducer即可。
```js
import { combineReducers, createStore } from 'redux'
const reducer = combineReducers({
  a,
  b,
  c
})
const store = createStore(reducer)

// 获取值
store.getState().a.xxx
```
具体的各个reducer写法不变\
dispatch之后所有的reducer都会执行，所有的订阅者也会被执行一遍

### Redux中间件
在redux里，action仅仅是携带了数据的普通js对象。action creator返回的值是这个action类型的对象。然后通过store.dispatch进行分发。同步的情况下没有问题，但是reducer无法处理异步的情况。
那么就需要在action和reducer中间使用中间件(middleware)来处理异步。
#### redux-thunk
接收的异步操作的action必须是一个函数\
```bash
npm i redux-thunk
```
通过applyMiddleware配置，即可处理异步情况。可以同时应用多个中间件
```js
import reduxThunk from 'redux-thunk'
import { applyMiddleware, createStore } from 'redux'
const store = createStore(reducer, applyMiddleware(reduxThunk))
```
中间件原理
```js
export default function thunkMiddleware({disptach, getState}) {
  return next => action =>
    typeof action === 'function' ?
      action(dispatch) : 
      next(action)
}
```
意思就是，当中间件接收到的参数action是一个普通js对象就不做任何处理直接下一步。如果action是一个函数，则先执行action同时传入dispatch和getState方法，在它内部再执行dispatch方法。
#### redux-promise
接收的异步操作的action必须是一个promise对象。
```bash
npm i redux-promise
```
```js
import reduxPromise from 'redux-promise'
import { applyMiddleware, createStore } from 'redux'
const store = createStore(reducer, applyMiddleware(reduxPromise))
```

### Redux开发者工具
#### Redux DevTools
老：https://github.com/zalmoxisus/redux-devtools-extension\
新：https://github.com/reduxjs/redux-devtools\
需要对redux进行配置才可使用，项目上线前一般将配置删掉，防止他人查看状态管理。

## react-redux
### 原理
必须依赖于redux，然后增加了一些针对react的特性，帮我们进行订阅、发布、取消订阅等操作\
通过connect函数生成父组件，通过父传子的方式传递参数。当子组件要dispatch时，那么就通过子传父通知父组件。（connect函数就是高阶组件，接收一个不太强的低阶组件，返回一个能力更强的组件。）
最外层还需要一个Provider供应商组件负责把store对象跨级给connect组件
```js
import ReactDOM from 'react-dom/client'
import App from './components/classCom'
import { Provider } from 'react-redux'
import store from './components/redux/store'

ReactDOM.createRoot(
  document.getElementById('root')
).render(<Provider store={store}><App></App></Provider>)
```