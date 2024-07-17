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
### 四，容器
在项目中，src/views/IndexHome.vue文件是初始文件，大屏里的内容都在这里面填充，这相当于是一个骨架，至关重要
```html
<template>
    <!-- AdaptiveView组件就是我们的适配组件，一定要放在最外层，才能对整个大屏生效 -->
    <AdaptiveView>  
        <!-- dv-border-box11是datav的边框组件，后续可根据实际情况来进行替换，边框要放在适配组件的下一层，层级不要错了 -->
        <dv-border-box11 title="香蕉麻花皮测试" :title-width="400" :animate="false" class="box-title">
            <!--以下就是内容部分，基础架构就是这样-->
            <!-- 上部分 -->
            <div class="box">
                <div>
                    <dv-border-box1 class="frame">
                        <dv-loading v-if="loading1"></dv-loading>
                        <IndexData1 :data="data1.list" v-else></IndexData1>
                    </dv-border-box1>
                </div>
                <div>
                    <dv-border-box2 class="frame">
                        <IndexData2></IndexData2>
                    </dv-border-box2>

                </div>
                <div>
                    <dv-border-box3 class="frame">
                        <IndexData3></IndexData3>
                    </dv-border-box3>

                </div>
            </div>
            <!-- 中部分 -->
            <div class="box">
                <div>
                    <dv-border-box4 class="frame">
                        <IndexData4></IndexData4>
                    </dv-border-box4>

                </div>
                <div>
                    <dv-border-box5 class="frame">
                        <IndexData5></IndexData5>
                    </dv-border-box5>
                </div>
                <div>
                    <dv-border-box6 class="frame">
                        <IndexData6></IndexData6>
                    </dv-border-box6>

                </div>
            </div>
            <!-- 下部分 -->
            <div class="box">
                <div>
                    <dv-border-box7 class="frame">
                        <IndexData7></IndexData7>
                    </dv-border-box7>

                </div>
                <div>
                    <dv-border-box8 class="frame">
                        <IndexData8></IndexData8>
                    </dv-border-box8>

                </div>
                <div>
                    <dv-border-box9 class="frame">
                        <IndexData9></IndexData9>
                    </dv-border-box9>

                </div>
            </div>
        </dv-border-box11>

    </AdaptiveView>
</template>
<script lang="ts">
import { ref, onMounted, reactive } from "vue"
import IndexData1 from './IndexData1.vue';
import IndexData2 from './IndexData2.vue';
import IndexData3 from './IndexData3.vue';
import IndexData4 from './IndexData4.vue';
import IndexData5 from './IndexData5.vue';
import IndexData6 from './IndexData6.vue';
import IndexData7 from './IndexData7.vue';
import IndexData8 from './IndexData8.vue';
import IndexData9 from './IndexData9.vue';
import AdaptiveView from '@/components/AdaptiveView.vue';
import { info } from './api';

export default {
    setup() {
        const loading1 = ref(true)

        let data1: any = reactive({
            list: ""
        })

        const getdata = async () => {
            const { data } = await info();
            console.log(123)
            loading1.value = false
            data1.list = data.data
        };
        onMounted(() => {
            setInterval(() => {
                getdata()
            }, 360000)

        })
        return {
            data1, loading1
        }
    },

    components: {
        AdaptiveView, IndexData1, IndexData2, IndexData3, IndexData4, IndexData5, IndexData6, IndexData7, IndexData8, IndexData9
    }
}
</script>
<style scoped>
.box {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.frame {
    height: 330px;
    width: 615px;
    margin-top: 10px;
}

.box-title {
    padding-top: 40px;
    padding-left: 20px;
    padding-right: 20px;
    box-sizing: border-box;
}
</style>
```

### 五，其余
项目是个人写的基础款作品，开始的时候本来想写的是一个全面的作品，但是后续考虑到怕项目太臃肿，所以只写了基础版，虽然是基础版
但是该有的基本上都有了，完全可以作为正式项目来使用，后续在往里面添加功能也是非常简单的。