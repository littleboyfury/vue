import { initMixin } from './init'
import { stateMixin } from './state'
import { renderMixin } from './render'
import { eventsMixin } from './events'
import { lifecycleMixin } from './lifecycle'
import { warn } from '../util/index'
import type { GlobalAPI } from 'types/global-api'

// TODO Vue 构造方法
function Vue(options) {
  if (__DEV__ && !(this instanceof Vue)) {
    warn('Vue is a constructor and should be called with the `new` keyword')
  }
  this._init(options)
}

//@ts-expect-error Vue has function type
// TODO 添加 _init 方法 内容如下
// initLifecycle 初始化基本值
// initEvents 忽略
// initRender 绑定 $createElement h 函数 插槽相关
// beforeCreate 生命周期
// initInjections 忽略
// initState 初始化 props methods data computed watch
//   initProps
//   initMethods
//   initData 在 vm 中挂载 _data 通过 get 和 set observe(data)
//     判断 data 是否是数组，是否是对象 判断是否是冻结对象 返回一个 new Observer
//       每个属性都有一个 dep 用于收集依赖，调用的地方赋值 Dep.target  在 Watcher 中收集依赖
// initProvide 忽略
// created 生命周期
// 挂载 #app
initMixin(Vue)

//@ts-expect-error Vue has function type
// TODO 创建了 get 把 data 挂载到 this 上 $data
// 创建了 get 把 props 挂载到 this 上 $props
// 挂载 $set $ delete $watch
stateMixin(Vue)

//@ts-expect-error Vue has function type
// TODO 挂载 $on $ once $off $emit
eventsMixin(Vue)

//@ts-expect-error Vue has function type
// TODO 挂载 _update $forceUpdate $destroy
lifecycleMixin(Vue)

//@ts-expect-error Vue has function type
// TODO 挂载各种函数 $nextTick _render
renderMixin(Vue)

export default Vue as unknown as GlobalAPI
