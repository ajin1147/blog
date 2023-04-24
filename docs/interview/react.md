---
outline: [2,2]
---
## Hooks使用注意
* 不要在循环，条件或嵌套函数中调用Hook，必须始终在 React函数的顶层使用Hook
因为React需要利用调用顺序来正确更新相应的状态，以及调用相应的钩子函数。一旦在循环或条件分支语句中调用Hook，就容易导致调用顺序的不一致性，从而产生难以预料到的后果。
* 使用useState时候，使用push，pop，splice等直接更改数组对象的坑
使用push直接更改数组无法获取到新值，应该采用解构方式，但是在class里面不会有这个问题。

## React的事件和普通的HTML事件有什么不同？
* React事件的命名采用小驼峰式（camelCase），而不是纯小写
* 对于事件函数处理语法，原生事件为字符串，react 事件为函数
* react 事件不能采用 return false 的方式来阻止浏览器的默认行为，而必须要地明确地调用preventDefault()来阻止默认行为

## Fiber
* Fiber是React 16的核心算法，它是React 16的重要改进，它的目的是为了解决React在大量数据变化时的性能问题。
* React 16之前的版本，React的渲染过程是同步的，也就是说当状态发生变化时，React会立即重新渲染整个组件树，这样的话，当组件树比较复杂时，就会造成性能问题。
* React 16中，React的渲染过程是异步的，也就是说当状态发生变化时，React不会立即重新渲染整个组件树，而是将渲染工作分成一个个单元，然后将单元放到一个队列中，然后再将单元从队列中取出来，渲染到页面上。这样的话，当组件树比较复杂时，就不会造成性能问题了。
fiber实现原理:\
fiber是一个数据结构，它是一个链表，每个fiber节点都有一个child属性，指向第一个子节点，也有一个sibling属性，指向下一个兄弟节点。当渲染一个组件时，会创建一个fiber节点，然后为这个组件的每个子节点创建一个fiber节点，然后将这些fiber节点串成一个链表，最后将这个链表赋值给child属性。当渲染完一个组件时，会将这个组件的fiber节点的sibling属性指向下一个兄弟节点的fiber节点，然后再将这个兄弟节点的fiber节点的child属性指向这个兄弟节点的第一个子节点的fiber节点，然后再将这个子节点的fiber节点的sibling属性指向下一个兄弟节点的fiber节点，以此类推，直到渲染完整个组件树。这样的话，当组件树比较复杂时，就不会造成性能问题了。\
requestIdleCallback主要用于实现React Fiber的调度器。React Fiber是一种新的协调器算法，它将一个大任务拆分为多个小任务，并在任务之间采用优先级调度的方式来实现高效的组件更新和渲染。requestIdleCallback 可以在浏览器空闲时间执行函数，可以将其用于调度React任务，并且可以设置任务的优先级以及时间限制，从而实现更高效的渲染和更新。
每个fiber对象存储了以下信息：
<!-- 表格 -->
| 属性 | 说明 |
| --- | --- |
| type | 组件类型 |
| key | key值 |
| stateNode | 组件实例 |
| child | 第一个子节点 |
| sibling | 下一个兄弟节点 |
| return | 父节点 |
| effectTag | 用于标识当前节点在更新过程中的状态 |
| pendingProps | 当前节点的props |
| memoizedProps | 上一次节点的props |
| memoizedState | 上一次节点的state |
| updateQueue | 更新队列 |
| alternate | 上一次的fiber对象 |
| index | 当前节点在兄弟节点中的索引 |
| ref | ref引用 |
| pendingWorkPriority | 当前节点的优先级 |