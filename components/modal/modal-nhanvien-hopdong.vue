<template>
  <div>
    
    <b-modal id="modal-nhanvien-hopdong" @show="resetModal" @hidden="resetModal" >
      <template #modal-title>
        {{ title }}
      </template>
      <alertdanger 
                        ref="alertComponent"
                        message="Đã Lưu database thành công"
                        :dismissSecs="10"
                        variant="success"
                      ></alertdanger>
      <form ref="form" @submit.stop.prevent="handleSubmit">
        <b-form-group label="Mã nhân viên" label-for="name-input" invalid-feedback="Mã nhân viên is required" >
          <b-form-input id="manv-input" v-model="data.manv" required :disabled="isDisabled" ></b-form-input>
        </b-form-group>
        <b-form-group label="Tên nhân viên" invalid-feedback="tên is required">
          <b-form-input id="tennv-input" v-model="data.tennv" required></b-form-input>
        </b-form-group>
        <b-form-group label="Tên phòng ban" invalid-feedback="tên phòng ban is required">
          <b-form-input id="tenphongban-input" v-model="data.tenphongban" required></b-form-input>
        </b-form-group>
        <b-form-group label="Ngày vào cty" invalid-feedback="ngày is required">
          <b-form-input id="ngayvaocty-input" v-model="data.ngayvaocty" type="date" required></b-form-input>
        </b-form-group>
        <b-form-group label="Công Chuẩn" invalid-feedback="Công chuẩn is required">
          <b-form-input id="congchuan-input" v-model="data.congchuan" type="number" required></b-form-input>
        </b-form-group>
        <b-form-group label="Ngành hàng" invalid-feedback="ngành hàng is required">
          <b-form-input id="nganhhang-input" v-model="data.nganhhang" required></b-form-input>
        </b-form-group>
        <hr/>
        
      </form>
       <template #modal-footer="{cancel}">
      <b>{{ data._id }}</b>
      <!-- Emulate built in modal footer ok and cancel button actions -->
      <b-button size="sm" variant="success" @click="handleLuu">
        Lưu Database
      </b-button>
      <b-button size="sm" variant="outline-secondary" @click="cancel()">
        Huỷ
      </b-button>
      <!-- Button with custom close trigger value -->
      <!-- <b-button size="sm" variant="outline-secondary" @click="hide('forget')">
        Forget it
      </b-button> -->
    </template>
    </b-modal>
    </div>
  
</template>

<script>
  import { EventBus } from '~/plugins/eventbus'
  import alertdanger from "@/components/alert/danger.vue"

  export default {
    components:{
      alertdanger
    },
    props: {
      datatitem: {
        type: Object,
        required: true
      },
      title: {
        type: String,
        required: true
      },
      isDisabled: {
        type: Boolean,
        require: false,
        default: false
      }
    },  
    data() {
      return {
        data:{
          ...this.datatitem
        },
        
        // ageState: null
      }
    },
    watch: {
    datatitem: {
      handler(newVal) {
        this.data = { ...newVal };
      },
      deep: true,
      immediate: true
    }
  },
    // computed: {
    //   nameState() {
    //     return this.name.length > 2 ? true : false
    //   },
    //   ageState(){
    //     return this.age.length > 2 ? true : false
    //   }
    // },
    computed: {
      
    },
    methods: {
      checkFormValidity() {
        const valid = this.$refs.form.checkValidity()
        this.nameState = valid
        // this.ageState = valid
        console.log('>>>checkFormValidity: ',valid)
        return valid
      },
      resetModal() {
        // this.name = ''
        // this.age = '' 
        // this.nameState = null
        // this.ageState = null
        
        
      },
      handleOk(bvModalEvent) {
        // Prevent modal from closing
        bvModalEvent.preventDefault()
        // Trigger submit handler
        this.handleSubmit()
        console.log('nhan nut ok')
      },
      handleSubmit() {
        // Exit when the form isn't valid
        if (!this.checkFormValidity()) {
          return
        }
        // Push the name to submitted names
        // this.submittedNames.push(this.name)
        // Hide the modal manually
        console.log('formdata: ', this.formdata)
        
        this.$nextTick(() => {
          this.$bvModal.hide('modal-prevent-closing')
        })
      },
      showAlert() {
        this.$refs.alertComponent.showAlert();
      },
  
      async handleLuu(){
        // alert(this.data.id)
        if(this.data._id){
          alert('nut sua')
          const result = await this.$axios.$post(process.env.BACKEND_URL + '/hrm/suanhanvien',{
          manv: this.data.manv,
          tennv: this.data.tennv,
          tenphongban: this.data.tenphongban,
          ngayvaocty: this.data.ngayvaocty,
          congchuan: this.data.congchuan,
          nganhhang: this.data.nganhhang,
          _id: this.data._id
          })
          if(result === 'ok'){
            // EventBus.$emit('data-saved'); // Emit event when data is saved
            this.showAlert()
          } else{
            alert('Khong thanh cong')
          }
        }else{
          this.isDisabled = false
          const result = await this.$axios.$post(process.env.BACKEND_URL + '/hrm/themnhanvien',{
          manv: this.data.manv,
          tennv: this.data.tennv,
          tenphongban: this.data.tenphongban,
          ngayvaocty: this.data.ngayvaocty,
          congchuan: this.data.congchuan,
          nganhhang: this.data.nganhhang
          })
          if(result === 'ok'){
            // EventBus.$emit('data-saved'); // Emit event when data is saved
            this.showAlert()
          } else{
            alert('Khong thanh cong')
          }
        }
        
      }
    }
  }
</script>