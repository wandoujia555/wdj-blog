<script setup lang='ts'>

const props = withDefaults(defineProps<{
    width?:string;
    height?:string;
    imgArray:Array<string>;
    title?:string;
}>(),{
    width:"100%",
    height:"100%"
})

</script>
<template>
    <div class="card">
        <div class="title">{{ title }}</div>

        <div v-if="props.imgArray.length==1" class="ImgArray">
            <div class="img-1 card-img">
                <img src="" alt="">
            </div>
            <div class="img-other">
                <div class="img-2 card-img">
                    <img src="" alt="">
                </div>
                <div class="img-3 card-img">
                    <img src="" alt="">
                </div>
            </div>
        </div>
        <div v-else-if="props.imgArray.length==2" class="ImgArray">
            <div class="img-1 card-img">
                <img src="" alt="">
            </div>
            <div class="img-other">
                <div class="img-2 card-img">
                    <img src="" alt="">
                </div>
                <div class="img-3 card-img">
                    <img src="" alt="">
                </div>
            </div>
        </div>
        <div v-else-if="props.imgArray.length>=3" class="ImgArray">
            <div class="img-1 card-img">
                <img src="" alt="">
            </div>
            <div class="img-other">
                <div class="img-2 card-img">
                    <img src="" alt="">
                </div>
                <div class="img-3 card-img">
                    <img src="" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.card{
    display: flex;
    flex-direction: column;
    width: v-bind(width);
    height: v-bind(height);
    padding: 0;

}
.title {
    height: 30px;
}
.ImgArray {
    flex: 1;
    display: flex;
}
.card-img{
    margin: 0 10px;
    transition: all 0.3s ease;
    display: inline-block;
}

.card-img:hover{
    transform: scale(1.05);
}
.img-1 {
    width: calc(50% - 20px);
    height: calc(100% - 0px);
    background-color: grey;
}

.img-other {
    flex: 1;
    height: 100%;
}
.img-2 {
    width: calc(100% - 20px);
    height: calc(50% - 10px);
    margin-bottom: 10px;
    background-color: skyblue;
}
.img-3 {
    width: calc(100% - 20px);
    height: calc(50% - 10px);
    margin-top: 10px;
    background-color: white;
}


</style>