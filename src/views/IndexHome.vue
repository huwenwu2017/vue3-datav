<template>
    <AdaptiveView>
        <dv-border-box11 title="香蕉麻花皮测试" :title-width="400" :animate="false" class="box-title">
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