<template>
    <div class="ScreenAdapter" :style="style">
        <slot />
    </div>
</template>
<script lang="ts">
import { onMounted, reactive } from 'vue';
export default {
    props: {
        width: {
            type: String,
            default: '1920'
        },
        height: {
            type: String,
            default: '1080'
        }
    },
    setup(props: any) {
        const style = reactive({
            width: props.width + 'px',
            height: props.height + 'px',
            transform: 'scale(1) translate(-50%, -50%)'
        })
        const Debounce = (fn: any, t: any) => {
            const delay = t || 500
            let timer: any
            return function () {
                const args = arguments
                if (timer) {
                    clearTimeout(timer)
                }
                timer = setTimeout(() => {
                    timer = null
                    fn.apply(args)
                }, delay)
            }
        }
        // 获取放大缩小比例
        const getScale = () => {
            const w = window.innerWidth / props.width
            const h = window.innerHeight / props.height
            return w < h ? w : h
        }
        // 设置比例
        const setScale = () => {
            style.transform = 'scale(' + getScale() + ') translate(-50%, -50%)'
        }
        onMounted(() => {
            setScale()
            window.onresize = Debounce(setScale, 1000)
        })
        return {
            style
        }
    }

}
</script>
<style scoped>
.ScreenAdapter {
    transform-origin: 0 0;
    position: absolute;
    left: 50%;
    top: 50%;
    transition: 0.3s;

}
</style>