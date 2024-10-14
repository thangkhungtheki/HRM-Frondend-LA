
<template>
  <!-- <b-table :items="items" :fields="fields"></b-table> -->
 
  
  <div>
    <!-- component modal của v-b-modal.modal-input -->
    
    <inputcomponent></inputcomponent> 
    <h2>Counter: {{ counter }}</h2>
    <h2>StateCouter : {{ stateCouter }} </h2>
    <b-button variant="outline-primary" @click="additem">ADD ITEM</b-button>
    <CountBar/>
    <hr/>
    <b-button variant="success" @click="handletang">TĂNG</b-button>
    <b-button variant="danger" @click="handlegiam">GIẢM</b-button>
    <b-button variant="outline-primary" @click="getData">CHECK LOG</b-button>
    <b-button v-b-modal.modal-input variant="dark" >MODAL</b-button>
    <b-button variant="info" @click="emitserver">SOCKETIO</b-button>
    <!-- <inputcomponent></inputcomponent> -->
    <hr/>
    <!-- <b-card header-tag="header" footer-tag="footer" header="Bảng dữ liệu" body-class="p-0 card-fixed">
      
    </b-card> -->
    <b-table-lite hover :fields="fields"></b-table-lite>
  </div>




</template>

<script>
import {mapState, mapActions} from 'vuex'
import inputcomponent from '~/components/modal/input.vue'
import socket from '~/plugins/socket.js'
export default {
  layout: "areaAdmin",
  // middleware: [ 'checkcontext', 'auth'],
  beforeMount () {
    socket.on('User connected', this.printMsg)
  },
  components: {
    inputcomponent
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
    // send a request to get result, and assign the value to a, b, c here
    
  },
  methods: {
    ...mapActions({
      add: 'increment',
      except: 'decrement',
      'tanglen': 'device/tanglen'
    }),
    showNotification () {
      this.$notify({
        type: "success",
        message: "Hello, I am a notification",
        hideIcon: true,
        bottom: true,
        right: true,
        closeDelay: 15000
      })
    },
    handletang(){
      this.add()
      this.showNotification()
    },
    handlegiam(){
      this.except()
    },
    getData(){
      try {
        const data = this.$axios.$get(process.env.BACKEND_URL)
        .then(data=>{
          console.log(data)
        })
        
      } catch (error) {
        console.error(error)
      }
    },
    printMsg (msg) {
      console.log('Socket-client on: ', msg)
    },
    emitserver() {
      socket.emit('chat', this.username + ' : hello server')
      console.log('Client emit chat on server')
    },
    additem(){
      this.tanglen('item 2')
    }
  },

  
  data() {
    return {
      items: [

      ],
      fields: [
        {
          key: "first_name",
          label: "Person Name",
          sortable: true,
        },
        {
          key: "last_name",
          label: "last_name",
          sortable: true,
        },
        {
          key: "age",
          label: "age",
          sortable: true,
        },
        {
          key: "BON",
          label: "bon",
          sortable: true,
        },
        {
          key: "NAM",
          label: "nam",
          sortable: true,
        },
        
      ],
      
    }
  },
}
</script>
