<script setup lang='ts'>
import {ref} from 'vue'
// import WdjSkeleton  from "@/components/common/WdjSkeleton.vue"
// import WdjSkeletonItem from '@/components/common/WdjSkeletonItem.vue'
// import WdjSwitch from '@/components/common/WdjSwitch.vue'
// var loading = ref(true)
// setTimeout(()=>{
//     loading.value = !loading.value 
// },1000)
import CardArray from "./CardArray.vue"
import {CardData} from "./CardArray.vue"
const isPaused = ref(false)
const requestFun = (data:CardData[])=>{
    return fetch('http://localhost:8000/articleBysession/'+(data.length))
    .then((response)=>{
        return response.text()
    })
    .then((title)=>{
        if(!title){
            console.log("加载完了")
            isPaused.value = true;
        }
        return {
                title: title,
                time:"2024",
                author:"wdj",
                imgs:[
                    "img1",
                    "img2"
                ]
            }
    })
    // 测试延迟是否会停止
    return new Promise<CardData>((resolve,_)=>{
        setTimeout(()=>{
            resolve({
                title: "title",
                time:"2024",
                author:"wdj",
                imgs:[
                    "img1",
                    "img2"
                ]
            })
        },2000)
    })
}
</script>
<template>
    <h1>只是一个豌豆荚<span>の</span>博客</h1>
    <div class="content">
        <!-- <WdjSwitch v-model="loading"></WdjSwitch> -->
        <!-- <WdjSkeleton :loading="loading" :animated="true" >
            <template #template>
                <WdjSkeletonItem :width="'200px'" :height="'20px'"></WdjSkeletonItem>
            </template>
            <template #default>
                <div>这是内容</div>
            </template>
        </WdjSkeleton> -->
        <CardArray :pause-onload="isPaused" :throttle="1000" :request-fun="requestFun"></CardArray>

    </div>
    <div>
        内容
    </div>
</template>

<style scoped>
.content{
    margin-right: 6rem;
}
</style>