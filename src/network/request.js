import axios from "axios"

export function request(config){
    //1.创建axios实例
    const instance = axios.create({
        baseURL:"http://123.207.32.32:8000",
        timeout:5000
    })

     //2.axios的拦截器
    
    // instance.interceptors.request.use(config=>{
     //    return config
    // },err=>{

    // })

    // instance.interceptors.response.use(res=>{
     //   return res.data
    // },err=>{
     //    console.log(err);
    //发送真正的网络请求
    
        
    //})
    return instance(config)
      
}

export function request2(config){
    //1.创建axios实例
    const instance2 = axios.create({
        baseURL:"http://152.136.185.210:8000/api/n3",
        timeout:5000
    })

     //2.axios的拦截器
    
    // instance.interceptors.request.use(config=>{
     //    return config
    // },err=>{

    // })

    // instance.interceptors.response.use(res=>{
     //   return res.data
    // },err=>{
     //    console.log(err);
    //发送真正的网络请求
    
        
    //})
    return instance2(config)
      
}