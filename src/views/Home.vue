<template>
    <div>
      <h3>this is home</h3>
      <h3>{{$route.params.id}}</h3>
      <router-view></router-view>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>