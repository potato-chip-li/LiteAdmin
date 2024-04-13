import { ref, computed } from 'vue'
import { defineStore } from 'pinia'


export const useDataStore = defineStore('someData', () => {
  const amounts = ref({
    "交易量":1000,
    "收益量":1000,
    "存货量":1000,
    "退货量":10
  })

 const myExplanation = "嗨，我是作者本人，目前还是一名前端学习者，该项目除了使用了echarts没有使用其他外部ui，但本人coding水平可能不太高，敬请谅解，在导航栏的外部链接中有该项目的GitHub地址，下面手写两个统计图玩玩"

 const chartData_1={
    title:'商品类别',
    classify:{
        "日用品":[0.4,'skyblue'],
        "食品":[0.3,'orange'],
        "玩具":[0.2,'pink'],
        "电子产品":[0.1,'greenyellow']
    }
 }

 const chartData_2={
    "第一季度":200,
    "第二季度":300,
    "第三季度":300,
    "第四季度":500
 }
  return { amounts,myExplanation,chartData_1,chartData_2 }
})


