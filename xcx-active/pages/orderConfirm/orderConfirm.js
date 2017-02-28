// pages/orderConfirm/orderConfirm.js
Page({
  data: {
    id: 0,
    itemId:'',
    companyId:'',
    img:'',
    defauliImg:'',
    name:'',
    companyName:'',
    norm:'',
    units:'',
    retailPrice:0,
    moq:'',
    coupon: 0,
    freight: 0,
    goodsnum: 1
  },
  onLoad: function (options) {
    console.log(options)
    this.setData({
      id: options.id,
      itemId: options.itemId,
      companyId:options.companyId,
      img: options.img,
      defauliImg:options.defauliImg,
      name: options.name,
      companyName: options.companyName,
      norm: options.norm,
      units: options.units,
      retailPrice: parseInt(options.retailPrice),
      moq: parseInt(options.moq),
    })
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
  addrOptFn: function () {
    wx.navigateTo({
      url: '../addrOpt/addrOpt'
    })
  },
  couponsOptFn: function () {
    wx.navigateTo({
      url: '../coupons/coupons'
    })
  }
})