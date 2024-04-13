<template>
    <div>
        <span>商品名称</span><input type="text" v-model="product.name">
        <span>商品编号</span><input type="text" v-model="product.id">
        <span>商品类别</span><input type="text" v-model="product.classify">
        <span>数量</span><input type="number" v-model="product.num">
        <span>商品定价￥</span><input type="number" v-model="product.price">
        <span>厂家</span><input type="text" v-model="product.manufacturer">
        <span>上架时间</span><input type="date" v-model="product.shelfTime">
        <span>下架时间</span><input type="date" v-model="product.takedownTime">
        <button @click="submit">提交</button>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useProductStore } from '@/stores/productManage'
const productManage = useProductStore()

const product = ref({
    name: 'addproduct',
    id: '123',
    classify: '日用品',
    num: '3000',
    price: '20',
    manufacturer: 'hhh',
    shelfTime: '2024-02-16',
    takedownTime: '2024-12-13'
})

const submit = () => {
    productManage.addProduct(product.value)
    alert("添加成功")


}
</script>

<style scoped>
div {
    margin: 10px;
    width: var(--content--w-and-h);
    height: var(--content--w-and-h);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

div input {
    width: 300px;
    height: 30px;
    margin-bottom: 20px;
}

button {
    background-color: var(--li-color);
    color: white;
    width: 60px;
    height: 30px;
    cursor: pointer;
}

button:hover {
    background-color: var(--li-color-hover);
}
</style>