<template>
    <div class="home-container">
        <div class="data-window">
            <div v-for="(v, k) in someData.amounts">
                <span>{{ k }}</span>
                <div class="big-num">{{ v }}</div>
            </div>

        </div>

        <div class="i-write">
            <span>{{ someData.myExplanation }}</span>
        </div>

        <div class="summary-graph">
            <myChartOne></myChartOne>
            <myChartTwo></myChartTwo>
        </div>
    </div>
</template>

<script setup>
import { useDataStore } from '@/stores/someData'
import { ref, onMounted } from 'vue'
import myChartOne from './components/myChartOne/index.vue'
import myChartTwo from './components/myChartTwo/index.vue'


const myChart_1 = ref()
const myChart_2 = ref()
const someData = useDataStore()

</script>

<style scoped>
.home-container {
    margin: 10px;
    width: var(--content--w-and-h);
    height: var(--content--w-and-h);
}

.data-window {
    display: flex;
    flex-direction: row;
}

.data-window>div {
    height: 120px;
    margin: 20px;
    flex: 1;
    border-radius: 10px;
    text-align: center;
}

.data-window div span {
    color: var(--li-color);
    font-weight: bolder;

}


.data-window>div:nth-child(1) {
    background-color: greenyellow;
}

.data-window>div:nth-child(2) {
    background-color: pink
}

.data-window>div:nth-child(3) {
    background-color: skyblue
}

.data-window>div:nth-child(4) {
    background-color: orange
}

.big-num {
    margin-top: 20px;
    font-size: 50px;
    font-weight: bold;
    text-shadow: 1px 1px 2px red, 0 0 1em blue, 0 0 0.2em blue;
    color: white;
}

.i-write {
    border-radius: 10px;
    background-color: antiquewhite;
    color: var(--li-color);
    height: 60px;
    font-weight: bold;
    /* text-align: center; */
}

.summary-graph {
    margin-top: 20px;
    height: 56%;
    display: flex;
    flex-direction: row;
    font-weight: bold;
}

.summary-graph>* {
    flex: 1;
    background-color: palevioletred;
    border: solid var(--li-color) 2px;
    border-radius: 20px;
    color: var(--li-color);
    text-align: center;


}

.graph-one {
    margin-right: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    position: relative;
}
</style>