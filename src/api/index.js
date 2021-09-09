//简单封装后
import axios from "axios";
import { Loading,Message } from "element-ui";
import 'nprogress/nprogress.css'
import nProgress from "nprogress";
import qs from "qs"
import Vue from "vue";

function ajax(url,method,data={}) {

    // axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
    return new Promise((resolve,reject)=>{
        axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/';
        axios.defaults.timeout = 5000;
        
        axios.defaults.headers.common['Authorization'] = window.sessionStorage.getItem('token') //请求头
        var Loadings;
        // 请求拦截
        axios.interceptors.request.use(config => {
            // config.headers.Authorization = window.sessionStorage.getItem('token')
            Loadings = Loading.service()
            nProgress.start()
            // if (config.method.toLowerCase() == 'post') {
            //     config.data = qs.stringify(config.data)
            // }
            return config;
        }, error => {
            return Promise.reject(error)
        })
        // 返回的参数
        axios.interceptors.response.use(config => {
            Loadings.close();
            nProgress.done()
            if(config.data.meta.status == 400){
                Message.error(config.data.meta.msg)
            }else if(config.data.meta.status == 200){
                Message.success(config.data.meta.msg)
            }
            return config.data;
        }, error => {
            Loadings.close();
            return Promise.reject(error)
        });

        if (method !== 'get') {
            /**
             * axios post方法
             * 
             */
            axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
            axios({
                url,
                method,
                data: data,
            }).then(res => {
                resolve(res)
            }).catch(() => { });
        } else if (method == 'get') {
            /**
             * axios get方法
             * 
             */

            axios({
                url,
                params: data,
            }).then(res => {
                // successFn(res);
                resolve(res)
            }).catch(() => { });
        }

    })
   

}
function errorHandler(errMsg = 'Network Error') {
    // 关闭loading，清空ajaxList，关闭弹框，弹出错误提示
    Loadings.close()
  
    subAjaxArr = []
    Vue.prototype.$message.closeAll()
    Vue.prototype.$message.error(errMsg)
  }
export default ajax