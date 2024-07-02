/*
 * @Date: 2022-06-25 14:04:19
 * @LastEditors: tao.xu
 * @LastEditTime: 2023-01-30 17:22:08
 * @Description: 文件信息
 */
import { defineStore } from 'pinia'

export const mainStore = defineStore('main', {
  state: () => {
    return {
      helloWorld: 'pinia变量',
      count:0

    }
  },
  getters: {},
  actions: {
    changeState(){
      this.count++,
      this.helloWorld = this.helloWorld + '@'
    }
  }
})