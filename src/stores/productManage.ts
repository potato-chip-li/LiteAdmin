import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useProductStore = defineStore('productManage', ()=>{
    let raw_product_list = []
    for (let i = 0; i < 50; i++) {
        raw_product_list.push({
            name: `product${i}`,
            id: '123',
            classify: '日用品',
            num: '3000',
            price: '20',
            manufacturer: 'hhh',
            shelfTime: '2024-8-8',
            takedownTime: '2024-12-12'
        })
    }
    
    const product_list = ref(raw_product_list)
    
    function addProduct(product) {
      product_list.value.unshift(product)
    } 
    
    return { product_list,addProduct }
    })