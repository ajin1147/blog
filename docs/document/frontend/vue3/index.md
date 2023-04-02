## ref、reactive
### ref
基础数据类型绑定响应式数据\
ref是一个函数，接收一个参数，返回一个对象，对象有 value 属性，value 属性的值就是传入的参数\
即js中需要通过 .value 的方式访问，template 中会自动解析不需要 .value
:::tip
ref 内部其实是调用了 reactive ，只是 reactive 的参数是一个对象，而 ref 的参数是一个基础数据类型
:::
### reactive
:::info
复杂数据类型绑定响应式数据\
ref是一个函数，接收一个参数，返回一个对象，对象有 value 属性，value 属性的值就是传入的参数\
即 js 中需要通过.value 的方式访问，template 中会自动解析不需要 .value
:::
```vue
<script lang="ts" setup>
import { ref, reactive } from 'vue'
interface Person {
  name: string
  age: number
}
const count = ref<Number>(0)
const list = reactive<Persion[]>([
  {
    name: "李四",
    age: 16
  }  
])
</script>
```

## toRef、toRefs、toRaw
### toRef
使一个对象指定的属性具有数据层面的响应性，不会更新视图
```vue
<script lang="ts" setup>
import { toRef } from 'vue'
const obj = {
  name: "张三",
  age: 18
}
const name = toRef(obj, 'name')
const changeName = () => {
  name.value = '李四'
}
</script>
```

### toRefs
使一个对象所有属性具有数据层面的响应性，不会更新视图\
:::tip
批量版本的 toRef ，源码中也是通过对象循环调用 toRef 实现的
:::
```vue
<script lang="ts" setup>
import { toRefs } from 'vue'
const obj = {
  name: "张三",
  age: 18
}
let { name, age } = toRefs(obj)
</script>
```

### toRaw
将响应式对象修改为普通对象\
数据能变化，视图不更新
:::tip
源码中是通过 WeakMap 实现的，将响应式对象作为 key，普通对象作为 value 存储在 WeakMap 中，通过 get 方法获取
:::

```vue
<script lang="ts" setup>
import { toRefs } from 'vue'
const obj = {
  name: "张三",
  age: 18
}
const data = toRefs(obj)
</script>
```

## computed
```vue
<template>
  <h1>{{total}}</h1>
</template>
<script setup lang="ts">
import { ref,computed } from "vue";
const count = ref(0)
const total = computed<Number>(() => count.value +1)
</script>
```

## watch
```vue
watch(data, ()=>{}, {})
```
* 参数一，监听的数据，多个时为数组。监听对象的某个属性时候需要使用 ()=>xx.xx 的方式。监听 reactive 定义的引用数据时，需要手动开启深度监听
* 数据改变时的回调函数 (newV, oldV)
* 配置项
  * immediate: true, // 立即执行一次回调函数
  * deep: true, // 监听对象的深度变化

## watchEffect
立即运行一个函数，同时响应式地追踪其依赖，并在依赖更改时重新执行，类似计算属性\
用到哪些变量就会监听哪些变量
当 watchEffect在setup() 函数或生命周期钩子中使用时候，会在组件卸载时自动停止监听。但是如果采用异步的方式创建了一个监听器，那么就需要手动停止监听
* 手动停止
```vue
<script setup lang="ts">
import { ref, watchEffect } from "vue"
let count = ref(0)
setTimeout(() => {
  count.value++
}, 1000)
const stop = watchEffect(() => {
  console.log(count.value)
})
// 在需要的位置手动停止
stop()
</script>
```
* 清除副作用
watchEffect的第一个参数——effect函数——可以接收一个参数：叫 onInvalidate ，也是一个函数，用于清除 effect 产生的副作用，就是在触发监听之前会调用一个函数处理你的逻辑，例如防抖
```vue
<script setup lang="ts">
import { ref, watchEffect } from "vue"
let count = ref(0)
setTimeout(() => {
  count.value++
}, 1000)
watchEffect((onInvalidate) => {
  onInvalidate(() => {
    console.log('执行');
  });
})
</script>
```
控制台依次输出：0 => 执行 => 1
* 配置选项
watchEffect 的第二个参数，用来定义副作用刷新时机，可以作为一个调试器来使用。
flush（更新时机）:
  * pre：组件更新前执行
  * sync：强制效果始终同步触发
  * post：组件更新后执行
