<template>
  <div>
    <b-container>
      <input v-model="sotap" type="text" placeholder="Số tập" />
      <input v-model="idfilm" type="text" placeholder="ID Film" />
      <button @click="handleButtonClick">nhấn vào Play</button>
    </b-container>
    <b-container class="container">
      <b-container class="jwcontainer">
        <jwplayer :options="jwoptions" :videoSrc="yourVideoSource" :logo="yourLogoPath"></jwplayer>
      </b-container>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book. It has survived not only five centuries, but
      also the leap into electronic typesetting, remaining essentially
      unchanged. It was popularised in the 1960s with the release of Letraset
      sheets containing Lorem Ipsum passages, and more recently with desktop
      publishing software like Aldus PageMaker including versions of Lorem
      Ipsum.
    </b-container>
  </div>
</template>

<script>
  import jwplayer from "~/components/jwplayer.vue";
  export default {
    // servermiddleware: ['~/server/fetch_m3u8.js'],
    layout: "areaAdmin",
    
    // cái này chạy trước plugin ở nuxt.config.js
    // middleware: [ 'checkcontext', 'auth'],
    data() {
      return {
        sotap: "94364",
        idfilm: "4931",
        yourVideoSource: "pngs/output.m3u8",
        yourLogoPath: "logo.png",
        jwoptions: {
          //file: 'pngs/output.m3u8',
          //heigh: 400,
          //width: 700,
          mute: true,
        },
      };
    },
    components: {
      jwplayer,
    },
    methods: {
      async fetchM3U8URL(url) {
        try {
          const response = await this.$axios.get(url, {
            params: {
              idunique: this.sotap,
              idfilm: this.idfilm,
            },
          });
          const m3u8URL = response.data;
          //console.log(url)

          return m3u8URL;
        } catch (error) {
          console.error("Lỗi khi gọi API:", error);
          return null;
        }
      },
      async changeVideoSource(url) {
        const m3u8 = await this.fetchM3U8URL(url);
        if (m3u8) {
          console.log("có file m3u8 nhé dm");
          //console.log(this.filem3u8)
          this.yourVideoSource = url + "/file.m3u8";
          this.jwoptions = {
            //file: "pngs/test.m3u8",
            //heigh: 360,
            //width: 640,
            mute: true,
          };

          //alert('Video đã thay đổi thành: ')
        } else {
          //alert('Không thể thay đổi video.');
        }
      },
      async handleButtonClick() {
        // Xử lý sự kiện khi nút được nhấn

        //alert("Số tập: " + this.sotap + " & idfilm: " + this.idfilm);
        // let url = '//' + '127.0.0.1:4000' + '/g?idunique=' + this.sotap + '&idfilm=' + this.idfilm
        // await this.changeVideoSource(url)

        // let m3u8 = await this.$axios.get('http://127.0.0.1:3000/film/api')
        await this.changeVideoSource("/film/api");
        this.jwoptions = {
          //file: "pngs/test.m3u8",
          //heigh: 360,
          //width: 640,
          mute: true,
        };

        //alert('Video đã thay đổi thành: ')
      },
    },
  };
</script>
<style>
  .container {
    max-width: 1200px;
  }

  .jwcontainer {
    max-width: 786px;
    background-color: black;
    margin: 0%;
    margin-top: 50px;
  }
</style>