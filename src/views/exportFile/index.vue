<template>
    <div class="exportfile-container">
        <button @click="exportRawFile">点击我给你一个源文件</button>
        <button @click="exportZipFile">点击我给你一个zip压缩文件</button>
    </div>
</template>

<script setup>
function exportRawFile() {
    window.open("https://github.com/potato-chip-li/bookManage")
}
function exportZipFile() {
    window.open("https://github.com/potato-chip-li/bookManage/archive/refs/heads/main.zip")
}
</script>

<style>
.exportfile-container {
    margin: 10px;
    width: var(--content--w-and-h);
    height: var(--content--w-and-h);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}

.exportfile-container>button {
    width: 200px;
    height: 50px;
    text-align: center;
    background-color: var(--li-color);
    margin: 50px;
    color: white;
    border-radius: 10px;
}

.exportfile-container>button:hover {
    background-color: var(--li-color-hover);
}
</style>