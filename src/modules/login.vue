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
    async login() {
      let params1 = {
        url: config.base + "/login",
      }

      let params2 = {
        url: config.base + "/getToekn",
      }
      
      let res1 = await this.$http(params1);
      let res2 = await this.$http(params2);
      
      Promise.all([res1, res2]).then((result) => {
        console.log(result)
        //  同一个页面 多个请求， 全局loading 取消的策略， 利用Promise.all
      }).catch((error) => {
        console.log(error)
      })
    }
  },
}
</script>
