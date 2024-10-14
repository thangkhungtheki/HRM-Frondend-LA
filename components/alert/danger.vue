<template>
    <div>
        <b-alert
            :show="dismissCountDown"
            dismissible
            fade
            :variant="variant"
            @dismiss-count-down="countDownChanged"
        >
      {{ message }} Thông báo sẽ tắt trong {{ dismissCountDown }} giây...
        </b-alert>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                
                dismissCountDown: 0,
                
            }
        },
        props: {
            message: {
                type: String,
                default: 'This is an alert message.'
            },
            dismissSecs: {
                type: Number,
                default: 5
            },
            variant: {
                type: String,
                default: 'warning'
            }
        },
        methods: {
            countDownChanged(dismissCountDown) {
                this.dismissCountDown = dismissCountDown
            },
            showAlert() {
                this.dismissCountDown = this.dismissSecs
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
