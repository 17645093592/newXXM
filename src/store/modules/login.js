import * as types from '../types'
import utils from '@/utils/utils'
// 缓存的key
const STORAGE_DATA = 'loginData'

const state = {
  loginData: {},
  token: ''
}

const getters = {
  loginData: state => state.loginData.username ? state.loginData : (utils.getStorage(STORAGE_DATA) || {}),
  token: state => state.loginData.token ? state.loginData.token : (utils.getStorage('token') || '')
}

const mutations ={
 // 保存登录信息
 [types.SET_LOGIN_DATA](state, data) {
  state.loginData = data
  // state.token = data.token
},
// 保存token
[types.SET_TOKEN](state, data) {
  // state.loginData = data
  state.token = data.token
},
// 移除登录信息
[types.REMOVE_LOGIN_DATA](state) {
  state.loginData = {}
}
}

const actions = {
  // 保存登录信息,存入缓存
  setLoginData({commit},data){
    console.log(data, 'aa')

    commit(types.SET_LOGIN_DATA,data)
    utils.setStorage(STORAGE_DATA, data)
    utils.setStorage('token', data.token)
    // window.sessionStorage.setItem('loginData', data)
    // window.sessionStorage.setItem('token', data.token)
  },
  // 保存token,存入缓存
  setToken({ commit }, data) {
    // console.log(data, 'token')
    commit(types.SET_TOKEN, data)
    // window.sessionStorage.setItem('token', data.token)
  },
  // 移除登录信息,清空缓存
  removeLoginData({ commit }) {
    commit(types.REMOVE_LOGIN_DATA)
    utils.removeStorage(STORAGE_DATA)
  }
}

export default {
    state,
    getters,
    mutations,
    actions
}