import axios from 'axios'
import {
  Card,
  WingBlank,
  Button,
  WhiteSpace
} from 'antd-mobile';
export default class Axios {

    static ajax(options){
        // let loading;
        // if (options.data && options.data.isShowLoading !== false){
        //     loading = document.getElementById('ajaxLoading');
        //     loading.style.display = 'block';
        // }
        console.log(options)
        let baseApi = 'http://h5dev.test/huhuapi';
        return new Promise((resolve,reject)=>{
            axios({
                url:options.url,
                method:  'post',
                baseURL:baseApi,
                timeout:5000,
                params: (options.data) || ''
            }).then((response)=>{
                // if (options.data && options.data.isShowLoading !== false) {
                //     loading = document.getElementById('ajaxLoading');
                //     loading.style.display = 'none';
                // }
                if (response.status == '200'){
                    let res = response.data;
                    resolve(res);
                    // if (res.code == '0'){

                    // }else{
                    //     // Modal.info({
                    //     //     title:"提示",
                    //     //     content:res.msg
                    //     // })
                    // }
                } else{
                    reject(response.data);
                }
            })
        });
    }
}