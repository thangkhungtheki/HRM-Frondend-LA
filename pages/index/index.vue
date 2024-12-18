
<template>
  <!-- <b-table :items="items" :fields="fields"></b-table> -->
 
  
  <div>
    <hr/>
      <upload></upload>
    <hr/>
      <uploaddsnghiphep></uploaddsnghiphep>
    <hr/>
   
    <!-- <b-row>
    <b-col md="auto">
      <div>
        <div class="mt-2">Từ ngày: </div>
        <b-form-input v-model="text" placeholder="Từ ngày ..."></b-form-input>  
      </div>
      <b-calendar v-model="value" @context="onContext" locale="en-US"></b-calendar>
    </b-col> -->
    <!-- <b-col>
      <p>Value: <b>'{{ value }}'</b></p>
      <p class="mb-0">Context:</p>
      <pre class="small">{{ context }}</pre>
    </b-col> -->
    <!-- <b-col md="auto">
      <div>
        <div class="mt-2">Đến ngày: </div>
        <b-form-input v-model="text1" placeholder="Đến ngày ..."></b-form-input>  
      </div>
      <b-calendar v-model="value1" @context="onContext1" locale="en-US"></b-calendar>
    </b-col>
  </b-row> -->

   <label>Từ ngày ... </label>
    <b-form-datepicker id="datepicker-tungay" 
      v-model="tungay" placeholder='chọn từ ngày ...' class="mb-2"
      today-button
      reset-button
      close-button
    ></b-form-datepicker>
   <label>Đến ngày ... </label>
    <b-form-datepicker id="datepicker-denngay" 
      v-model="denngay" placeholder='chọn đến ngày ...' class="mb-2"
      today-button
      reset-button
      close-button
    ></b-form-datepicker>
     
  <hr/>
  <p>--- Xử lý công ---</p>
  <p>Từ ngày : <b>{{ tungay }} </b></p>
  <p>Đến ngày: <b>{{ denngay }}</b></p>
  <b-button variant="success" @click="Xulucong">Xử lý công</b-button>
  </div>




</template>

<script>
import {mapState, mapActions} from 'vuex'
import upload from '@/components/uploadfile.vue'
import uploaddsnghiphep from '@/components/uploaddsnghiphep.vue'
export default {
  layout: "layout-hrm",
  data() {
      return {
        // value: '',
        // context1: null,
        // text: '',
        // value1: '',
        // text1:'',
        // context: null
        tungay: '',
        denngay: ''
      }
  },
  components: {
    upload,
    uploaddsnghiphep
  },
  
  mounted() {
    
  },
  computed: {
    ...mapState({
      counter: state => state.counter,
      stateCouter: state => state.device.couterstate,
      username: state => state.cookies.username
    })
  },
  created(){
  
    
  },
  methods: {
    importexcel(){
      alert('import')
    },

    importnghiphep(){
      alert('nghiphep')
    },

    lammoi(){
      alert('lammoi')
    },

    Xulucong(){
      alert('xu ly cong')
    }
    // onContext1(ctx) {
    //     this.context1 = ctx,
    //     this.text1 = this.value1
    // },
    // onContext(ctx) {
    //     this.context = ctx,
    //     this.text = this.value
        
    // }
  },

  
}
</script>
