import { defineStore } from 'pinia'
import axios from 'axios'

export const useLoginStore = defineStore({
    id: 'login',
    state: () => (
        {
            token: ''
        }
    ),
    getters: {},
    actions: {
        async login(payload){
            try {
                const {data} = await axios.post(`${process.env.VITE_API_URL}/login`, payload)
                this.token = data.data.token
            } catch (error) {
                throw new Error(error)
            }
        }
    },
    persist: {
        key: 'login_data'
    }
})

