<template>
    <div>
      <h2>Child</h2>
      <h5>{{msg}}</h5>
      <h5>{{childmsg}}</h5>
      <button @click="clickmsg">submit</button>
    </div>
</template>

<script>
   import bus from '../util/bus'
    export default {
        data() {
    return {
      childmsg: '',
    }
  },
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
          mounted () {
           bus.$on('msg',(val) =>{
            this.childmsg = val;
                  });
          },
    }
</script>

<style scoped>

</style>