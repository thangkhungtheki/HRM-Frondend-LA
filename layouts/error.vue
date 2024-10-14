<template>
    <div>
        <br />
        <hr />
        <center>
            <h1 v-if="error.statusCode === 404">hum,,, có gì đó sai sai !!! đề nghị trở về Home page</h1>
            <h1 v-else>hum !!! Có vẻ như có lỗi gì đó</h1>
            <a href="/home"><h1><b>Home page</b></h1></a>
        </center>
        <hr />
    </div>
  </template>
  
  <script>
    export default {
      props: ['error'],
      layout: 'error' // you can set a custom layout for the error page
    }
  </script>