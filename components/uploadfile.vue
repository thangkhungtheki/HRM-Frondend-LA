<template>
  <div>
    <form @submit.prevent="uploadFile">
      <input type="file" @change="handleFileChange" />
      <!-- <button type="submit">Upload</button> -->
      <b-button variant="success" type="submit">Import bảng công</b-button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      selectedFile: null,
    };
  },
  methods: {
    handleFileChange(event) {
      this.selectedFile = event.target.files[0];
    },
    async uploadFile() {
      if (!this.selectedFile) {
        alert('Vui lòng chọn file!');
        return;
      }

      const formData = new FormData();
      formData.append('file', this.selectedFile);

      try {
        const response = await axios.post(process.env.BACKEND_URL + "/hrm/uploadchamcong", formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        if(response.status == 200){
            this.showNotification()
            this.selectedFile = null
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
            message: "upload thành công !!!",
            hideIcon: true,
            bottom: true,
            right: true,
            closeDelay: 5000
        })
    },
    showNotificationfail () {
        this.$notify({
            type: "error",
            message: "upload thất bại !!!",
            hideIcon: true,
            bottom: true,
            right: true,
            closeDelay: 5000
        })
    },
  },
};
</script>
