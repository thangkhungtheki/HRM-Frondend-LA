<template>
  <div>
    <form @submit.prevent="uploadFile1">
      <input type="file" @change="handleFileChange" />
      <!-- <button type="submit">Upload</button> -->
      <b-button variant="info" type="submit">Import DS Nghỉ Phép</b-button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      selectedFile1: null,
    };
  },
  methods: {
    handleFileChange(event) {
      this.selectedFile1 = event.target.files[0];
    },
    async uploadFile1() {
      if (!this.selectedFile1) {
        alert('Vui lòng chọn file!');
        return;
      }

      const formData = new FormData();
      formData.append('file', this.selectedFile1);

      try {
        const response = await axios.post(process.env.BACKEND_URL + "/hrm/uploaddanhsachnghi", formData, {
         
        });
        if(response.status == 200){
            this.showNotification()
            this.selectedFile1 = null
        }else{
            this.showNotificationfail()
            console.log('Upload thất bại');
        }
        // console.log('Upload thành công:', response.data);
        

      } catch (error) {
        console.error('Lỗi khi upload file:', error);
      }
    },
    showNotification () {
        this.$notify({
            type: "success",
            message: "upload ds nghỉ phép thành công !!!",
            hideIcon: true,
            bottom: true,
            right: true,
            closeDelay: 5000
        })
    },
    showNotificationfail () {
        this.$notify({
            type: "error",
            message: "upload ds nghỉ phép thất bại !!!",
            hideIcon: true,
            bottom: true,
            right: true,
            closeDelay: 5000
        })
    },
  },
};
</script>
