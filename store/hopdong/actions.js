export default {
    async actListHopdong({commit, $axios}){
        const data = await $axios.get(
          process.env.BACKEND_URL + "/hopdong/theodoihopdong"
        );
        commit('Lishopdong', data)
    }
}