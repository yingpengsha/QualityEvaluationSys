import Mock from 'mockjs'
import { param2Obj } from '@/utils'

const List = []
const count = 3

for (let i = 0; i < count; i++) {
  List.push(Mock.mock({
    title: '无', // 文章题目
    content: '', // 文章内容
    sno: '101',
    sname: '摇滚兔子',
    reason: '',
    'status|1': ['警告', '严重警告', '处分', '严重处分'],
    ssex: '男',
    sclass: '101',
    time: '2018.9.' + +(i + 1),
    note: '无'
  }))
}

export default {
  getList: config => {
    const { page = 1, limit = 20, sort, sname, status, sclass } = param2Obj(config.url)

    let mockList = List.filter(item => {
      if (sname && item.sname.indexOf(sname) < 0) return false
      if (status && item.status !== status) return false
      if (sclass && item.sclass !== sclass) return false
      return true
    })

    if (sort === '-id') {
      mockList = mockList.reverse()
    }

    const pageList = mockList.filter((item, index) => index < limit * page && index >= limit * (page - 1))

    return {
      total: mockList.length,
      items: pageList
    }
  },
  getPv: () => ({
    pvData: [{ key: 'PC', pv: 1024 }, { key: 'mobile', pv: 1024 }, { key: 'ios', pv: 1024 }, { key: 'android', pv: 1024 }]
  }),
  getBreakRole: () => ({
    id: 120000000001,
    author: { key: 'mockPan' },
    source_name: '原创作者',
    category_item: [{ key: 'global', name: '全球' }],
    comment_disabled: true,
    content: '<p>我是测试数据我是测试数据</p><p><img class="wscnph" src="https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943" data-wscntype="image" data-wscnh="300" data-wscnw="400" data-mce-src="https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943"></p>"',
    content_short: '我是测试数据',
    display_time: +new Date(),
    image_uri: 'https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3',
    platforms: ['a-platform'],
    source_uri: 'https://github.com/PanJiaChen/vue-element-admin',
    status: 'published',
    tags: [],
    title: 'vue-element-admin'
  }),
  createBreakRole: () => ({
    data: 'success'
  }),
  updateBreakRole: () => ({
    data: 'success'
  }),
  MyUpdate: function(index) {
    List.splice(index, 1)
  }
}
