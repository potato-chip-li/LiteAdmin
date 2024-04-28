<template>
    <ul class="nav-bar">
        <li class="label">{{ isshrink.label }}</li>
        <li>
            <RouterLink to='/home'>
                <span class="cell-one">🏠</span>
                <span class="cell-two">Home</span>
                <span class="cell-three">&nbsp;</span>
            </RouterLink>
        </li>
        <li>
            <a href="#" @click="table_islist = !table_islist">
                <span class="cell-one">📅</span>
                <span class="cell-two">超级表格</span>
                <span class="cell-three">{{ table_islist ? "🔼" : "🔽" }}</span>
            </a>
        </li>
        <ul v-show="table_islist">
            <li>
                <RouterLink to='/table/tableone'>
                    <span class="cell-one">📅</span>
                    <span class="cell-two">已上架</span>
                    <span class="cell-three">&nbsp;</span>
                </RouterLink>
            </li>
            <li>
                <RouterLink to='/table/tabletwo'>
                    <span class="cell-one">📅</span>
                    <span class="cell-two">已下架</span>
                    <span class="cell-three">&nbsp;</span>
                </RouterLink>
            </li>
        </ul>
        <li>
            <RouterLink to='/form'>
                <span class="cell-one">📝</span>
                <span class="cell-two">超级表单</span>
                <span class="cell-three">&nbsp;</span>
            </RouterLink>
        </li>
        <li>
            <a href="#" @click="echarts_islist = !echarts_islist">
                <span class="cell-one">📊</span>
                <span class="cell-two">Echarts</span>
                <span class="cell-three">{{ echarts_islist ? "🔼" : "🔽" }}</span>
            </a>
        </li>
        <ul v-show="echarts_islist">
            <li>
                <RouterLink to='/echarts/echartone'>
                    <span class="cell-one">📊</span>
                    <span class="cell-two">echart1</span>
                    <span class="cell-three">&nbsp;</span>
                </RouterLink>
            </li>
            <li>
                <RouterLink to='/echarts/echarttwo'>
                    <span class="cell-one">📊</span>
                    <span class="cell-two">echart2</span>
                    <span class="cell-three">&nbsp;</span>
                </RouterLink>
            </li>
        </ul>
        <li>
            <RouterLink to='/exportFile'>
                <span class="cell-one">📁</span>
                <span class="cell-two">Excel&Zip</span>
                <span class="cell-three">&nbsp;</span>
            </RouterLink>
        </li>
        <li>
            <a href="#" @click="screen_islist = !screen_islist">
                <span class="cell-one">📟</span>
                <span class="cell-two">数据大屏</span>
                <span class="cell-three">{{ screen_islist ? "🔼" : "🔽" }}</span>
            </a>
        </li>
        <ul v-show="screen_islist">
            <li>
                <a href="./static/screenOne/index.html" target="_blank">
                    <span class="cell-one">📟</span>
                    <span class="cell-two">大屏1</span>
                    <span class="cell-three">&nbsp;</span>
                </a>
            </li>
            <li>
                <a href="./static/screenTwo/index.html" target="_blank">
                    <span class="cell-one">📟</span>
                    <span class="cell-two">大屏2</span>
                    <span class="cell-three">&nbsp;</span>
                </a>
            </li>
        </ul>
        <li>
            <RouterLink to='/componentManage'>
                <span class="cell-one">📰</span>
                <span class="cell-two">组件管理</span>
                <span class="cell-three">&nbsp;</span>
            </RouterLink>
        </li>
        <li>
            <RouterLink to='/theme'>
                <span class="cell-one">👓</span>
                <span class="cell-two">主题配置</span>
                <span class="cell-three">&nbsp;</span>
            </RouterLink>
        </li>
        <li>
            <RouterLink to='/customerService'>
                <span class="cell-one">🤵‍♀️</span>
                <span class="cell-two">智能客服</span>
                <span class="cell-three">&nbsp;</span>
            </RouterLink>
        </li>
        <li>
            <RouterLink to='/link'>
                <span class="cell-one">🗺️</span>
                <span class="cell-two">外部链接</span>
                <span class="cell-three">&nbsp;</span>
            </RouterLink>
        </li>
        <li>
            <RouterLink to='/manage'>
                <span class="cell-one">⚙️</span>
                <span class="cell-two">系统管理</span>
                <span class="cell-three">&nbsp;</span>
            </RouterLink>
        </li>
    </ul>
</template>

<script setup>
import { ref, watch } from "vue";


const props = defineProps(['isshrink'])
const table_islist = ref(false)
const echarts_islist = ref(false)
const screen_islist = ref(false)
const isshrink = ref({
    display: 'inline',
    navwidth: '12vw',
    label: 'LiteAdmin'
})


watch(
    props,
    (newValue, oldValue) => {
        console.log(newValue)
        if (newValue.isshrink === true) {
            isshrink.value = {
                display: 'none',
                navwidth: '3vw',
                label: 'LA'
            }
        }
        else {
            isshrink.value = {
                display: 'inline',
                navwidth: '12vw',
                label: 'LiteAdmin'
            }
        }

    }
)
</script>

<style scoped>
.nav-bar {
    display: flex;
    flex-direction: column;
    width: v-bind('isshrink.navwidth');
    height: 100%;
    font-size: 16px;
    overflow-y: auto;
}

a {
    color: var(--font-color-white);
    justify-content: space-between;
}

.cell-one {
    width: 20px;
    height: 20px;
}

.cell-two {
    width: 64px;
    font-size: 14px;
    display: v-bind('isshrink.display');
}

.cell-three {
    width: 20px;
    height: 20px;
    display: v-bind('isshrink.display');
}


.nav-bar ul {
    display: flex;
    flex-direction: column;
}

.nav-bar li {
    /* 因为父元素是弹性盒子，所以要设置为min-height使overflow-y生效 */
    min-height: 50px;
}

.label {
    color: white;
    background-color: var(--li-color-border);
    font-size: 30px;
    text-align: center;
    line-height: 50px;
}
</style>