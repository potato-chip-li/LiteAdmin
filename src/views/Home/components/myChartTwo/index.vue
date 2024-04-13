<template>
    <div class="graph-two">
        <div class="toggle-chart">
            <span>折线图</span>
            <span>柱状图</span>
        </div>
        <div>
            <canvas ref="myChart_2"></canvas>
        </div>
        <div>&nbsp;</div>
    </div>
</template>

<style>
.graph-two {
    margin-right: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    position: relative;
}


.toggle-chart>span {
    background-color: white;
    border-radius: 2px;
    border: solid var(--li-color) 2px;
    margin: 0 5px;
}
</style>