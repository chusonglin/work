// pages/coupons/coupons.js
Page({
  data: {
    isReceive: "true",
    receiveData: [{
      quota: "100",
      requirement: "满500元可用"
    }, {
      quota: "50",
      requirement: "满240元可用"
    }, {
      quota: "70",
      requirement: "满300元可用"
    }, {
      quota: "10",
      requirement: "满60元可用"
    }],
    unreceiveData: [{
      quota: "200",
      requirement: "满1500元可用"
    }, {
      quota: "300",
      requirement: "满1800元可用"
    }, {
      quota: "60",
      requirement: "满600元可用"
    }, {
      quota: "90",
      requirement: "满800元可用"
    }]
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  },
  receiveTabFn: function () {
    this.setData({
      isReceive: true
    })
  },
  unreceiveTabFn: function () {
    this.setData({
      isReceive: ""
    })
  },
  receiveFn: function () {
    wx.showToast({
      title: '',
      icon: 'success',
      duration: 2000
    })
  },
  unreceiveFn: function () {
    wx.showToast({
      title: '领取成功',
      icon: 'success',
      duration: 500
    })
  }

})