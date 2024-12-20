<template>
  <div>
    <hr>
    <h2>Nhân Viên</h2>
    <hr>
    <b-button v-b-modal.modal-nhanvien-hopdong variant="success" @click="themnhanvien">Thêm Nhân Viên</b-button>
    <hr>
    <b-table striped hover :fields="fields" :items="items" :current-page="currentPage" :per-page="perPage">
      <!-- <template #cell(index)="data">
                {{ data.index + 1 }}
            </template> -->
      <template #cell(actions)="row">
        <!-- <b-button @click="info(row.item, row.index, $event.target)" class="mr-1">
                Info modal
                </b-button> -->
        <b-button size="sm" @click="row.toggleDetails">
          {{ row.detailsShowing ? "Ẩn" : "Hiện" }} Chi tiết
        </b-button>
      </template>
      <template #row-details="row">
        <b-card>
          <ul>
            <li v-for="(value, key) in row.item" :key="key">
              {{ key }}:
              {{ value }}
            </li>
          </ul>
          <ul>
            <b-button v-b-modal.modal-nhanvien-hopdong variant="info" size="sm" @click="handlesua(row.item)">Sửa</b-button>
            <b-button class="floatleft" variant="danger" size="sm" @click="handlexoa(row.item)">Xoá</b-button>
          </ul>
        </b-card>
      </template>
    </b-table>
    <div>
      <b-col sm="7" md="6" class="my-1">
        <b-pagination v-model="currentPage" :total-rows="totalRows" :per-page="perPage" align="fill" size="sm" class="my-0"></b-pagination>
      </b-col>
    </div>
    <nhanvieninput :datatitem="datamodal" :title="modaltitle" :isDisabled="isDisabled"> </nhanvieninput>
    <client-only>
    
    </client-only>
  </div>
   
</template>

<script>
import nhanvieninput from "@/components/modal/modal-nhanvien-hopdong.vue";

export default {
    components: {
      nhanvieninput,
      
    },
    layout: "layout-hrm",
    async asyncData({$axios}) {
      let promisenhanvien =  await $axios.$get(process.env.BACKEND_URL + "/hrm/hr/laydsnhanvien")
    //   let resultPromise = await Promise.all([
    //     promisenhanvien
    //   ])
        // console.log(promisenhanvien)
      return({
        items: promisenhanvien
      })
    },
    methods: {
        async handlexoa(item) {
            let promisenhanvien =  await this.$axios.$post(process.env.BACKEND_URL + "/hrm/hr/xoanhanvien",{
                id: item._id
            })
            this.showNotification()
            this.fetchdata()
        },
        async fetchdata(){
            let promisenhanvien =  await this.$axios.$get(process.env.BACKEND_URL + "/hrm/hr/laydsnhanvien")
            this.items = promisenhanvien
        },
        showNotification () {
          this.$notify({
              type: "success",
              message: "Xóa dữ liệu thành công !!!",
              hideIcon: true,
              bottom: true,
              right: true,
              closeDelay: 5000
          })
        },
        handlesua(item){
          this.checksua = item._id
          this.datamodal = item
          this.isDisabled = true
        },
        themnhanvien(){
          this.datamodal = {}
          this.isDisabled = false
        }
    },
    data() {
      return {
        checksua: '',
        items: [
        ],
        fields: [
          // 'index',
          {
            key: "tennv",
            label: "Tên NV",
            sortable: true,
          },
          {
            key: "tenphongban",
            label: "Phòng Ban",
            sortable: true,
          },
          {
            key: "ngayvaocty",
            label: "Ngày vào Cty",
            sortable: true,
          },
          // {
          // key: "ghichu",
          // label: "Ghi chú",
          // sortable: true,
          // },
          {
            key: "congchuan",
            label: "Công Chuẩn",
            sortable: true,
          },
          {
            key: "nganhhang",
            label: "Ngành Hàng",
            sortable: true,
          },
          "actions",
        ],
        totalRows: 1,
        currentPage: 1,
        perPage: 50,
        infoModal: {
          id: "info-modal",
          title: "",
          content: "",
        },
        // showmodal: false,
        datamodal: {
          manv: "",
          tennv: "",
          tenphongban: "",
          ngayvaocty: "",
          congchuan: "",
          nganhhang:''
        },
        modaltitle: "",
        isDisabled: null
      };
    },

}
</script>

<style>

</style>