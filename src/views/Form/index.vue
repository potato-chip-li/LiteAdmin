<template>
    <form action="" method="post">
        <span>商品名称</span><input type="text">
        <span>数目</span><input type="number">
        <span>价格</span><input type="text">
        <span>分类</span><input type="text">
        <span>标签</span><input type="text">
        <span>上架时间</span><input type="time">
        <span>下架时间</span><input type="time">
        <button type="submit">提交</button>
    </form>
</template>

<style scoped>
form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

form input {
    width: 300px;
    height: 30px;
    margin-bottom: 20px;
}

button {
    background-color: var(--li-color);
    color: white;
    width: 60px;
    height: 30px;
}
</style>