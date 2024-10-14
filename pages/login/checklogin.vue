<template>

</template>

<script>
  import {
    mapState,
    mapActions
  } from 'vuex'
  export default {
    async asyncData({
      store,
      redirect,
      $axios,

    }) {
      const username = store.state.username;
      const password = store.state.password;
      try {
        const response = await $axios.$post('http://127.0.0.1:3000/express/dangnhap', {
            username: username,
            password: password
          })
          .then(data => {
            if (!data.loi) {
              // this.$cookiz.set('auth_token', token, {
              //   path: '/',
              //   maxAge: 60 * 60 * 24 * 7 // 7 ngày
              // });

              // store.commit('SET_TOKEN', data.token);
              // this.onlogin(data.token)
              router.push('/user');
              console.log(data)
              // redirect('/user')
            } else {
              console.log('sai pass')
              redirect('/login')
            }

          })

      } catch (error) {
        console.log(error)
        redirect('/login')
      }

    },
    ...mapState({
      cookies: state => state.cookies.token,
      
    }),
    methods: {

      ...mapActions({
        'onlogin': 'cookies/onlogin'
      }),

    }
  }
</script>

<style>

</style>