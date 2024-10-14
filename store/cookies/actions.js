const Cookies = require('js-cookie') 

export default {
  onlogin({ commit }, data) {
    commit('SET_TOKEN', data.token)
    commit('SET_USER_NAME', data.user.username)
    Cookies.set('token', data.token, { expires: 7 }) // expires in 7 days
    Cookies.set('username', data.user.username, { expires: 7 }) 
  },
  // initializeAuth({ commit }) {
  //   const token = localStorage.getItem('token')
  //   if (token) {
  //     commit('SET_TOKEN', token)
  //   }
  // },
  logout({ commit }) {
    this.$cookies.remove('token');
    commit('SET_TOKEN', null);
  },
  setBeforcePath({commit}, path){
    commit('SET_BEFORCE_PATH', path)
  }
} 