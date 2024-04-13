<template>
    <div class="graph-one">
        <span>{{ charttitle_1 }}</span>
        <div>
            <canvas ref="myChart_1"></canvas>
        </div>
        <div>&nbsp;</div>
        <div class="label">
            <div v-for="(v, k) in chartClassify_1">
                <span :style="{ 'background-color': v[1] }">&nbsp;</span>
                <span>{{ k }}</span>
            </div>
        </div>
    </div>

</template>

<script setup>
import { useDataStore } from '@/stores/someData'
import { ref, onMounted } from 'vue'


const myChart_1 = ref()
const someData = useDataStore()
const charttitle_1 = someData.chartData_1.title
const chartClassify_1 = someData.chartData_1.classify

function drawPieSlice(ctx, centerX, centerY, radius, startAngle, endAngle, text, color) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.arc(centerX, centerY, radius, startAngle, endAngle);
    ctx.closePath();
    ctx.fill();
}

function drawText(ctx, centerX, centerY, radius, startAngle, endAngle, text) {
    ctx.fillStyle = 'white';
    let textX = centerX + radius / 2 * Math.cos(startAngle + (endAngle - startAngle) / 2)
    let textY = centerY + radius / 2 * Math.sin(startAngle + (endAngle - startAngle) / 2)
    ctx.font = "10px Arial";
    ctx.fillText(text, textX, textY)
}


function drawMyChart_1() {
    myChart_1.value.width = 200;
    myChart_1.value.height = 200;
    let ctx = myChart_1.value.getContext("2d");
    let startAngle = 0
    let endAngle = 0
    for (let key in chartClassify_1) {
        endAngle += 2 * Math.PI * chartClassify_1[key][0]
        drawPieSlice(ctx, 100, 100, 100, startAngle, endAngle, key, chartClassify_1[key][1]);
        drawText(ctx, 100, 100, 100, startAngle, endAngle, chartClassify_1[key][0] * 100 + '%')
        startAngle += 2 * Math.PI * chartClassify_1[key][0]
    }
}


onMounted(() => {
    drawMyChart_1()
})
</script>

<style scoped>
.graph-one {
    margin-right: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    position: relative;
}


.label {
    display: flex;
    flex-direction: column;
    position: absolute;
    bottom: 20px;
    right: 20px;

}

.label>div {
    display: flex;
    flex-direction: row;
    font-size: 10px;
    line-height: 20px;
}

.label>div>span:nth-child(1) {
    width: 20px;
    height: 20px;
}
</style>