<template>
  <div>
    
    <form @submit.prevent="userLogin">
      <div>
        <label>Username</label>
        <input type="text" v-model="login.username" />
      </div>
      <div>
        <label>Password</label>
        <input type="password" v-model="login.password" />
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>

export default {
  middleware:['auth'],
  
  data() {
    return {
      login: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
     userLogin() {
      this.$store.commit('setUsername', this.login.username);
      this.$store.commit('setPassword', this.login.password);


      // this.$store.dispatch('setUsername', this.login.username);
      // this.$store.dispatch('setPassword', this.login.password);
      // this.$router.push('/user')
      
    //   try {
    //     const response = this.$auth.loginWith('local', {
    //       data: this.login
    //     })
    //     .then(data => {
    //       if(data){
    //         console.log(data)
    //         this.$store.dispatch('login')
    //         this.$router.push('/dashboard')
    //       }else {
    //         alert('Thông tin đăng nhập không hợp lệ')
    //       }
    //     })
        
    //   } catch (err) {
    //     console.log(err)
    //   }
    }
  }
}
</script>