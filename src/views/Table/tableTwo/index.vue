<template>
    <div class="table-container">
        <table>
            <tr>
                <th>商品名称</th>
                <th>商品编号</th>
                <th>商品类别</th>
                <th>数量</th>
                <th>商品定价</th>
                <th>厂家</th>
                <th>上架时间</th>
                <th>下架时间</th>
            </tr>
            <tr v-for="item in show_product_list">
                <td align="center">{{ item.name }}</td>
                <td align="center">{{ item.id }}</td>
                <td align="center">{{ item.classify }}</td>
                <td align="center">{{ item.num }}</td>
                <td align="center">{{ item.price }}</td>
                <td align="center">{{ item.manufacturer }}</td>
                <td align="center">{{ item.shelfTime }}</td>
                <td align="center">{{ item.takedownTime }}</td>
            </tr>
        </table>
        <div class="page-num">
            <div @click="page > 1 ? page -= 1 : page">⬅️</div>
            <div v-for="i in total_pages" @click="page = i">{{ i }}</div>
            <div @click="page < total_pages ? page += 1 : page">➡️</div>
        </div>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router';
import { useRouter } from 'vue-router';
import { useProductStore } from '@/stores/productManage'

const route = useRoute()
const router = useRouter()
const show_product_list = ref([])
const page = ref(1)
const productManage = useProductStore()



const product_list = productManage.product_list.filter((ele) => {
    let Time = new Date(ele.takedownTime)
    return (Time.getTime() < Date.now())
})
const total_pages = Math.ceil(product_list.length / 20)

show_product_list.value = product_list.slice((page.value - 1) * 20, page.value * 20)

watch(
    () => page.value,
    (newValue, oldValue) => {
        router.push(`tabletwo?page=${newValue}`)
        show_product_list.value = product_list.slice((page.value - 1) * 20, page.value * 20)
    },
    { immediate: true }
)

</script>

<style scoped>
.table-container {
    margin: 10px;
    width: var(--content--w-and-h);
    height: var(--content--w-and-h);
}


table {
    background-color: white;
    width: 100%;
    height: 80%;
    overflow-y: auto;
}

tr {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    width: 100%;
}

th,
td {
    /* width: 1001px; */
    flex: 1;
    height: 20px;
    /* margin: 0 20px; */
    border: 1px solid black;
}

.page-num {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 80px;
}

.page-num>div {
    width: 20px;
    height: 20px;
    margin: 20px 10px;
    box-sizing: border-box;

    border-radius: 5px;
    text-align: center;
    line-height: 20px;
    background-color: var(--li-color);
    color: white;
    cursor: pointer;
}
</style>
