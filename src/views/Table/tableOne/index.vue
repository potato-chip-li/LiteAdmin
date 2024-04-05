<template>
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
        <div class="page-num">
            <div @click="page > 1 ? page -= 1 : page">⬅️</div>
            <div v-for="i in [1, 2, 3, 4, 5]" @click="page = i">{{ i }}</div>
            <div @click="page < 5 ? page += 1 : page">➡️</div>
        </div>
    </table>

</template>

<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router';
import { useRouter } from 'vue-router';

const route = useRoute()
const router = useRouter()
const show_product_list = ref([])
const page = ref(1)

let product_list = []
for (let i = 0; i < 50; i++) {
    product_list.push({
        name: `product${i}`,
        id: '123',
        classify: '日用品',
        num: '3000',
        price: '20￥',
        manufacturer: 'haust',
        shelfTime: '2024/8/8',
        takedownTime: '2024/12/12'
    })
}
show_product_list.value = product_list.slice((page.value - 1) * 20, page.value * 20)

watch(
    () => page.value,
    (newValue, oldValue) => {
        router.push(`tableone?page=${newValue}`)
        show_product_list.value = product_list.slice((page.value - 1) * 20, page.value * 20)
    },
    { immediate: true }
)

</script>

<style scoped>
table {
    background-color: white;
    margin: 10px;
    width: var(--table--width);
    height: var(--table--width);
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

.page-num>div:hover {
    background-color: var(--li-color-hover);
}
</style>