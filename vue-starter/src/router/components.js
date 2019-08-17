import Layout2 from '@/layout/Layout2'

export default [{
  path: '/index',
  component: Layout2,
  children: [{
    path: 'statistics',
    name:'indexStatistics',
    meta:{
      title:'统计'
    },
    component: resolve =>require(['@/view/statistics/statistics'],resolve)
  }]
}]
