<template>
<div>
  <div v-if="loading" class="loading-page">
    <p>LOADING ...</p>
  </div>
</div>
</template>

<script>
  export default {
    layout: "areaAdmin",
    // data: () => ({
    //   loading: true
    // }),
    methods: {
      start() {
        this.loading = true
      },
      finish() {
        this.loading = false
      }
    }
  }
  
</script>

<style>
    .loading-page {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.8);
    text-align: center;
    padding-top: 200px;
    font-size: 30px;
    font-family: sans-serif;
    
  }
</style>