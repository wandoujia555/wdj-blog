<script setup lang='ts'>

import {watch,ref,computed } from "vue"
const model = defineModel({ default: false })

const props = withDefaults(defineProps<{
    color?:string;
    width?:string;
    height?:string;
}>(),{
    color:"white",
    width:"60px",
    height:"20px"
})

const isOpen = ref(!model.value)
const isLeft = computed(() => {
  return isOpen.value ? props.height : props.width
})
const bgc = computed(()=>{
    return isOpen.value ? 'var(--wdj-bgc-c1)' : 'var(--wdj-bgc-c2)'
})


watch(model,()=>{
    isOpen.value = !model.value
})

const change = ()=>{
    model.value = !model.value
}

</script>
<template>
    <div class="switch" @click="change">
        <slot>
            <!-- 插槽默认内容 -->
            <div class="oval"></div>
        </slot>
    </div>
</template>

<style scoped>
.switch {
    padding: 0.4px;

    width: 20px;
    height: 20px;
    background-color: black;

    width: v-bind(width);
    
    height: v-bind(height);

    border-radius: 10px;
    
    background-color: v-bind(bgc);

    transition: all 0.4s ease;
    cursor: pointer;
}

/* 椭圆 */
.oval {
    border-radius: 100%;
    
    height: v-bind(height);

    width: v-bind(height);

    transition: all 0.4s ease;

    transform: translateX(calc(v-bind(isLeft) - v-bind(height)));
    background-color: v-bind(color);
}



</style>