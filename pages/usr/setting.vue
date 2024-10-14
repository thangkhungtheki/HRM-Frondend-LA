<template>
     <b-container fluid="sm">
    <div>
        <h1> Thông in chung </h1>
        
        <hr />
        <div>
            <h3> Đổi mật khẩu </h3>
        </div>
        <hr />
        
      

            <form ref="form" @submit.prevent="handleSubmit">
                <b-form-group >
                    Username: <h3>{{ this.username }}</h3>
                </b-form-group>
                <b-form-group label="Nhập mật khẩu mới" >
                    <div >
                              <b-input-group>
                              <b-form-input :type="passwordFieldType1" v-model="password1" required/>
                              
                              <b-input-group-append>
                              <b-button @click="togglePasswordVisibility1" variant="secondary">
                                  <i :class="passwordFieldType1 === 'password' ? 'bi bi-eye-slash' : 'bi-eye'" ></i>
                              </b-button>
                              </b-input-group-append>
                              </b-input-group>
                              
                </div>
                </b-form-group>
                
                <b-form-group label="Xác nhận mật khẩu mới" >
                    <div >
                              <b-input-group>
                              <b-form-input :type="passwordFieldType2" v-model="password2" required/>
                              
                              <b-input-group-append>
                              <b-button @click="togglePasswordVisibility2" variant="secondary">
                                  <i :class="passwordFieldType2 === 'password' ? 'bi bi-eye-slash' : 'bi-eye'" ></i>
                              </b-button>
                              </b-input-group-append>
                              </b-input-group>
                              
                </div>
                </b-form-group>
                <b-form-group >
                    <b-button type="submit" variant="success">Xác nhận đổi MK</b-button>
                </b-form-group>
            </form>
       
        
        <hr/>  
    </div>
</b-container>
</template>

<script>
    import Cookies from 'js-cookie'
    import {mapState} from 'vuex'

    export default {
        layout: "areaAdmin",
        data() {
            return {     
                password1: null,
                password2: null,
                passwordFieldType1: 'password',
                passwordFieldType2: 'password',
            }
        },
        computed: {
            ...mapState({
                username: state => state.cookies.username,
                token: state => state.cookies.token
            })
        },
        methods: {
            async handleSubmit(){
                if(this.password1 !== this.password2){
                    this.showNotification('warning','Mật khẩu mới và xác nhận không giống nhau')
                }else{
                    let result = await this.$axios.post('http://127.0.0.1:4000/update-password',{
                        username: this.username,
                        newPassword: this.password2,
                    },
                    {
                        headers: {
                            'authorization': "Bearer " + this.token
                        }
                    })
                    this.showNotification('success',"Đổi mật khẩu thành công !!!")
                    this.password1 = null
                    this.password2 = null
                    Cookies.remove('token')
                    Cookies.remove('username')
                    this.$store.commit("cookies/SET_TOKEN_NULL")
                    this.$store.commit("cookies/SET_USER_NULL")
                    this.$router.push('/home')
                }
                //alert('hahaha')
                // console.log("username: ", this.username)
                // console.log("password: ", this.password1)
            },
            togglePasswordVisibility1(){
                this.passwordFieldType1 = this.passwordFieldType1 === 'password' ? 'text' : 'password';
            },
            togglePasswordVisibility2(){
                this.passwordFieldType2 = this.passwordFieldType2 === 'password' ? 'text' : 'password';
            },
             showNotification (type, msg) {
                this.$notify({
                    type: type,
                    message: msg,
                    hideIcon: true,
                    bottom: true,
                    right: true,
                    closeDelay: 10000
                })
            },
        }
    }
</script>