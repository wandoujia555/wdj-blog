<script setup lang='ts'>
import {ref} from 'vue'
import Card from "./Card.vue"
var a = {
    title: "title2",
    time:"2024",
    author:"wdj",
    imgs:[
        "img1",
        "img2",
        "img3"
    ]
}
export type CardData  = typeof a
const props = withDefaults(defineProps<{
    throttle?:number;
    pauseOnload?:boolean;
    requestFun?:()=>Promise<CardData>;
}>(),{
    throttle:0,
    pauseOnload:true,
    requestFun:()=>{return new Promise<CardData>((resolve,_)=>{
        resolve({
            title: "title2",
            time:"2024",
            author:"wdj",
            imgs:[
                "img1",
                "img2",
                "img3"
            ]
        })
    })}
})
const isLoad = ref(false)
const data = ref([
    {
        title:"title1",
        time:"2024",
        author:"wdj",
        imgs:[
            "img1",
            "img2",
            "img3"
        ]
    },
   {
        title: "title2",
        time:"2024",
        author:"wdj",
        imgs:[
            "img1",
            "img2",
            "img3"
        ]
    },
   {
        title: "title2",
        time:"2024",
        author:"wdj",
        imgs:[
            "img1",
            "img2",
            "img3"
        ]
    }
])


const loadBtootom = ()=>{
    isLoad.value = true
    return props.requestFun()
    .then((dataCard)=>{
        data.value.push(dataCard)
        isLoad.value = false
    })
}
const addCard = ()=>{
    if(props.pauseOnload&&isLoad.value)return false;
    if(!throttleAfter.value)return false;
    let screenBtttom = document.scrollingElement?.scrollHeight!- document.scrollingElement?.scrollTop! - document.scrollingElement?.clientHeight!
    if(screenBtttom>200)return false;
    
    loadBtootom()

    throttleAfter.value = !throttleAfter.value
    setTimeout(()=>{
        throttleAfter.value = !throttleAfter.value
        addCard()
    },props.throttle)
    return true
}
// 定时
const throttleAfter = ref(true)
window.addEventListener("scroll",addCard)


</script>
<template>
    <div class="card-warp" v-for="card in data">
        <a href="" class="card-a">
            <Card :title="card.title" :imgArray="card.imgs"></Card>
        </a>
    </div>
</template>

<style scoped>
.card-warp{
    text-align: center;
}
.card-a{
    margin: 20px auto;
    width: 80%;
    height: 380px;
    display: inline-block;
}

</style>