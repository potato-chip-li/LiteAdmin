<template>
    <div class="graph-two">
        <div class="toggle-chart">
            <span @click="showLine" :class="{ showChart: isline }">折线图</span>
            <span @click="showBar" :class="{ showChart: !isline }">柱状图</span>
        </div>
        <div>
            <canvas ref="myChart_2"></canvas>
        </div>
        <div>&nbsp;</div>
    </div>
</template>

<script setup>

import { ref, onMounted } from 'vue'
import { useDataStore } from '@/stores/someData'

const isline = ref(true)
const myChart_2 = ref()
const someData = useDataStore()
const chartData_2 = someData.chartData_2


function showBar() {
    isline.value = false
    drawBar()
}

function showLine() {
    isline.value = true
    drawLine()
}

function drawXandY() {
    myChart_2.value.width = 280;
    myChart_2.value.height = 280;
    let ctx = myChart_2.value.getContext('2d');
    let canvasWidth = ctx.canvas.width;
    let canvasHeight = ctx.canvas.height;
    let spaceSize = 20;
    let arrowSize = 10;
    //画x轴
    ctx.beginPath();
    ctx.moveTo(spaceSize, canvasHeight - spaceSize);
    ctx.lineTo(canvasWidth - spaceSize, canvasHeight - spaceSize);
    ctx.stroke();
    ctx.lineTo(canvasWidth - spaceSize - arrowSize, canvasHeight - spaceSize - arrowSize / 2);
    ctx.lineTo(canvasWidth - spaceSize - arrowSize, canvasHeight - spaceSize + arrowSize / 2);
    ctx.lineTo(canvasWidth - spaceSize, canvasHeight - spaceSize);
    ctx.fill();

    //画y轴
    ctx.beginPath();
    ctx.moveTo(spaceSize, canvasHeight - spaceSize);
    ctx.lineTo(spaceSize, spaceSize);
    ctx.stroke();
    ctx.lineTo(spaceSize + arrowSize / 2, spaceSize + arrowSize);
    ctx.lineTo(spaceSize - arrowSize / 2, spaceSize + arrowSize);
    ctx.lineTo(spaceSize, spaceSize);
    ctx.fill();
}

function drawLine() {
    let ctx = myChart_2.value.getContext('2d');
    ctx.beginPath();
    ctx.clearRect(30, 30, 200, 230)
    ctx.moveTo(60, 200);
    ctx.lineTo(100, 160);
    ctx.lineTo(140, 160);
    ctx.lineTo(180, 80)
    ctx.stroke();
}

function drawBar() {
    let ctx = myChart_2.value.getContext('2d');
    ctx.fillStyle = "green";
    ctx.clearRect(30, 30, 200, 200)
    ctx.fillRect(50, 190, 20, 70);
    ctx.fillRect(90, 150, 20, 110);
    ctx.fillRect(130, 150, 20, 110);
    ctx.fillRect(170, 70, 20, 190);
}


onMounted(() => {
    drawXandY()
    drawLine()
    // drawBar()
})


</script>


<style>
.graph-two {
    margin-right: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    position: relative;
}

.toggle-chart {
    background-color: white;
    line-height: 35px;
    text-align: center;
    border: solid 1px var(--li-color);
    box-sizing: border-box;
}

.toggle-chart>span {
    border-radius: 2px;
    padding: 5px;
    cursor: pointer;
}

.showChart {
    background-color: var(--li-color);
    color: white;
}
</style>