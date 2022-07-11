import Vue from 'vue'
import Vuex from 'vuex'

const initialState = () => ({
  user: {
    firstName: '',
    lastName: '',
    patronymic: '',
    bday: '',
    phone: '',
    email: '',
  },
})

/*
|--------------------------------------------------------------------------
| State
|--------------------------------------------------------------------------
*/
const state = initialState

/*
|--------------------------------------------------------------------------
| Mutations
|--------------------------------------------------------------------------
*/
const mutations = {
  SET_USER(state, payload) {
    state.user = payload
  },
  UPDATE_USER(state, payload) {
    Object.keys(payload).forEach(key => {
      if (payload[key] !== state.user[key]) state.user[key] = payload[key]
    })
  },
  UPDATE_USER_CONTACT(state, payload) {
    Object.keys(payload).forEach(key => {
      state.user[key] = payload[key]
      if (key === 'phone') state.user.isPhoneModerated = true
      else state.user.isEmailModerated = true
    })
  },
}

/*
|--------------------------------------------------------------------------
| Getters
|--------------------------------------------------------------------------
*/
const getters = {
  getUser(state) {
    return state.user
  },
}

const actions = {
  loadUser({ commit }) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({
          firstName: 'Антонов',
          lastName: 'Сергей',
          patronymic: 'Антонович',
          bday: '1985-06-15',
          phone: '+79192304321',
          email: 'antonov.sergey@gmail.com',
          isPhoneModerated: false,
          isEmailModerated: false,
        })
      }, 1000)
    }).then(response => {
      commit('SET_USER', response)
    })
  },
  updateUser({ commit }, payload) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve()
      }, 1000)
    }).then(() => {
      commit('UPDATE_USER', payload)
    })
  },
  updateUserPassword() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve()
      }, 1000)
    })
  },
  updateUserContact({ commit }, payload) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve()
      }, 1000)
    }).then(() => {
      commit('UPDATE_USER_CONTACT', payload)
    })
  },
  logout() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Success')
        reject('Error')
      }, 1000)
    })
      .then(response => alert(response))
      .catch(error => alert(error))
  },
}

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {},
  state,
  getters,
  mutations,
  actions,
})
