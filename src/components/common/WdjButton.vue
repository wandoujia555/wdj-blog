<template>
    <div class="button">
        {{ props.color }}
    </div>
</template>
<script setup lang="ts">
// import { onUpdated } from "vue";
// import {createStyle} from "wdjcss"
const props = defineProps<{
    color?:string,
}>()
// const ButtonCss = createStyle()



// ButtonCss.addRule(".button",{
//     background:props.color
// })
// onUpdated(() => {
//     ButtonCss.addRule(".button",{
//         background:props.color
//     })
// })



</script>
<style scoped>
.button {
    background-color:v-bind(color);
}
</style>