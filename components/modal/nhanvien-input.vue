<template>
  <div>
    <!-- <b-button v-b-modal.modal-prevent-closing>Open Modal</b-button> -->

    <!-- <div class="mt-3" >
      Submitted Names:
      <div v-if="submittedNames.length === 0">--</div>
      <ul v-else class="mb-0 pl-3">
        <li v-for="name in submittedNames" :key="name">{{ name }}</li>
      </ul>
    </div> -->

    <b-modal id="modal-input-nhanvien" ref="modal" title="Submit Your Name" @show="resetModal" @hidden="resetModal" @ok="handleOk">
      <form ref="form" @submit.stop.prevent="handleSubmit">

        <b-form-group label="Name" label-for="name-input" invalid-feedback="Name is required" >
          <b-form-input id="name-input" v-model="name" :state="nameState" required></b-form-input>
        </b-form-group>

        <b-form-group label="Age" invalid-feedback="Age is required">
          <b-form-input id="age-input" v-model="age"  required></b-form-input>
        </b-form-group>
      </form>
    </b-modal>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        name: '',
        nameState: null,
        // submittedNames: [],
        age: '',
        // ageState: null
      }
    },
    // computed: {
    //   nameState() {
    //     return this.name.length > 2 ? true : false
    //   },
    //   ageState(){
    //     return this.age.length > 2 ? true : false
    //   }
    // },
    methods: {
      checkFormValidity() {
        const valid = this.$refs.form.checkValidity()
        this.nameState = valid
        // this.ageState = valid
        console.log('>>>checkFormValidity: ',valid)
        return valid
      },
      resetModal() {
        this.name = ''
        this.age = '' 
        this.nameState = null
        // this.ageState = null
        
      },
      handleOk(bvModalEvent) {
        // Prevent modal from closing
        bvModalEvent.preventDefault()
        // Trigger submit handler
        this.handleSubmit()
        console.log('nhan nut ok')
      },
      handleSubmit() {
        // Exit when the form isn't valid
        if (!this.checkFormValidity()) {
          return
        }
        // Push the name to submitted names
        // this.submittedNames.push(this.name)
        // Hide the modal manually
        console.log('submit name: ', this.name)
        console.log('submit age: ', this.age)
        this.$nextTick(() => {
          this.$bvModal.hide('modal-prevent-closing')
        })
      }
    }
  }
</script>