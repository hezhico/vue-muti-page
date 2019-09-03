import axios from 'axios'



export default {
    install(Vue) {
        
        /**
         * 全局ajax请求
         * @param {Object} params 配置参数
         */
        Vue.prototype.$http = function (params) {
            return new Promise((resolve, reject) => {
              // axios.defaults.baseURL= 'https://www.easy-mock.com/mock/5cd517e8e9dd794d9590d12d/example_copy_copy',
              // axios.defaults.method = 'POST'
              params.method = params.method ? params.method : 'POST' // 默认请求方式为 POST
                axios(params).then((res) => {
                    // 正常请求 统一的全局处理
                    if(res.data.code === '99') {
                      // 登录态失效
                      resolve({
                          code: '99',
                          msg: '登录态失效'
                      })
                    }else {
                      resolve(res.data)
                    }
                }).catch((error) => {
                    // 统一处理网络失败的请求
                    resolve({
                        code: '9999',
                        msg: '网络异常，请稍后重试'
                    })
                })
            })
        }
    }
}