```vue
<script setup lang="ts">
import { ref, watchEffect } from "vue";
let count = ref(0)
setTimeout(() => {
  count.value++
}, 1000)
watchEffect((onInvalidate) => {
  console.log(count.value)
  onInvalidate(() => {
    console.log('执行');
  });
}, {
  flush: "post",
  // 调试工具
  onTrigger(e) {
    console.log('触发', e);
  },
})
</script>
```

## ref获取节点
在循环中精准获取到节点
```vue
<template>
  <ul>
    <li v-for="item in 5" :key="item" :ref="(el) => setItemRefs(el)">
      {{ item }}
    </li>
  </ul>
</template>
<script setup lang="ts">
import { onMounted } from "vue";
let itemRefs: Array<any> = [];
const setItemRefs = (el) => {
  itemRefs.push(el);
}
onMounted(() => {
  console.log(itemRefs);
});
</script>
```

## 生命周期
与 vue2 相比，vue3 除了 setup 以外所有生命周期名前加 on ，setup 代替了 beforeCreate 和 created ，beforeUpdate 和 updated 更名为 onBeforeUnmount 和 onUnmounted ，以及新增了 onRenderTracked 和 onRenderTriggered 用于开发环境调试的钩子。
| 生命周期 | 执行时机 |
| --- | --- |
| setup | 组件初始化时执行 |
| onBeforeMount | 组件挂载前执行 |
| onMounted | 组件挂载后执行 |
| onBeforeUpdate | 组件更新前执行 |
| onUpdated | 组件更新后执行 |
| onBeforeUnmount | 组件卸载前执行 |
| onUnmounted | 组件卸载后执行 |
| onActivated | 组件激活时执行 |
| onDeactivated | 组件停用时执行 |
| onErrorCaptured | 组件发生错误时执行 |
| onRenderTracked | 组件渲染时执行 |
| onRenderTriggered | 组件渲染后执行 |

## 父子组件传参
### defineProps
无需引入，直接使用
父组件传参
```vue
<template>
  <Child :title="title" />
</template>
<script setup lang="ts">
import { ref, reactive } from 'vue'
import Children from './Children.vue'
const title = ref('起飞')
</script>
```
子组件 defineProps 接收
```vue
<template>
  <h1>{{title}}</h1>
</template>
<script setup lang="ts">
import { defineProps } from 'vue'
defineProps({
  title: String
})
</script>
```

子组件使用 withDefaults 定义 props 默认值
```vue
<template>
  <h1>{{title}}</h1>
</template>
<script setup lang="ts">
type Props = {
  title: string
}
withDefaults(defineProps<Props>(), {
  title: '默认值'
})

</script>
```

### defineEmits
子组件使用 defineEmits 向父组件抛出事件\
通过 defineEmits 注册了一个自定义事件，点击按钮的时候触发 emit 调用我们注册的事件，传递参数
```vue
<template>
  <h1>{{title}}</h1>
  <button @click="onChange">botton</button>
</template>
<script setup lang="ts">
type Props = {
  title: string
}
withDefaults(defineProps<Props>(), {
  title: '默认值'
})
const emits = defineEmits(['test'])
const onChange = () => {
  emits('test', '子组件向父组件抛出事件')
}
</script>
```
父组件接收子组件抛出事件,跟 vue2 一样，通过@事件名接收
```vue
<template>
  <Child :title="title" @test="onTest" />
</template>
```

### defineExpose 获取子组件的实例和内部属性
定义对外暴露的属性和方法\
在 script-setup 模式下，所有数据只是默认 return 给 template 使用，不会暴露到组件外，所以父组件是无法直接通过挂载 ref 变量获取子组件的数据。
* 子组件
```vue
<template>
  <h1>子组件</h1>
</template>
<script setup lang="ts">
const name = ref('子组件')
// 则父组件通过ref能拿到name
defineExpose({
  name
})
</script>
```
* 父组件
```vue
<template>
  <h1>父组件</h1>
  <child ref='childRef' />
</template>
<script setup lang="ts">
import { ref } from 'vue'
import child from './Child.vue'
// 子组件ref（TypeScript语法）
const childRef = ref<InstanceType<typeof child>>()
const getName = () => {
  console.log(childRef.value.name);
}
</script>
```

