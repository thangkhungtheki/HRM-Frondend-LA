<template>
   
    <div>
    <client-only>
      <b-container fluid>
        
      <table>
        <tr>
          <td></td>
          <td class="text-center" :colspan="xulycolspan()" >
           <h6>Dương Lịch - Tháng: {{ thang }} - Năm: {{ nam }} </h6>
          </td>
        </tr>
        <tr class="mauhead"> 
          <td><b>Thứ</b></td>
          <td v-for="items, index in thangngay" :key="index" :class="getDayClass(items.thu)" >
            {{ items.thu}}
          </td>
        </tr>
        <tr>
          <td class="mauam">DL</td>
          <td v-for="items, index in thangngay" :key="index">
            {{ items.ngay}}
          </td>
        </tr>
        <tr>  
          <td class="mauduong">AL</td>
          <td v-for="items, index in thangngay" :key="index">
            <span v-if="items.am == 1 || index == 0 ">{{ items.am }}/{{ items.amthang }} </span>
            <span v-else> {{ items.am }} </span>
          </td>
        </tr>
        <tr>
          <td class="mausang"><b>Sảnh</b></td>
          <td class="text-center mausang" :colspan="xulycolspan()" >
           <strong>Trưa</strong>
          </td>
        </tr>
        <tr>
          <td>
            SAPPHIRE
          </td>
          <td v-for="items, index in thangngay" :key="index">
            <div class='fixcell' v-if="items.thongtin?.sang.sp?.sanh=='sp' && items.thongtin?.sang.sp.soban && items.thongtin?.sang.sp.buoi == 'sang'">
              <b-button :id= "index + 'spsang'"  v-b-modal.modal-tall class='btnfixfullcell' squared :variant="hangletiec(items.thongtin?.sang.sp)" @click="handleClick(items)"> {{ items.thongtin?.sang.sp.soban }} </b-button>
              <b-tooltip :target="index + 'spsang'" :variant="hangdletooltip(items)">{{ items.thongtin?.sang.sp }}</b-tooltip>
            </div>
            <div class='fixcell' v-else>
                <b-button variant="outline-light" class='btnfixfullcell' >+</b-button>
            </div>
          </td>
        </tr>
        <tr>
          <td >
           RUBY 1
          </td>
          <td v-for="items, index in thangngay" :key="index" :rowspan="handlerowspan(items)">
             <div class='fixcell' v-if="items.thongtin?.sang.rb1?.sanh=='rb1' && items.thongtin?.sang.rb1.soban && items.thongtin?.sang.rb1.buoi == 'sang'">
              <b-button :id= "index + 'rb1sang'" v-b-modal.modal-tall class='btnfixfullcell' squared :variant="hangletiec(items.thongtin?.sang.rb1)" @click="handleClick(items)"> {{ items.thongtin?.sang.rb1.soban }} </b-button>
              <b-tooltip :target="index + 'rb1sang'" :variant="hangdletooltip(items)">{{ items.thongtin?.sang.rb1 }}</b-tooltip>    
            </div>
            <div class='fixcell' v-else-if="items.thongtin?.sang.grb?.sanh=='grb' && items.thongtin?.sang.grb.soban && items.thongtin?.sang.grb.buoi == 'sang'" >
              <b-button :id= "index + 'rb1sang'" v-b-modal.modal-tall class='btnfixfullcell' squared :variant="hangletiec(items.thongtin?.sang.grb)" @click="handleClick(items)"> {{ items.thongtin?.sang.grb.soban }} </b-button>
              <b-tooltip :target="index + 'rb1sang'" :variant="hangdletooltip(items)">{{ items.thongtin?.sang.grb }}</b-tooltip>
            </div>
            <div class='fixcell' v-else>
                <b-button variant="outline-light" class='btnfixfullcell' >+</b-button>
            </div>
          </td>
        </tr>
        <tr>
          <td >
           RUBY 2
          </td>
          <!-- eslint-disable -->
          <td v-for="items, index in thangngay" :key="index" v-if="items.thongtin?.sang.grb?.sanh !=='grb'">
           <div class='fixcell' v-if="items.thongtin?.sang.rp2?.sanh=='rb2' && items.thongtin?.sang.dp2.soban && items.thongtin?.sang.rp2.buoi == 'sang'">
              <b-button :id= "index + 'rb2sang'" v-b-modal.modal-tall class='btnfixfullcell' squared :variant="hangletiec(items.thongtin?.sang.rb2)" @click="handleClick(items)"> {{ items.thongtin?.sang.dp2.soban }} </b-button>
              <b-tooltip :target="index + 'rb2sang'" :variant="hangdletooltip(items)">{{ items.thongtin?.sang.rb2 }}</b-tooltip>
            </div>
            
            <div class='fixcell'>
                <b-button variant="outline-light" class='btnfixfullcell' >+</b-button>
            </div>
          </td>
          <!-- eslint-enabled -->
        </tr>
        <tr>
          <td>
            DIAMOND 1
          </td>
          <td v-for="items, index in thangngay" :key="index">
            <div class='fixcell' v-if="items.thongtin?.sang.dp1?.sanh=='dp1' && items.thongtin?.sang.dp1.soban && items.thongtin?.sang.dp1.buoi == 'sang'">
              <b-button :id= "index + 'dp1sang'" v-b-modal.modal-tall class='btnfixfullcell' squared :variant="hangletiec(items.thongtin?.sang.dp1)" @click="handleClick(items)"> {{ items.thongtin?.sang.dp1.soban }} </b-button>
              <b-tooltip :target="index + 'dp1sang'" :variant="hangdletooltip(items)">{{ items.thongtin?.sang.dp1 }}</b-tooltip>
            </div>
            <div class='fixcell' v-else>
                <b-button variant="outline-light" class='btnfixfullcell' >+</b-button>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            DIAMOND 2
          </td>
          <td v-for="items, index in thangngay" :key="index">
            <div class='fixcell' v-if="items.thongtin?.sang.dp2?.sanh=='dp2' && items.thongtin?.sang.dp2.soban && items.thongtin?.sang.dp2.buoi == 'sang'">
              <b-button :id= "index + 'dp2sang'" v-b-modal.modal-tall class='btnfixfullcell' squared :variant="hangletiec(items.thongtin?.sang.dp2)" @click="handleClick(items)"> {{ items.thongtin?.sang.dp2.soban }} </b-button>
              <b-tooltip :target="index + 'dp2sang'" :variant="hangdletooltip(items)">{{ items.thongtin?.sang.dp2 }}</b-tooltip>
            </div>
            <div class='fixcell' v-else>
                <b-button variant="outline-light" class='btnfixfullcell' >+</b-button>
            </div>
          </td>
        </tr>
        <tr>
          <td>
             PLATINUM
          </td>
          <td v-for="items, index in thangngay" :key="index">
            <div class='fixcell' v-if="items.thongtin?.sang.pla?.sanh=='pla' && items.thongtin?.sang.pla.soban && items.thongtin?.sang.pla.buoi == 'sang'">
              <b-button :id= "index + 'plasang'" v-b-modal.modal-tall class='btnfixfullcell' squared :variant="hangletiec(items.thongtin?.sang.pla)" @click="handleClick(items)"> {{ items.thongtin?.sang.pla.soban }} </b-button>
              <b-tooltip :target="index + 'plasang'" :variant="hangdletooltip(items)">{{ items.thongtin?.sang.pla }}</b-tooltip>
            </div>
            <div class='fixcell' v-else>
                <b-button variant="outline-light" class='btnfixfullcell' >+</b-button>
            </div>
          </td>
        </tr>
        <!-- Chiều -->
        
        <tr>
          <td class="mautoi"><b>Sảnh</b></td>
          <td class="text-center mautoi" :colspan="xulycolspan()" >
           <strong>Chiều</strong>
          </td>
        </tr>
        <tr>
          <td>
            SAPPHIRE
          </td>
          <td v-for="items, index in thangngay" :key="index">
            <div class='fixcell' v-if="items.thongtin?.chieu.sp?.sanh=='sp' && items.thongtin?.chieu.sp.soban && items.thongtin?.chieu.sp.buoi == 'chieu'">
              <b-button :id= "index + 'spchieu'" v-b-modal.modal-tall class='btnfixfullcell' squared :variant="hangletiec(items.thongtin?.chieu.sp)" @click="handleClick(items)"> {{ items.thongtin?.chieu.sp.soban }} </b-button>
              <b-tooltip :target="index + 'spchieu'" :variant="hangdletooltip(items)">{{ items.thongtin?.chieu.sp }}</b-tooltip>
            </div>
            <div class='fixcell' v-else>
                <b-button variant="outline-light" class='btnfixfullcell' >+</b-button>
            </div>
          </td>
        </tr>
        <tr>
          <td >
           RUBY 1
          </td>
          <td v-for="items, index in thangngay" :key="index" >
            <div class='fixcell' v-if="items.thongtin?.chieu.rb1?.sanh=='rb1' && items.thongtin?.chieu.rb1.soban && items.thongtin?.chieu.rb1.buoi == 'chieu'">
              <b-button :id= "index + 'rb1chieu'" v-b-modal.modal-tall class='btnfixfullcell' squared :variant="hangletiec(items.thongtin?.chieu.rb1)" @click="handleClick(items)"> {{ items.thongtin?.chieu.rb1.soban }} </b-button>
              <b-tooltip :target="index + 'rb1chieu'" :variant="hangdletooltip(items)">{{ items.thongtin?.chieu.rb1 }}</b-tooltip>
            </div>
            <div class='fixcell' v-else>
                <b-button variant="outline-light" class='btnfixfullcell' >+</b-button>
            </div>
          </td>
        </tr>
        <tr>
          <td >
           RUBY 2
          </td>
          <td v-for="items, index in thangngay" :key="index">
            <div class='fixcell' v-if="items.thongtin?.chieu.rb2?.sanh=='rb2' && items.thongtin?.chieu.rb2.soban && items.thongtin?.chieu.rb2.buoi == 'chieu'">
              <b-button :id= "index + 'rb2chieu'" v-b-modal.modal-tall class='btnfixfullcell' squared :variant="hangletiec(items.thongtin?.chieu.rb2)" @click="handleClick(items)"> {{ items.thongtin?.chieu.rb2.soban }} </b-button>
              <b-tooltip :target="index + 'rb2chieu'" :variant="hangdletooltip(items)">{{ items.thongtin?.chieu.rb2 }}</b-tooltip>
            </div>
            <div class='fixcell' v-else>
                <b-button variant="outline-light" class='btnfixfullcell' >+</b-button>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            DIAMOND 1
          </td>
          <td v-for="items, index in thangngay" :key="index">
           <div class='fixcell' v-if="items.thongtin?.chieu.dp1?.sanh=='dp1' && items.thongtin?.chieu.dp1.soban && items.thongtin?.chieu.dp1.buoi == 'chieu'">
              <b-button :id= "index + 'dp1chieu'" v-b-modal.modal-tall class='btnfixfullcell' squared :variant="hangletiec(items.thongtin?.chieu.dp1)" @click="handleClick(items)"> {{ items.thongtin?.chieu.dp1.soban }} </b-button>
              <b-tooltip :target="index + 'dp1chieu'" :variant="hangdletooltip(items)">{{ items.thongtin?.chieu.dp1 }}</b-tooltip>
            </div>
            <div class='fixcell' v-else>
                <b-button variant="outline-light" class='btnfixfullcell' >+</b-button>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            DIAMOND 2
          </td>
          <td v-for="items, index in thangngay" :key="index">
            <div class='fixcell' v-if="items.thongtin?.chieu.dp2?.sanh=='dp2' && items.thongtin?.chieu.dp2.soban && items.thongtin?.chieu.dp2.buoi == 'chieu'">
              <b-button :id= "index + 'dp2chieu'" v-b-modal.modal-tall class='btnfixfullcell' squared :variant="hangletiec(items.thongtin?.chieu.dp2)" @click="handleClick(items)"> {{ items.thongtin?.chieu.dp2.soban }} </b-button>
              <b-tooltip :target="index + 'dp2chieu'" :variant="hangdletooltip(items)">{{ items.thongtin?.chieu.dp2 }}</b-tooltip>
            </div>
            <div class='fixcell' v-else>
                <b-button variant="outline-light" class='btnfixfullcell' >+</b-button>
            </div>
          </td>
        </tr>
        <tr>
          <td>
             PLATINUM
          </td>
          <td v-for="items, index in thangngay" :key="index">
            <div class='fixcell' v-if="items.thongtin?.chieu.pla?.sanh=='pla' && items.thongtin?.chieu.pla.soban && items.thongtin?.chieu.pla.buoi == 'chieu'">
              <b-button :id= "index + 'plachieu'" v-b-modal.modal-tall class='btnfixfullcell' squared :variant="hangletiec(items.thongtin?.chieu.pla)" @click="handleClick(items)"> {{ items.thongtin?.chieu.pla.soban }} </b-button>
              <b-tooltip :target="index + 'plachieu'" :variant="hangdletooltip(items)">{{ items.thongtin?.chieu.pla }}</b-tooltip>
            </div>
            <div class='fixcell' v-else>
                <b-button variant="outline-light" class='btnfixfullcell' >+</b-button>
            </div>
          </td>
        </tr>
        <tr>
          <td class='blue'>
             OUTSIDE
          </td>
          <!-- <span v-for="items, index in thangngay" :key="index"> 
            <td :class='hangletiec(items.loaitiec)' v-if="items?.sanh=='out'">
                {{ items.soban }}
            </td>
          </span> -->
          <td v-for="items, index in thangngay" :key="index" >
            <!-- <b-button v-b-modal.modal-tall :variant="hangdletooltip(items)" :class='hangletiec(items)' v-if="items?.sanh=='out'" >{{ items.soban }}</b-button> -->
            <div class='fixcell' v-if="items.thongtin?.out?.sanh=='out' && items.thongtin?.out.soban">
              <b-button :id= "index + 'out'" v-b-modal.modal-tall  class='btnfixfullcell' squared :variant="hangletiec(items.thongtin?.out)" @click="handleClick(items)" > {{ items.thongtin?.out.soban }} </b-button>
              <b-tooltip :target="index + 'out'" :variant="hangdletooltip(items)">{{ items.thongtin?.out }}</b-tooltip>
            </div>
            <div class='fixcell' v-else>
                <b-button variant="outline-light" class='btnfixfullcell' >+</b-button>
            </div>
          </td>
        </tr>
        <!-- <tr> 
          <td class="mautoi"><b>Thứ</b></td>
          <td v-for="items, index in thangngay" :key="index" :class="getDayClass(items.thu)">
            {{ items.thu}}
          </td>
        </tr>
        <tr>
          <td>DL</td>
          <td v-for="items, index in thangngay" :key="index">
            {{ items.ngay}}
  
          </td>
        </tr>
        <tr>
          <td>AL</td>
          <td v-for="items, index in thangngay" :key="index">
            
          </td>
        </tr> -->
      </table>
      </b-container>
    </client-only>
    <!-- <b-modal id="modal-tall" title="Overflowing Content">
      <p class="my-4">
        {{ itemthongtin }}
      </p>
    </b-modal> -->
    </div>
  </template>
  
  <script>
  
  export default {
    layout: 'areaAdmin',
    data() {
      return {
        thangngay: null,
        fields: [] ,
        thang: null,
        nam: null  ,
        itemthongtin: null
      }
    },
     watch: {
       thang: {
         handlergetAPI() {
           this.fetchLunarCalendar();
         },
         deep: true
      },
       nam: {
        handlergetAPI() {
          this.fetchLunarCalendar();
        },
        deep: true
      }
     },
    async mounted () {
      
    },
    async asyncData({query, $axios}) {
      let thang = query.thang
      let nam = query.nam
      let promisehopdong =  $axios.$get(process.env.BACKEND_URL + "/hopdong/lichthang?thang=" + thang + '&nam='+ nam)
      let resultPromise = await Promise.all([
        promisehopdong
      ])
      return({
        thangngay: resultPromise[0],
        thang: thang,
        nam: nam,
        
      })
    },
    methods: {
      async fetchLunarCalendar(){
        let result = await this.$axios.$get(process.env.BACKEND_URL + "/hopdong/lichthang?thang=" + this.thang + '&nam='+ this.nam)
        return({
          thangngay: result
        })
      },
      getDayClass(items) {
        return (items === 'T7' || items === 'CN') ? 'red' : '';
      },
      xulycolspan(){
        // console.log(this.tongsongay)
        return this.thangngay.length 
      },
      hangletiec(item){
        if(item.loaitiec == 'cuoi' && item.soban){
          // console.log(item)
          return "danger"
        }else if(item.loaitiec == 'out' && item.soban){
          return "primary"
        }
      },
      handleClick(items){
        this.itemthongtin = items.thongtin
      },
      hangdletooltip(items){
        return "primary"
      },
      handlerowspan(items){
        if(items.thongtin?.sang.grb?.sanh=='grb' && items.thongtin?.sang.grb.soban){
            return 2
        }
        return 1
      },
      
    }
  }
  </script>
  
  <style scoped>
  .btnfixfullcell{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
  .fixcell {
    /* background-color: crimson; */
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    color: ivory;
  }
  body {
   font-size:12px
    
  }
  .btn{
    font-size: 12px;
    padding: 0
  }
  .red {
   
    color: rgb(235, 10, 10);
  }
  table {
    width: 100%;
    border-collapse: collapse;
  }
  
  
  td {
    border: 1px solid #0000002d;
    padding: 3px;
    text-align: center;
    position: relative;
  }
  
  
  .mausang{
    background-color: #faf5df;
  }
  .mautoi{
    background-color: #cef4f798;
  }
  .mauhead{
    background-color: #7a7cf098;
  }
  .mauduong{
    background-color: #f07aab4d;
  }
  .mauam{
    background-color: #7ae2f056;
  }
  .blue{
    background-color: rgba(10, 10, 240, 0.349);
  }
  </style>