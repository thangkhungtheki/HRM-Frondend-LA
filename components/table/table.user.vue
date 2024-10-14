<template>
  <div>
    <b-table hover :items="items" :fields="fields"></b-table>
  </div>
</template>

<script>
export default {
    name: "tableusercomponent",
    data() {
        return {
            items: null,
            fields: null
        }
    },
}
</script>

<style>

</style>