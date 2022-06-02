<template>
	<h2 class="">{{ store.helloWorld }}</h2>
	<h2 class="">{{ store.count }}</h2>
	<h2 class="">{{ store.phoneHidden }}</h2>
	<hr />
	<h2 class="">{{ helloWorld }}</h2>
	<h2 class="">{{ count }}</h2>
	<h2 class="">{{ phoneHidden }}</h2>
</template>

<script lang="ts" setup>
import { mainStore } from '../store/index'
import { storeToRefs } from 'pinia'
const store = mainStore()
const { helloWorld, count, phoneHidden } = storeToRefs(store)
</script>

<style lang="scss" scoped></style>
