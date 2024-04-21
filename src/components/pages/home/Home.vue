<script setup lang='ts'>
import {ref} from 'vue'
import WdjSkeleton  from "@/components/common/WdjSkeleton.vue"
import WdjSkeletonItem from '@/components/common/WdjSkeletonItem.vue'
import WdjSwitch from '@/components/common/WdjSwitch.vue'
import CardArray from "./CardArray.vue"
var loading = ref(true)
// setTimeout(()=>{
//     loading.value = !loading.value 
// },1000)
</script>
<template>
    <div>
        <WdjSwitch v-model="loading"></WdjSwitch>
        <WdjSkeleton :loading="loading" :animated="true" >
            <template #template>
                <WdjSkeletonItem :width="'200px'" :height="'20px'"></WdjSkeletonItem>
            </template>
            <template #default>
                <div>这是内容</div>
            </template>
        </WdjSkeleton>

        <CardArray></CardArray>

    </div>
    <div>
        内容
    </div>
</template>

<style scoped>

</style>