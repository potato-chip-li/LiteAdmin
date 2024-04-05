<template>
    <div class="left-header">
        <div class="shrink_nav_bar" @click="console.log('收缩导航栏')">
            <span @click="shrink_nav_bar">{{ isshrink ? '➡️' : '⬅️' }}</span>
        </div>
        <RouterLink to="/home"><strong>首页</strong></RouterLink>
        <div class="link-list" v-for="i in crumbs_list ">
            <span>/</span>
            <RouterLink :to="i.path">{{ i.name }}</RouterLink>
        </div>
    </div>

    <div class="right-header">
        <div @click="toggleFullScreen" title="进入全屏">💻</div>
        <div title="通知">🔔</div>
        <div title="设置">
            <RouterLink to="/manage">⚙️</RouterLink>
        </div>
        <div class="my-avatar">😋</div>
        <Transition>
            <floatingWindow class="hide"></floatingWindow>
        </Transition>
    </div>
</template>

<script setup>
const emit = defineEmits(['toggleWidth'])
import floatingWindow from '../floatingWindow/index.vue'
import { watch, ref } from 'vue';
import { useRoute } from 'vue-router';


const crumbs_list = ref([])
const route = useRoute()
const content = document.getElementById('content')
const isshrink = ref(false)

const toggleFullScreen = function () {
    if (content.requestFullscreen) {
        content.requestFullscreen();
    } else if (content.mozRequestFullScreen) { // Firefox
        content.mozRequestFullScreen();
    } else if (content.webkitRequestFullscreen) { // Chrome, Safari and Opera
        content.webkitRequestFullscreen();
    } else if (content.msRequestFullscreen) { // IE/Edge
        content.msRequestFullscreen();
    }
}
const shrink_nav_bar = () => {
    emit('toggleWidth')
    isshrink.value = !isshrink.value
}


watch(
    () => route.fullPath,
    (newValue, oldValue) => {
        crumbs_list.value = route.matched.slice(1)
    },
);

</script>

<style scoped>
.left-header {
    margin-left: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
}

.link-list {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
}

.link-list span {
    line-height: 50px;
    font-size: larger;
    font-weight: bolder;
    color: var(--li-color-border);
    margin: 0 10px;
}

.shrink_nav_bar i {
    font-size: 25px;
    cursor: pointer;
}

.right-header {
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
}

.right-header>* {
    margin: 0 10px;
    cursor: pointer;
}

.hide {
    display: none;
    position: absolute;
    top: 20px;
    right: 0;
}


.my-avatar:hover+.hide,
.hide:hover {
    position: absolute;
    top: 20px;
    right: 0;
    display: block;
}
</style>