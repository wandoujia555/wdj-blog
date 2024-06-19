<script setup lang='ts'>
import {ref,onBeforeUnmount} from 'vue'
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
    /**
     * 延迟
     */
    throttle?:number;
    /**
     * 控制是否暂停加入
     */
    pauseOnload?:boolean;
    /**
     * 如果停止加入到列表中则返回false即可
     * @param {CardData} data - The Array of the CardData for rending CardBox.
     */
    requestFun?:(data:CardData[],pauseOnload:any)=>Promise<CardData>;
}>(),{
    throttle:0,
    pauseOnload:false,
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
// 初始化时先读取先前的数据
let data_storage = web_getCardArray()
if(!data_storage){
    data_storage = [
    {
        title:"B站爬虫",
        time:"2024",
        author:"wdj",
        imgs:[
            "img1",
            "img2",
            "img3"
        ]
    },
   {
        title: "a",
        time:"2024",
        author:"wdj",
        imgs:[
            "img1",
            "img2",
            "img3"
        ]
    }
]
}
const data = ref<CardData[]>(data_storage)


const loadBtootom = ()=>{
    isLoad.value = true
    return props.requestFun(data.value,props.pauseOnload)
    .then((dataCard)=>{
        if(!dataCard.title){isLoad.value = false;return;};
        data.value.push(dataCard)
        isLoad.value = false

        // 存起来方便下次不用加载
        web_setCardArray(data.value)
        console.log(localStorage.getItem("wdj-blog"))
    })
}
const addCard = ()=>{
    // 如果正在加载或者禁止加载开启中 则停止加入
    if(props.pauseOnload||isLoad.value)return false;
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

// 以下是不泛用的方法，用于其他页面要移除
function web_setCardArray(data:any){
    if(typeof(Storage)!=="undefined"){
        localStorage.setItem("wdj-blog", JSON.stringify(data));
        // return localStorage.getItem("wdj-blog");
        // 是的! 支持 localStorage  sessionStorage 对象!
        // 一些代码.....
    }
}
function web_getCardArray(){
    if(typeof(Storage)!=="undefined"){
        return JSON.parse(localStorage.getItem("wdj-blog")!)
    }
}
// console.log(web_storage())

onBeforeUnmount(()=>{
    window.removeEventListener("scroll",addCard)
})

</script>
<template>
    <div class="card-warp" v-for="card in data">
        <router-link :to="'/users/'+card.title">
            <a :href="card.title" class="card-a">
                <Card :title="card.title" :imgArray="card.imgs"></Card>
            </a>
        </router-link>
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