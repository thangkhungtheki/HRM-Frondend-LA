
<template>
  <!-- <b-table :items="items" :fields="fields"></b-table> -->
 
  
  <div>
    <hr/>
    <b-button variant="success" @click="importexcel">Import bảng công</b-button>
    <b-button variant="info" @click="importnghiphep">Import nghỉ phép</b-button>
    <b-button variant="outline-primary" @click="lammoi">Làm mới bảng</b-button>
    <!-- component modal của v-b-modal.modal-input -->
    
    <!-- <inputcomponent></inputcomponent> 
    <h2>Counter: {{ counter }}</h2>
    <h2>StateCouter : {{ stateCouter }} </h2>
    <b-button variant="outline-primary" @click="additem">ADD ITEM</b-button>
    <CountBar/>
    <hr/>
    <b-button variant="success" @click="handletang">TĂNG</b-button>
    <b-button variant="danger" @click="handlegiam">GIẢM</b-button>
    <b-button variant="outline-primary" @click="getData">CHECK LOG</b-button>
    <b-button v-b-modal.modal-input variant="dark" >MODAL</b-button>
    <b-button variant="info" @click="emitserver">SOCKETIO</b-button> -->
    <!-- <inputcomponent></inputcomponent> -->
    <hr/>
    <!-- <b-card header-tag="header" footer-tag="footer" header="Bảng dữ liệu" body-class="p-0 card-fixed">
      
    </b-card> -->
    <!-- <b-table-lite hover :fields="fields"></b-table-lite> -->
  </div>




</template>

<script>
import {mapState, mapActions} from 'vuex'

export default {
  layout: "layout-hrm",
 
  components: {
  
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
    }
   },

  
  data() {
    return {
      
    }
  },
}
</script>
