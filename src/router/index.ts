import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/views/Layout/index.vue'
import Home from '@/views/Home/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'layout',
      component: Layout,
      children: [
        {
          path: '/home',
          name: 'home',
          component : Home
        },
        {
          path: '/table',
          name: '表格',
          meta: { title: '表格' },
          redirect: '/table/tableone',
          children: [
            {
              path: 'tableone',
              name: '表格1',
              // meta: { title: '表格1' },
              component: () => import('@/views/Table/tableOne/index.vue')
            },
            {
              path: 'tabletwo',
              name: '表格2',
              // meta: { title: '表格2' },
              component: () => import('@/views/Table/tableTwo/index.vue')
            },

          ]
        },
        {
          path: '/form',
          name: '表单',
          component: () => import('@/views/Form/index.vue'),
          
        },
        {
          path: '/echarts',
          name: 'echarts',
          component: () => import('@/views/Echarts/index.vue'),
          children: [
            {
              path: 'echartone',
              name: 'echart1',
              component: () => import('@/views/Echarts/echartOne/index.vue')
            },
            {
              path: 'echarttwo',
              name: 'echart2',
              component: () => import('@/views/Echarts/echartTwo/index.vue')
            },
          ]
        },
        {
          path: '/exportfile',
          name: 'Excel&Zip',
          component: () => import('@/views/exportFile/index.vue')
        },
        {
          path: '/screen',
          name: '可视化大屏',
          component: () => import('@/views/Screen/index.vue'),
          children: [
            {
              path: 'screenone',
              name: '屏幕1',
              component: () => import('@/views/Screen/screenOne/index.vue')
            },
            {
              path: 'screentwo',
              name: '屏幕2',
              component: () => import('@/views/Screen/screenTwo/index.vue')
            },
          ]
        },
        {
          path: '/componentManage',
          name: '组件管理',
          component: () => import('@/views/componentManage/index.vue')
        },
        {
          path: '/theme',
          name: '主题配置',
          component: () => import('@/views/Theme/index.vue')
        },
        {
          path: '/customerService',
          name: '智能客服',
          component: () => import('@/views/customerService/index.vue')
        },
        {
          path: '/link',
          name: '外部链接',
          component: () => import('@/views/Link/index.vue')
        },
        {
          path: '/manage',
          name: '系统管理',
          component: () => import('@/views/Manage/index.vue')
        },
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/Login/index.vue')
    }
  ]
})

export default router
