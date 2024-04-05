<template>
    <navBar :isshrink="isshrink"></navBar>
    <div class="container">
        <div class="header-inner">
            <headerInner @toggleWidth="toggleWidth"></headerInner>
        </div>

        <div class="app-main">
            <Transition name="togglePage">
                <RouterView></RouterView>
            </Transition>
        </div>
        <div class="footer">
            <span>2024 © LiteAdmin By Hun.</span>
        </div>
    </div>

</template>

<script setup>
import headerInner from './components/headerInner/index.vue'
import tagsViews from './components/tagsView/index.vue'
import navBar from './components/navBar/index.vue'
import { ref } from 'vue'

const isshrink = ref(false)
const container_width = ref('88vw')

const toggleWidth = () => {
    isshrink.value = !isshrink.value
    container_width.value === '88vw' ? container_width.value = '97vw' : container_width.value = '88vw'
}
</script>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    width: v-bind('container_width');
    height: 100%;
}

.header-inner {
    height: 50px;
    width: 100%;
    border-bottom: 1px solid #eee;
    display: flex;
    align-items: center;
    padding: 0 10px 0 0;
    box-sizing: border-box;
    justify-content: space-between;
}

.tags-view {
    height: 30px;
    width: 100%;
    border-bottom: 1px solid #eee;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding-left: 10px;
    padding-right: 10px;
}

.app-main {
    width: 100%;
    height: var(--app-main-height);
}

.footer {
    height: 30px;
    width: 100%;
    text-align: center;
    line-height: 30px;
}

.togglePage-enter-active,
.togglePage-leave-active {
    transition: opacity 0.5s ease;
}

.togglePage-enter-from,
.togglePage-leave-to {
    opacity: 0;
}
</style>