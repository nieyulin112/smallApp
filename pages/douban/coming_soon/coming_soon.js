var functions = require('../functions.js')
var url = 'https://api.douban.com/v2/movie/coming_soon'
var pageSize = 20
Page({
  data: {
    films: [{
      images: {
        medium: 'https://image.baidu.com/search/detail?ct=503316480&z=0&ipn=d&word=%E6%88%91%E4%B8%8D%E6%98%AF%E8%8D%AF%E7%A5%9E&step_word=&hs=0&pn=0&spn=0&di=211200&pi=0&rn=1&tn=baiduimagedetail&is=0%2C0&istype=2&ie=utf-8&oe=utf-8&in=&cl=2&lm=-1&st=-1&cs=2017390255%2C3030149482&os=91591853%2C2699773540&simid=0%2C0&adpicid=0&lpn=0&ln=1527&fr=&fmq=1542245752958_R&fm=result&ic=0&s=undefined&se=&sme=&tab=0&width=&height=&face=undefined&ist=&jit=&cg=&bdtype=0&oriquery=&objurl=http%3A%2F%2Fs4.sinaimg.cn%2Fmw690%2F0079gJWCzy7lYlMDOX9c3%26690&fromurl=ippr_z2C%24qAzdH3FAzdH3Fks52_z%26e3Bftgw_z%26e3Bv54_z%26e3BvgAzdH3FfAzdH3Fks52_8bmm0wc8ma8adxqgq_z%26e3Bip4s&gsm=0&rpstart=0&rpnum=0&islist=&querylist='
      },
      id: 22222,
      title: '肉炒土豆',
      year: '20181212',
      rating: {
        average: 9.8
      },
      directors: [{
        name: '猪肉'
      }, {
        name: '土豆'
      }],
      casts: [{
        name: '花生油'
      }, {
        name: '盐'
      }]
    }],
    hasMore: false,
    showLoading: false,
    start: 0
  },
  onPullDownRefresh: function () {
  },
  scroll: function(e){
    //console.log(e)
  },
  onLoad: function () {
    // var that = this
    // functions.getCity(function(city){
    //   functions.fetchFilms.call(that, url, city, 0, pageSize, function(data){
    //     that.setData({
    //       showLoading: false
    //     })
    //   })
    // })
  },
  loadMore: function(){
    var that = this
    functions.getCity(function(city){
      that.setData({
        loadMoreLoading: true
      })
      functions.fetchFilms.call(that, url, city, that.data.start, pageSize, function(data){
        that.setData({
          loadMoreLoading: false
        })
      })
    })
  },
  viewDetail: function(e){
    var ds = e.currentTarget.dataset;
    wx.navigateTo({
      url: '../detail/detail?id=' + ds.id + '&title=' + ds.title + '&type=coming'
    })
  }
})
