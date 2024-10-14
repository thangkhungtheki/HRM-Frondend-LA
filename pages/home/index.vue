<template>
  <div> 
    <b-container>
      <section class="vh-100" style="background-color: #0b5ee3;">
        <div class="container py-5 h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col col-xl-10">
              <div class="card" style="border-radius: 1rem;">
                <div class="row g-0">
                  <div class="col-md-6 col-lg-5 d-none d-md-block">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp" alt="login form" class="img-fluid" style="border-radius: 1rem 0 0 1rem;" />
                    <!-- <img src="" alt="login form" class="img-fluid" style="border-radius: 1rem 0 0 1rem;" /> -->
                  </div>
                  <div class="col-md-6 col-lg-7 d-flex align-items-center">
                    <div class="card-body p-4 p-lg-5 text-black">
                      
                      <client-only>

                        <b-form @submit="handlelogin" v-if="show">

                          <div class="d-flex align-items-center mb-3 pb-1">
                            <i class="fas fa-cubes fa-2x me-3" style="color: #0b5ee3;"></i>
                            <span class="h1 fw-bold mb-0">Logo</span>
                          </div>

                          <h5 class="fw-normal mb-3 pb-3" style="letter-spacing: 1px;" v-if="!token">Sign into your account</h5>
                          <div v-if="!token">
                            <div data-mdb-input-init class="form-outline mb-4">
                              <b-form-input  class="form-control form-control-lg" v-model="xlogin.username"  required />
                              <!-- <b-form-invalid-feedback >Không được để trống.</b-form-invalid-feedback> -->
                              <label class="form-label" for="form2Example17">Username</label>
                            </div>

                            <div data-mdb-input-init class="form-outline mb-4">
                              <b-input-group>
                              <b-form-input :type="passwordFieldType" id="form2Example27" class="form-control form-control-lg" v-model="xlogin.password" required/>
                              
                              <b-input-group-append>
                              <b-button @click="togglePasswordVisibility" variant="secondary">
                                  <i :class="passwordFieldType === 'password' ? 'bi bi-eye-slash' : 'bi-eye'" ></i>
                              </b-button>
                              </b-input-group-append>
                              </b-input-group>
                              <label class="form-label" for="form2Example27">Password</label>
                            </div>
                            <div class="pt-1 mb-4">
                              <b-button data-mdb-button-init data-mdb-ripple-init class="btn btn-dark btn-lg btn-block" type="submit">Login</b-button>
                            </div>
                          </div>
                          <div class="pt-1 mb-4" v-if="token">
                            <h5 class="fw-normal mb-3 pb-3" style="letter-spacing: 1px;">Tài khoản <b>{{ username }}</b> đã đăng nhập </h5>

                            <b-button variant="success" @click="handledangnhap">Đăng nhập</b-button>
                            <b-button variant="danger" @click="handlelogout">Đăng xuất</b-button>
                          </div>
                          
                          <!-- <a class="small text-muted" href="#!">Forgot password?</a>
                        <p class="mb-5 pb-lg-2" style="color: #393f81;">Don't have an account? <a href="#!" style="color: #393f81;">Register here</a></p> -->
                          <b-container>
                            <a href="#!" class="small text-muted">Terms of use.</a>
                            <a href="#!" class="small text-muted">Privacy policy</a>
                          </b-container>

                        </b-form>
                        <alertdanger 
                            ref="alertComponent"
                            message="Nhập sai tên hoặc mật khẩu"
                            :dismissSecs="5"
                            variant="danger"
                          ></alertdanger>
                      </client-only>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- <h1>
        {{ token ? token : 'Chưa đăng nhập'}}
      </h1>
      <div>
        <b-button variant="success" @click="handledangnhap">Đăng nhập</b-button>
        <b-button variant="danger" @click="handlelogout">Đăng xuất</b-button>
      </div> -->
    </b-container>
  </div>
</template>

<script>
  import {
    mapState,
    mapActions
  } from 'vuex'
  import alertdanger from "@/components/alert/danger.vue"
  import Cookies from 'js-cookie'
  export default {
    // layout: 'areaAdmin',
    middleware: [ 'checkcontext' ],
    components: {
      alertdanger
    },
    data() {
      return {
        xlogin: {
          username: '',
          password: ''
        },
        passwordFieldType: 'password',
        show: true
      }
    },
    computed: {
      ...mapState({
        token: state => state.cookies.token,
        stateCouter: state => state.device.couterstate,
        username: state => state.cookies.username
      })
      
    },

    methods: {
      ...mapActions({
        actUser: 'ActUser',
        'login': 'cookies/onlogin'
      }),
      async handlelogin(event) {
        event.preventDefault()
        
        
        // this.actUser(this.xlogin)
        // event.preventDefault()
        // alert('Click Login button')
        let result = await this.$axios.post('/express/dangnhap', {
          username: this.xlogin.username,
          password: this.xlogin.password
        })
        
        
        if(result.data.token) {
          await this.login(result.data)
          // console.log(result.data)
          this.$router.push('/user')
        }else{
          this.clearInput()
          this.showAlert()
          // this.$router.push('/home')
        }
          
        
      },
      
      showAlert() {
        this.$refs.alertComponent.showAlert();
      },
  
      handledangnhap() {
        if (this.token) {
          this.$router.push('/user')
        } else {
          this.$router.push('/login')
        }
      },
      clearInput() {
        this.xlogin.username = ''
        this.xlogin.password = ''
      },
      handlelogout() {
        
        // alert('Click Logout button')
        Cookies.remove('token')
        this.$store.commit("cookies/SET_TOKEN_NULL")
        this.$store.commit("cookies/SET_USER_NULL")
        Cookies.remove('username')
        this.$router.push('/home')
        
      },
      togglePasswordVisibility() {
        this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password';
      }
    }
  }
</script>

<style>

</style>