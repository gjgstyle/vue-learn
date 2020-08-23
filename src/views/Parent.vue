<template>
    <div>
       <h1>Parent</h1>
       <h3>{{msg}}</h3>
       <m-child msg="from parent message" @showmsg="showmsg"></m-child>
    </div>
</template>

<script>
   import MChild from './Child';
    export default {
        data() {
            return {
                msg: ''
            }
        },
        components: {
            MChild,
        },
        methods: {
            showmsg(val) {
                this.msg = val;
            }
        },
        
    }
</script>

<style scoped>

</style>