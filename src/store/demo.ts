import { defineStore } from 'pinia'

export const demoStore = defineStore('demo', {
	state: () => {
		return {
			list: ['小红', '小美', '胖丫']
		}
	}
})
