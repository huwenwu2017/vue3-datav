import axios from "axios"

const requests = axios.create({
    baseURL:"" //这里放接口请求域名
}) 



requests.interceptors.request.use(config=>{ //我这里写请拦截器 给每个请求加上请求头
    return config
})


requests.interceptors.response.use(config=>{ //这里我写了一个响应拦截器，这里对所有接口返回值是code的在控制台上打印响应成功
    if(config.data.code == 200){
        return config
    }
    return config
})
export default requests  //将我们二次封装处理好的axios默认导出