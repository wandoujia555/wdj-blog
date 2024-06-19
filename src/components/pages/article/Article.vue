<script setup lang='ts'>
import {server} from "@/config.ts"
import { useRouter } from 'vue-router'
import {ref,onMounted} from 'vue'
const router = useRouter()
import {Marked} from "marked"
import { markedHighlight } from "marked-highlight";
import hljs from 'highlight.js/lib/common';

import WdjSkeleton from '@/components/common/WdjSkeleton.vue';
// 通过id(文章tite)获取文章
const article_id = router.currentRoute.value.params.id
// 服务器请求地址
const article_url = 'http://'+server.address+'/article/'+article_id;


const marked = new Marked(
  markedHighlight({
    langPrefix: 'hljs language-',
    highlight(code, lang) {
      const language = hljs.getLanguage(lang) ? lang : 'plaintext';
      return hljs.highlight(code, { language }).value;
    }
  })
);
// var str = '';
const innerHTML  = ref()
const dom = ref<HTMLDivElement>()
// 匹配image 里面的src 提取出来并记录作为封面
fetch(article_url)
.then((response)=>{
  return response.text()
})
.then((data)=>{
  innerHTML.value = marked.parse(data) as string
  dom.value!.innerHTML = innerHTML.value
})




// 匹配img标签
// const imgTag = /<img.+?>/g
// 匹配src
// const patternsrc = /src="\s*(\S+)\s*"/
// let myArray:any;
// let imgArray:string[] = [];
// let srcArray:string[] = [];

// while ((myArray = imgTag.exec(str)) !== null) {
//   // console.log(myArray)
//   imgArray.push(myArray[0])
// }
// imgArray.forEach((value)=>{
//   let url = patternsrc.exec(value)![1]
//   if(url){
//     srcArray.push(url);
//   }
// })
// console.log(imgArray.reduce((sum,current)=>{
//   return sum.push(current.exec())
// },srcArray))
// console.log(patternsrc.exec(str))

onMounted(()=>{
  
    // const divE = dom.value!
    // divE.innerHTML = innerHTML.value;
    // if(divE.innerHTML == '') console.log("a")
})

</script>
<template>
  <div class="article">
    <wdj-skeleton :loading="false" :throttle="0">
    <template #template>
      bbb
    </template>
    <template #default>
      <!-- {{ $router }} -->
      <div class="article-main" ref="dom"></div>
      <!-- <div class="article-main" ref="dom"></div> -->
    </template>
    </wdj-skeleton>
  </div>
</template>

<style scoped>
    .article{
      margin-right: 100px;
    }
    .article-main{
      width: 70%;
      margin: 0 auto;
    }

</style>