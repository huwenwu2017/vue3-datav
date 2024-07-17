**效果图**
<p>
    <img src="https://img.picui.cn/free/2024/07/16/669642ef6493e.png"/>
</p>

### 一，项目描述
- 基于vue3+datav的基础大屏版本
- 已经做了适配，可以放心使用
- 项目需要按f11全屏展示
- 注意，这是基础版基础版，但是用在真实项目上是没问题的

友情链接：

1.  [Vue 官方文档](https://cn.vuejs.org/v2/guide/instance.html)
2.  [DataV 官方文档](http://datav.jiaminghi.com/guide/)
3.  [echarts 实例](https://echarts.apache.org/examples/zh/index.html)，[echarts API 文档](https://echarts.apache.org/zh/api.html#echarts)


### 二，文件描述

| 文件                | 作用/功能                                                              |
| ------------------- | --------------------------------------------------------------------- |
| main.js             | 主目录文件，引入 Echart/DataV 等文件                                    |      
| views/ IndexHome.vue| 项目主结构                                                             |
| views/其余文件       | 界面各个区域组件（按照位置来命名）                                        |
| views/components/adaptiveview.vue | 自适应组件                                                |


### 三，请求地址设置
在src/utlis/requests.ts目录下配置axios请求配置，其中，包括请求默认值和请求拦截/响应拦截等，注意，现在项目使用
的是mock数据，后续需要替换成真实接口数据，现在只是示例，只做参考
```js
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

```
### 四，其余
项目是个人写的基础款作品，开始的时候本来想写的是一个全面的作品，但是后续考虑到怕项目太臃肿，所以只写了基础版，虽然是基础版
但是该有的基本上都有了，完全可以作为正式项目来使用，后续在往里面添加功能也是非常简单的。