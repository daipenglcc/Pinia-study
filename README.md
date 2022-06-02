# Pinia-study

### 简介

Pinia 是 Vue 生态里 Vuex 的代替者，一个全新 Vue 的状态管理库

### 对比 Vuex 的五大优势

- 可以对 Vue2 和 Vue3 做到很好的支持，也就是老项目也可以使用 Pinia。
- 抛弃了 Mutations 的操作，只有 state、getters 和 actions.极大的简化了状态管理库的使用，让代码编写更加容易直观。
- 不需要嵌套模块，符合 Vue3 的 Composition api ，让代码更加扁平化。
- 完整的 TypeScript 支持。Vue3 版本的一大优势就是对 TypeScript 的支持，所以 Pinia 也做到了完整的支持。如果你对 Vuex 很熟悉的化，一定知道 Vuex 对 TS 的语法支持不是完整的（经常被吐槽）。
- 代码更加简洁，可以实现很好的代码自动分割。Vue2 的时代，写代码需要来回翻滚屏幕屏幕找变量，非常的麻烦，Vue3 的 Composition api 完美了解决这个问题。 可以实现代码自动分割，pinia 也同样继承了这个优点

### 个人理解

- 简化了 Vuex 的多个操作，舍弃了同步操作 Mutations
- 更好的 ts 支持
- 多个业务场景，不需要由一个 store 页面去拆分出多个 store 页面，去跟进业务模块单独管理配置
- 组合式 API，代码可读性更强
- 更好的代码复用和逻辑复用
- 兼容 Vue2 和 Vue3
