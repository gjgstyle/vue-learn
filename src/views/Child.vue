<template>
    <div>
      <h2>Child</h2>
      <h5>{{msg}}</h5>
      <button @click="clickmsg">submit</button>
    </div>
</template>

<script>
    export default {
        props:{
            msg:{
              type:String,
              default:''
            } ,
        },
        methods: {
            clickmsg() {
                this.$emit('showmsg','I am form china');
            },
        },
    }
</script>

<style scoped>

</style>