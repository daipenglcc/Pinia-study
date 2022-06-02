<template>
	<div><button @click="handleClick">点击增加</button></div>
	<div><button @click="handleClickPatch">修改数据（$patch）</button></div>
	<div>
		<button @click="handleClickMethod">修改数据（$patch+函数）</button>
	</div>
	<div>
		<button @click="handleClickActions">修改数据（actions）</button>
	</div>
	<div>
		<button @click="handleClickChangePhone">改变电话号码</button>
	</div>

	<div>
		<button @click="getList">显示List</button>
	</div>
</template>

<script lang="ts" setup>
import { mainStore } from '../store/index'
const store = mainStore()

const handleClick = () => {
	store.count++
}

const handleClickPatch = () => {
	store.$patch({
		count: store.count + 2,
		helloWorld: store.helloWorld === 'demo' ? 'HelloWorld' : 'demo'
	})
}

const handleClickMethod = () => {
	store.$patch(state => {
		state.count++
		state.helloWorld = state.helloWorld === 'demo' ? 'HelloWorld' : 'demo'
	})
}

const handleClickActions = () => {
	store.changeState()
}

// 点击按钮的对应函数
const handleClickChangePhone = () => {
	store.phone = '15139333999'
}

const getList = () => {
	store.getList()
}
</script>

<style lang="scss" scoped></style>