:::tip
defineProps、defineEmits、defineExpose、withDefaults 在 script-setup 模式可直接使用，如果是在 script 标签下使用，需要引入
:::

## 插槽
vue3中使用v-slot代替了slot和slot-scope，且v-slot:slotName可简写为#slotName
```vue
<template>
  <div>
    <h1>父组件</h1>
    <child>
      <template #content="slotProps">
        <h1>{{slotProps.msg}}</h1>
      </template>
    </child>
  </div>
</template>
<script setup lang="ts">
import child from './Child.vue'
</script>
```
```vue
<template>
  <div>
    <h1>子组件</h1>
    <!-- 如果不是具名插槽，则父组件使用#default -->
    <slot name="content" msg="我是子组件内容"></slot>
  </div>
</template>
```

## 异步组件
使用defineAsyncComponent异步加载组件
```vue
<template>
  <div>
    <h1>父组件</h1>
    <AsyncComponent />
  </div>
</template>
<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
const AsyncComponent = defineAsyncComponent(() => import('./AsyncComponent.vue'))
</script>
```

## Suspense
Suspense 组件用于异步组件的加载，当异步组件加载完成后，Suspense 组件会自动渲染异步组件，否则渲染 fallback 插槽中的内容\
Suspense 组件中的异步组件必须使用 defineAsyncComponent 异步加载\
Suspense 组件带有两个插槽，fallback 和 default，fallback 插槽用于异步组件渲染前的内容，default 插槽包裹异步组件，也可省略
```vue
<template>
  <Suspense>
    <template #fallback>
      <div>loading...</div>
    </template>
    <AsyncComponent />
  </Suspense>
</template>
<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
const AsyncComponent = defineAsyncComponent(() => import('./AsyncComponent.vue'))
</script>
```

## Teleport
Teleport 组件用于将组件渲染到指定的 DOM 节点中，而不是渲染到当前组件的父组件中\
不受父级style、v-show等影响\
通过to 属性插入到指定元素位置，如 body，html，自定义 className 等等
```vue
<template>
  <div>
    <!-- 会直接渲染到body下 -->
    <Teleport to="body">
      <div>我是Teleport组件</div>
    </Teleport>
  </div>
</template>
```

## keep-alive
作用与vue2一样，生命周期名称有所更改\
初次进入时，会触发 activated 生命周期，离开时，会触发 deactivated 生命周期\

## provide/inject
provide/inject 用于父组件向不限层级的子组件透传数据或方法，provide 用于提供数据，inject 用于接收数据\
父组件：
```vue
<template>
  <div>
    <h1>父组件</h1>
    <child />
  </div>
</template>
<script setup lang="ts">
import { ref, provide } from 'vue'
import child from './Child.vue'
const name = ref('父组件')
provide('name', name)
</script>
```
子组件：
```vue
<template>
  <div>
    <h1>子组件</h1>
    <div>{{name}}</div>
  </div>
</template>
<script setup lang="ts">
import { inject } from 'vue'
// const name = inject('name')
const msg = inject<Ref<string>>('name',ref('我是默认值'))
</script>
```
:::tip
inject 的第二个参数为默认值，它可以是一个工厂函数，用来返回某些创建起来比较复杂的值。如果默认值本身就是一个函数，那么必须将 false 作为第三个参数传入，表示这个函数就是默认值而不是工厂函数\
如果想传入的值能响应式变化，那么就使用 ref 或 reactive 添加响应式
:::

