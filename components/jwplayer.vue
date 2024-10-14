<template>
  <div>
    <div ref="player"></div>
    
  </div>
</template>
  
<script>
export default {
  
  props: {
    options: {
      type: Object, 
      default() {
        return {};
      },
    },
    videoSrc: {
      type: String,
      required: true,
      default() {
        return {};
      },
    },
    logo: {
      type: String,
    },

  },
  data() {
    return {
      player: null
    }
  },
  mounted() {
    const playerElement = this.$refs.player;

    // Khởi tạo trình phát JWPlayer
    this.player = jwplayer(playerElement);
    const playerOptions = {
      file: this.videoSrc,
      heigh: '100%' ,
      width: '100%' ,
      logo: {
        file: this.logo,
        hide: false, // Để hiển thị logo
        position: 'bottom-right', // Điều chỉnh vị trí của logo
      },
      ... this.options,

    }
    // Thiết lập cấu hình cho trình phát video
    // player.setup({
    //   file: "pngs/test.m3u8",
    //   // Các tùy chọn khác của JWPlayer
    //   heigh: 360,
    //   width: 640
    // });
    this.player.setup(playerOptions)
  },
  watch: {
    // options() {
    //   const playerOptions = {
    //   file: this.videoSrc,
    //   logo: {
    //     file: this.logo,
    //     hide: false, // Để hiển thị logo
    //     position: 'bottom-right', // Điều chỉnh vị trí của logo
    //   },
    //   ... this.options,

    // }
    //   this.player.setup(playerOptions)
    // }
    videoSrc() {
      const playerOptions = {
        file: this.videoSrc,
        logo: {
          file: this.logo,
          hide: false, // Để hiển thị logo
          position: 'bottom-right', // Điều chỉnh vị trí của logo
        },
        ... this.options,

      }
      this.player.setup(playerOptions)
    }
  }

}
</script>