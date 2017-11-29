//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval:2000,
    duration: 1000,
    // motto: 'Hello World',
    // userInfo: {},
    // Industry: {}
  },
  changeIndicatorDots: function (e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function (e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function (e) {
    this.setData({
      interval: e.detail      
    })
  },
  durationChange: function (e) {
    this.setData({
      duration: e.detail.value
    })
  }
  // },
  // onPullDownRefresh: function () {
  //   wx.request({
  //     url: 'http://127.0.0.1:8020/wakespace/weixinxioachengxu/images/qqnews.json', 
  //     data: {
  //       x: '',
  //       y: ''
  //     },
  //     header: {
  //       'content-type': 'application/json' 
  //     },
  //     success: function (res) {
  //       console.log(res.data)
  //       wx.stopPullDownRefresh()

  //     },
  //     requestTask.abort() 
  //   })
  // }
})