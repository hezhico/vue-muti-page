<template>
  <div>login</div>
</template>
<script>
export default {
  data(){
    return {

    }
  },
  created() {
    this.$nextTick(()=>{
      this.login();
    })
  },
  methods: {
    login() {
      let params = {
        url: config.base + "/login",
      }
      this.$http(params).then((res)=>{
        console.log(res)
        if(res.code=== '00') {
          alert('succ' + res.msg)
        }
      })
    }
  },
}
</script>
