<template>
  <div>
    <form @submit.prevent="userLogin">
      <div>
        <label>Username</label>
        <input type="text" v-model="xlogin.username" />
      </div>
      <div>
        <label>Password</label>
        <input type="password" v-model="xlogin.password" />
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
      <div>
        {{ token }}
      </div>
    </form>
  </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'

export default {
  middleware: [],
  data() {
    return {
      xlogin: {
        username: '',
        password: ''
      }
    }
  },
  
  computed: {
    ...mapState({
      token: state => state.cookies.token,
      stateCouter: state => state.device.couterstate,
    }),
  
  },
  methods: {
    ...mapActions({
      actUser: 'ActUser',
      'login': 'cookies/onlogin'
  }),
    async userLogin() {
    //this.actUser(this.xlogin)
   
        let result  = await this.$axios.post('http://127.0.0.1:3000/express/dangnhap', {
            username: this.xlogin.username,
            password: this.xlogin.password
        })
        await this.login(result.data.token)
        console.log(result.data.token)
        if(this.token){
          this.$router.push('/user')
        }
        else{
            this.$router.push('/home')
          }
        // .then(data => {
        //   if(data.token !== null){
        //     this.login(data.token)
        //     this.$router.push('/user')
        //     console.log(data)
        //   }else{
        //     this.$router.push('/login')
        //   }
        // })
  } 
    
    // this.$store.commit('setUsername', this.login.username);
    // this.$store.commit('setPassword', this.login.password);
    // this.$store.dispatch('setUsername', this.login.username);
    // this.$store.dispatch('setPassword', this.login.password);
    
  }
}

</script>