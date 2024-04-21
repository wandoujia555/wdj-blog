<script setup lang='ts'>
import { useRouter } from 'vue-router'
import {ref,onMounted} from 'vue'
const router = useRouter()
import {Marked} from "marked"
import { markedHighlight } from "marked-highlight";
import hljs from 'highlight.js/lib/common';

import WdjSkeleton from '@/components/common/WdjSkeleton.vue';
// import hljsVuePlugin from "@highlightjs/vue-plugin";
const marked = new Marked(
  markedHighlight({
    langPrefix: 'hljs language-',
    highlight(code, lang) {
      const language = hljs.getLanguage(lang) ? lang : 'plaintext';
      return hljs.highlight(code, { language }).value;
    }
  })
);
// 匹配image 里面的src 提取出来并记录作为封面

// 匹配img标签
const imgTag = /<img.+?>/g
// 匹配src
const patternsrc = /src="\s*(\S+)\s*"/


// ![test image size](https://img2.imgtp.com/2024/04/18/gkn7oDhP.jpg){:height="100px" width="400px"}
// ![CSDN图标](https://img2.imgtp.com/2024/04/18/gkn7oDhP.jpg =100x100)
// ![](https://img2.imgtp.com/2024/04/18/gkn7oDhP.jpg =100x20)
var str = `
<img src="https://img2.imgtp.com/2024/04/18/gkn7oDhP.jpg" width="200" height="200">
<img src="https://img2.imgtp.com/2024/04/18/gkn7oDhP.jpg" width="200" height="200">
[asdas]<img src="https://img2.asdasd.com/2024/04/18/gkn7oDhP.jpg" width="200" height="200">

asdasd
\`\`\`js
console.log()
\`\`\`


\`\`\` vue

<script setup lang="ts">
import { ref } from 'vue'
import WdjButton from '@/components/common/WdjButton.vue'
defineProps<{ msg: string }>()

const count = ref(0)
const colorBtn = ref("blue")
// const a = ref(colorRef)

setTimeout(()=>{
  colorBtn.value = "red"
},2000)
<\/script>

<template>
  <WdjButton :color='colorBtn'> </WdjButton>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Install
    <a href="https://github.com/vuejs/language-tools" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>


\`\`\`
`

let myArray:any;
let imgArray:string[] = [];
let srcArray:string[] = [];

while ((myArray = imgTag.exec(str)) !== null) {
  // console.log(myArray)
  imgArray.push(myArray[0])
}
imgArray.forEach((value)=>{
  let url = patternsrc.exec(value)![1]
  if(url){
    srcArray.push(url);
  }
})
// console.log(imgArray.reduce((sum,current)=>{
//   return sum.push(current.exec())
// },srcArray))
// console.log(patternsrc.exec(str))

const innerHTML  = ref(marked.parse(str) as string)

// {{ innerHTML }}
const dom = ref<HTMLDivElement>()
onMounted(()=>{
    const divE = dom.value!
    divE.innerHTML = innerHTML.value;
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