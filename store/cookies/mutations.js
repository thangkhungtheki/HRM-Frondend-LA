export default {
    SET_TOKEN(state, token) {
    state.token = token;
  },
    SET_BEFORCE_PATH (state, path){
      state.beforePath = path
    },
    SET_TOKEN_NULL(state) {
    state.token = null;
    },
    SET_USER_NAME(state, username){
      state.username = username
    },
    SET_USER_NULL(state){
      state.username = null
    }
}