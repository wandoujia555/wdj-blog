<script setup lang='ts'>
// import {ref} from 'vue'
const props = defineProps<{
    animated?:true;
    width?:string;
    height?:string;
}>()
if(props.animated===undefined){
    
}

</script>
<template>
    <div class="skeletonItem">
        <div class="amn"><div v-show="!animated"></div></div>
    </div>
</template>

<style scoped>
.skeletonItem{
    background-color: rgba(59, 59, 59, 0.3);
    display: block;
    border-radius: 10px;
    width: v-bind(width);
    overflow: hidden;
}
.amn{
    height: v-bind(height);
}


</style>