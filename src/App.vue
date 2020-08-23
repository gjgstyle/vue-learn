<template>
  <div id="app">
    this is app
   <!--<button @click="passmsg"></button>
   <m-parent></m-parent>-->
    <router-view></router-view>
    <router-link to="/home">home</router-link>
    <button @click="tohome">home1</button>
  </div>
</template>

<style>
</style>

<script>
import MParent from './views/Parent';
import bus from './util/bus'
export default {
  components: {
    MParent,
  },
  methods: {
    passmsg() {
      bus.$emit('msg','i am from App');
    },
    tohome(){
      //this.$router.push({path:'/home',query:{name:'JACK'}});
      this.$router.push({name:'home',params:{id:3}});
     }
  }
}
</script>