## v-model 升级
我们都知道 v-model 是 props 和 emit 组合的语法糖，vue3 中改动如下：
* 变更：value => modelValue
* 变更：update:input => update:modelValue
* 新增：一个组件可以设置多个 v-model
* 新增：开发者可以自定义 v-model 修饰符
* v-bind 的.sync 修饰符和组件的 model 选项被移除
子组件：
```vue
<template>
  <div>
    <h1>子组件</h1>
    <input type="text" :value="msg" @input="textChange" />
    <div>{{msg}}</div>
  </div>
</template>
<script setup lang="ts">
import { defineEmits } from 'vue'
defineProps({
  msg: String
})
const emit = defineEmits(['update:msg'])
const textChange = (e: any) => {
  const value = e.target.value
  console.log(value)
  emit("update:msg", value)
}

</script>
```
父组件：
```vue
<template>
  <div>
    <h1>父组件</h1>
    <child v-model:msg="msg" />
    <div>{{msg}}</div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import child from './components/myChild.vue'
const msg = ref('我是父组件')
</script>
```

## 自定义指令
生命周期：
// 表格
| 钩子 | 说明 |
| --- | --- |
| created | 元素初始化时 |
| beforeMount | 指令第一次绑定到元素时调用，只调用一次 |
| mounted | 指令第一次绑定到元素时调用，只调用一次 |
| beforeUpdate | 指令所在组件的 VNode 更新之前调用，可以调用多次 |
| updated | 指令所在组件的 VNode 及其子 VNode 全部更新后调用，可以调用多次 |
| beforeUnmount | 指令与元素解绑之前调用，只调用一次 |
| unmounted | 指令与元素解绑之后调用，只调用一次 |

自定义拖拽指令：
```vue
<template>
  <div v-drag class="box">
    <div class="header"></div>
    <div>
      内容
    </div>
  </div>
</template>
 
<script setup lang='ts'>
import type { Directive } from "vue";
const vDrag: Directive = {
  mounted(el: HTMLElement) {
    let moveEl = el.firstElementChild as HTMLElement;
    const mouseDown = (e: MouseEvent) => {
      let X = e.clientX - el.offsetLeft;
      let Y = e.clientY - el.offsetTop;
      const move = (e: MouseEvent) => {
        el.style.left = e.clientX - X + "px";
        el.style.top = e.clientY - Y + "px";
        console.log(e.clientX, e.clientY, "位置改变");
      };
      document.addEventListener("mousemove", move);
      document.addEventListener("mouseup", () => {
        document.removeEventListener("mousemove", move);
      });
    };
    moveEl.addEventListener("mousedown", mouseDown);
  },
};
</script>
<style >
.box {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 200px;
  height: 200px;
  border: 1px solid #ccc;
}
.header {
  height: 20px;
  background: black;
  cursor: move;
}
</style>
```
![位置图解](/img/locationDiagram.png)

## 自定义 hooks
vue3 的 hook 函数相当于 vue2 的 mixin，不同在于hooks是函数，而mixin是对象
* 窗口改变时获取宽高 hook
```ts
import { onMounted, onUnmounted, ref } from "vue";

function useWindowResize() {
  const width = ref(0);
  const height = ref(0);
  function onResize() {
    width.value = window.innerWidth;
    height.value = window.innerHeight;
  }
  onMounted(() => {
    window.addEventListener("resize", onResize);
    onResize();
  });
  onUnmounted(() => {
    window.removeEventListener("resize", onResize);
  });
  return {
    width,
    height
  };
}

export default useWindowResize;
```
使用：
```vue
<template>
  <h3>屏幕尺寸</h3>
  <div>宽度：{{ width }}</div>
  <div>高度：{{ height }}</div>
</template>

<script setup lang="ts">
import useWindowResize from "../hooks/useWindowResize.ts";
const { width, height } = useWindowResize();
</script>
```
* 权限按钮 hook
```vue
<template>
  <button v-has-show="'create'">创建</button>
</template>
<script setup lang='ts'>
import type { Directive } from 'vue'
//mock用户权限
const permission = [
  'create',
]
const vHasShow:Directive<HTMLElement,string> = (el,bingding) => {
  if(!permission.includes(bingding.value)){
    el.style.display = 'none'
  }
}
</script>
```

## 插件
### 项目插件
* unplugin-auto-import/vite\
  自动导入用到的组件

### vscode插件
* volar\
  vue3 的语法高亮，需关闭 vetur 插件
