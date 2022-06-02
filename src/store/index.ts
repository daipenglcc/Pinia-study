import { defineStore } from 'pinia'
import { demoStore } from './demo'

export const mainStore = defineStore('main', {
	state: () => {
		return {
			helloWorld: 'Hello World',
			count: 0,
			phone: '15139333888'
		}
	},
	actions: {
		changeState() {
			this.count++
			this.helloWorld = 'demo'
		},
		getList() {
			console.log(demoStore().list)
		}
	},
	getters: {
		// phoneHidden(state) {
		// 	console.log('PhoneHidden被调用了')
		// 	return state.phone.toString().replace(/^(\d{3})\d{4}(\d{4})$/, '$1****$2')
		// }
		phoneHidden(): string {
			console.log('PhoneHidden被调用了')
			return this.phone.toString().replace(/^(\d{3})\d{4}(\d{4})$/, '$1****$2')
		}
	}
})
