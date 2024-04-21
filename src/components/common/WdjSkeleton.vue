<script setup lang='ts'>
import {ref,watch} from "vue"
const props = defineProps<{
    loading:boolean,
    animated?:true,
    throttle?:number,
    style?:Object
}>()
const isloading = ref(props.loading||!!props.throttle)

const throttleAfter = ref(!props.throttle)
if(!throttleAfter.value){
    setTimeout(()=>{
        throttleAfter.value = true
    },props.throttle)
}

watch(()=>props.loading||!throttleAfter.value,(sum)=>{
  isloading.value = sum
})
</script>
<template>
        <div class="template" v-show="isloading"><slot name="template" :animated="animated"></slot></div>

        <div class="default" v-show="!isloading"><slot name="default" :animated="animated"></slot></div>
</template>

<style scoped>
.template :slotted(div) .amn{
    width: 200%;
    display: block;
    background:linear-gradient(270deg,transparent 10%, rgb(100, 100, 100) 80%,transparent);
    animation-duration: 3s;
    animation-name: slidein;
    animation-iteration-count: infinite;
}

@keyframes slidein {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(-90%);
  }
}
</style>