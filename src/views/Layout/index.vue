<template>
    <ul class="nav-bar">
        <li class="label">LiteAdmin</li>
        <li>
            <RouterLink to='/home'>
                <span><i class="iconfont">&#xe6a9;</i>Home</span>
            </RouterLink>
        </li>
        <li>
            <a href="#" @click="table_islist = !table_islist">
                <span><i class="iconfont">&#xe6a8;</i>超级表格</span>
                <i class="iconfont">{{ table_islist ? "&#xe6a5;" : "&#xe6a4;" }}</i>
            </a>
        </li>
        <ul v-show="table_islist">
            <li>
                <RouterLink to='/table/tableone'><span><i class="iconfont">&#xe6a8;</i>已上架</span></RouterLink>
            </li>
            <li>
                <RouterLink to='/table/tabletwo'><span><i class="iconfont">&#xe6a8;</i>已下架</span></RouterLink>
            </li>
        </ul>
        <li>
            <RouterLink to='/form'><span><i class="iconfont">&#xe6e0;</i>超级表单</span></RouterLink>
        </li>
        <li>
            <a href="#" @click="echarts_islist = !echarts_islist">
                <span><i class="iconfont">&#xe6df;</i>Echarts</span>
                <i class="iconfont">{{ echarts_islist ? "&#xe6a5;" : "&#xe6a4;" }}</i>
            </a>
        </li>
        <ul v-show="echarts_islist">
            <li>
                <RouterLink to='/echarts/echartone'><span><i class="iconfont">&#xe6df;</i>echart1</span></RouterLink>
            </li>
            <li>
                <RouterLink to='/echarts/echarttwo'><span><i class="iconfont">&#xe6df;</i>echart2</span></RouterLink>
            </li>
        </ul>
        <li>
            <RouterLink to='/exportFile'><span><i class="iconfont">&#xe6af;</i>Excel&Zip</span></RouterLink>
        </li>
        <li>
            <a href="#" @click="screen_islist = !screen_islist">
                <span><i class="iconfont">&#xe6ab;</i>可视化大屏</span>
                <i class="iconfont">{{ screen_islist ? "&#xe6a5;" : "&#xe6a4;" }}</i>
            </a>
        </li>
        <ul v-show="screen_islist">
            <li>
                <RouterLink to="/screen/screenone"><span><i class="iconfont">&#xe6ab;</i>使用流程图</span></RouterLink>
            </li>
            <li>
                <RouterLink to="/screen/screentwo"><span><i class="iconfont">&#xe6ab;</i>迁徙图</span></RouterLink>
            </li>
        </ul>
        <li>
            <RouterLink to='/componentManage'><span><i class="iconfont">&#xe6c2;</i>组件管理</span></RouterLink>
        </li>
        <li>
            <RouterLink to='/theme'><span><i class="iconfont">&#xe6de;</i>主题配置</span></RouterLink>
        </li>
        <li>
            <RouterLink to='/customerService'><span><i class="iconfont">&#xe6ad;</i>智能客服</span></RouterLink>
        </li>
        <li>
            <RouterLink to='/link'><span><i class="iconfont">&#xe6c9;</i>外部链接</span></RouterLink>
        </li>
        <li>
            <RouterLink to='/manage'><span><i class="iconfont">&#xe6a2;</i>系统管理</span></RouterLink>
        </li>
    </ul>
    <div class="container">
        <div class="header-inner">
            <headerInner></headerInner>
        </div>
        <!-- <div class="tags-view">
            <tagsViews></tagsViews>
        </div> -->
        <div class="app-main">
            <RouterView></RouterView>
        </div>
        <div class="footer">
            <span>2024 © LiteAdmin By Hun.</span>
        </div>
    </div>

</template>

<script lang="ts" setup>
import headerInner from './components/headerInner/index.vue'
import tagsViews from './components/tagsView/index.vue'
import { ref } from "vue";
const table_islist = ref(false)
const echarts_islist = ref(false)
const screen_islist = ref(false)
</script>

<style scoped>
.nav-bar {
    display: flex;
    flex-direction: column;
    width: 200px;
    height: 100%;
    font-size: 16px;
    overflow-y: auto;
}

a {
    color: var(--font-color-white);
    justify-content: space-between;
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

.container {
    display: flex;
    flex-direction: column;
    width: var(--container-width);
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
</style>