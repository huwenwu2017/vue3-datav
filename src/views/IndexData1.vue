<template>
    <div ref="main" class="interior">
    </div>

</template>
<script lang="ts">
import * as echarts from 'echarts';
import { ref, onMounted, watch, nextTick, reactive } from "vue"

interface Props {
    data: any
}

export default {
    props: {
        data: {
            type: Object,
            required: true
        }
    },
    setup(props: any) {
        console.log(props.data, 0)
        const loading = ref(true)
        const main = ref()
        const setecharts = () => {
            const myChart = echarts.init(main.value)
            let option = {
                xAxis: {
                    type: 'category',
                    data: Object.keys(props.data)
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        data: Object.values(props.data),
                        type: 'line'
                    }
                ]
            }
            option && myChart.setOption(option);
        }
        watch(() => props.data, () => {
            setecharts()
        }, { deep: true })  //开启深度监听，当props更新时，更新echarts图表

        onMounted(() => {
            setecharts()

        })

        return {
            main, loading
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