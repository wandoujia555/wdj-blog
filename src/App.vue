<script setup lang="ts">
import {watch,ref } from "vue"
import {theme} from "@_C/utils/theme"
import WdjSwitch from "@/components/common/WdjSwitch.vue"
// wdjStyle.addRule(":root",{
//   background:"red",
//   color:"red"
// })

const changeTheme = ()=>{
  if(theme.value=="dark")
    theme.value="light"
  else
  theme.value="dark"
}
const isDark = ref(theme.value == "dark")
watch(isDark,()=>{
  changeTheme();
})

</script>

<template>
  <div class="app-main">
    <nav class="app-bar">
      <div class="btn">
        <WdjSwitch v-model="isDark"></WdjSwitch>
      </div>
      <br>
      <router-link to="/">首页</router-link>
      <router-link to="/about">关于</router-link>
      <router-link to="/users/123">关于</router-link>
      <!-- <router-link to="about">关于</router-link> -->
    </nav>
    <div class="app-view">
      <router-view ></router-view>
    </div>
  </div>
</template>

<style scoped>
.app-main {
  display: flex;
  width: 100%;
  height: 100%;
}
.app-bar {
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  width: 6rem;
  text-align: center;
}

.btn div{
  margin: 0 auto;
}

.app-view {
  display: inline-block;
  flex: 1;
}






.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
