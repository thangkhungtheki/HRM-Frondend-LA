<template>
  <div>
    <h2>Quản Lý Hợp Đồng</h2>
    <hr />
    <b-button variant="success" @click="handlethemhopdong">Thêm Hợp Đồng</b-button>
    <hr />
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
            <b-button v-b-modal.modal-input-hopdong variant="info" size="sm" @click="handlesua(row.item)">Sửa</b-button>
            <b-button class="floatleft" variant="danger" size="sm" @click="handlexoa">Xoá</b-button>
          </ul>
        </b-card>
      </template>
    </b-table>
    <!-- Info modal -->
    <!-- <b-modal :id="infoModal.id" :title="infoModal.title" @hide="resetInfoModal">
        </b-modal> -->

    <div>
      <b-col sm="7" md="6" class="my-1">
        <b-pagination v-model="currentPage" :total-rows="totalRows" :per-page="perPage" align="fill" size="sm" class="my-0"></b-pagination>
      </b-col>
    </div>
    <modal_hopdong :datatitem="datamodal" :title="modaltitle"> </modal_hopdong>
  </div>
</template>
<script>
  import modal_hopdong from "@/components/modal/hopdonginput.vue";
  import {
    EventBus
  } from "~/plugins/eventbus";
  export default {
    layout: "areaAdmin",
    components: {
      modal_hopdong,
    },
    data() {
      return {
        // items: [

        // ],
        fields: [
          // 'index',
          {
            key: "tenhopdong",
            label: "Tên hợp đồng",
            sortable: true,
          },
          {
            key: "ngaybatdau",
            label: "Ngày BĐ",
            sortable: true,
          },
          {
            key: "ngayketthuc",
            label: "Ngày KThuc",
            sortable: true,
          },
          // {
          // key: "ghichu",
          // label: "Ghi chú",
          // sortable: true,
          // },
          {
            key: "songayhethan",
            label: "Ngày còn lại",
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
          id: "",
          tenhopdong: "",
          ngaybatdau: "",
          ngayketthuc: "",
          ghichu: "",
        },
        modaltitle: "",
      };
    },
    // mounted() {
    //   // Set the initial number of items
    //   this.totalRows = this.items.length
    // },
    mounted() {
      this.listenForDataSaved();
    },

    // async asyncData({$axios}) {
    //   try {
    //     const data = await $axios.get(
    //       process.env.BACKEND_URL + "/hopdong/theodoihopdong"
    //     );
    //     return {
    //       items: data.data ? data.data : [],
    //       totalRows: data.data.length || 1,
    //     };
    //     //--- sử dụng promise ---
    //   } catch {
    //     return {
    //       items: [],
    //       totalRows: 1,
    //     };
    //   }
    // },
    
    asyncData({store}){

    },

    methods: {
      handlethemhopdong() {
        alert("Click nút thêm");
      },
      handlesua(item) {
        // console.log(item)
        // alert('Click nút sửa')
        this.modaltitle = "Modal - Sửa Hợp Đồng";
        this.datamodal = {
          id: item._id,
          tenhopdong: item.tenhopdong,
          ngaybatdau: item.ngaybatdau,
          ngayketthuc: item.ngayketthuc,
          ghichu: item.ghichu,
        };
      },
      handlexoa() {
        alert("Clich Xoá");
      },
      resetInfoModal() {},
      async fetchData() {
        try {
          const data = await this.$axios.get(
            process.env.BACKEND_URL + "/hopdong/theodoihopdong"
          );
          // console.log(data.data)
          this.items = data.data;
          this.totalRows = data.data.length || 1;
        } catch {}
      },
      listenForDataSaved() {
        EventBus.$once("data-saved", async () => {
          await this.fetchData();
          this.listenForDataSaved(); // Set up listener again for future events
        });
      },
    },
  };
</script>

<style lang="scss" scoped>
</style>