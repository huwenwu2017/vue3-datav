<template>
    <dv-loading v-if="loading1"></dv-loading>
    <div ref="refecharts" class="interior" v-else>
    </div>
</template>

<script lang="ts">
import { info1 } from "./api"
import { ref, onMounted, nextTick, watch } from "vue"
import * as echarts from 'echarts';

export default {
    setup() {
        const loading1 = ref(true)
        const refecharts = ref()
        const echartsfun = (value:any) => {
            const myChart = echarts.init(refecharts.value);
            const option = {
                title: {
                    text: 'Referer of a Website',
                    subtext: 'Fake Data',
                    left: 'center'
                },
                tooltip: {
                    trigger: 'item'
                },
                legend: {
                    orient: 'vertical',
                    left: 'left'
                },
                series: [
                    {
                        name: 'Access From',
                        type: 'pie',
                        radius: '50%',
                        data: value.data,
                        emphasis: {
                            itemStyle: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    } 
                ]
            };
            myChart.clear(); //是否把之前的缓存给清除掉，提高性能，清除掉后在重新进行渲染,如何需要更换不同的表，建议加上，清除缓存
            myChart.setOption(option,true);                 
        }
        const getdata = async () => {
            const { data } = await info1()
            if (data.code == 200) {
                loading1.value = false
                nextTick(() => {  //当loadging切换时，dom变化，执行nexttick函数
                    if(refecharts.value){  //判断是否获取到dom，如果没有获取到就不执行，只执行onmounted里的getdata，防止调试时因为获取不到dom而报错
                        echartsfun(data)
                    }
                })

            }

        }
 
        onMounted(() => {
            setInterval(() => {
                getdata()
            }, 3000)
            getdata()
        })

        return {
            refecharts, loading1     
        }
    }
}
</script>

<style scoped>
.interior {
    height: 330px;
    width: 615px
}
</style>