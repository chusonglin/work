// pages/index/index.js
var gConfig = getApp();

Page({
  data: {},
  onShow: function () {
    // 页面显示
    var that = this;
    wx.getLocation({
      type: 'wgs84',
      success: function (res) {
        var latitude = res.latitude
        var longitude = res.longitude
        that.getRegionFn(latitude, longitude)
      }
    })
    // wx.clearStorage()
  },
  purchaseFn: function (event) {
    /*循环数据查找商品是否加入购物车*/
    var that = this;
    var cartid = event.currentTarget.dataset.cartid;
    var goodslist = that.data.actData;
    for (var i = 0; i < goodslist.length; i++) {
      if (goodslist[i].itemId == cartid) {
        var id = goodslist[i].id
        var itemId = goodslist[i].itemId
        var companyId = goodslist[i].companyId
        var img = goodslist[i].img
        var defauliImg = goodslist[i].defauliImg
        var name = goodslist[i].name
        var companyName = goodslist[i].companyName
        var units = goodslist[i].units
        var norm = goodslist[i].norm
        var retailPrice = goodslist[i].retailPrice
        var moq = goodslist[i].moq

        wx.navigateTo({
          url: '../orderConfirm/orderConfirm?id=' + id + '&itemId=' + itemId + '&img=' + img + '&defauliImg=' + defauliImg + '&name=' + name + '&companyName=' + companyName + '&units=' + units + '&retailPrice=' + retailPrice + '&moq=' + moq + '&norm=' + norm
        })

      }
    }

  },
  decrFn: function (event) {
    /*--产品数量-1--*/
    var that = this;
    var cartid = event.currentTarget.dataset.cartid;
    var goodslist = that.data.actData;
    var sum = that.data.sumretailPrice;
    for (var i = 0; i < goodslist.length; i++) {
      if (goodslist[i].itemId == cartid) {
        if ((goodslist[i].moq - 1) < 1) {
          goodslist[i].moq = 1;
        } else {
          goodslist[i].moq = parseInt(goodslist[i].moq) - 1;
        }
        //break;
      }
    }
    /*--设置data数据，重新渲染页面--*/
    that.setData({
      actData: goodslist,
    })
  },
  incrFn: function (event) {
    /*--产品数量+1--*/
    var that = this;
    var cartid = event.currentTarget.dataset.cartid;
    var goodslist = that.data.actData;
    for (var i = 0; i < goodslist.length; i++) {
      if (goodslist[i].itemId == cartid) {
        goodslist[i].moq = parseInt(goodslist[i].moq) + 1;
        //break; 
      }
    }
    /*--设置data数据，重新渲染页面--*/
    that.setData({
      actData: goodslist,
    })

  },
  joinCarFn: function (event) {
    /*--获取加入购物车的数据--*/
    var that = this;
    var goodslist = that.data.actData;
    var cartid = event.currentTarget.dataset.cartid;
    var storageData = [];
    for (var i = 0; i < goodslist.length; i++) {
      if (goodslist[i].itemId == cartid) {
        goodslist[i].shopcar = true
        that.setData({
          actData: goodslist
        })
      }
    }

    /*循环数据查找商品是否加入购物车*/
    for (var i = 0; i < goodslist.length; i++) {
      if (goodslist[i].shopcar == true) {
        storageData.push({
          id: goodslist[i].id,
          itemId: goodslist[i].itemId,
          img: goodslist[i].img,
          name: goodslist[i].name,
          companyName: goodslist[i].companyName,
          norm: goodslist[i].norm,
          units: goodslist[i].units,
          retailPrice: goodslist[i].retailPrice,
          moq: goodslist[i].moq
        })
      }
    }

    /*--将加入购物车数据存入缓存到后台数据库==ps:要将用户openId一起存入本地，用于辨别同一手机的不同购物车列表--*/
    wx.setStorage({
      key: "storageData",
      data: storageData
    })

    /*--加入购物车成功提示--*/
    wx.showToast({
      title: '成功加入',
      icon: 'shoppingcar',
      duration: 500
    })
  },
  getRegionFn: function (lati, longi) {
    //获取当前所在区域
    var that = this;
    wx.request({
      url: gConfig.http + 'xcx/common/region',
      data: {
        x: lati,
        y: longi
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        var region = res.data.data.region;
        that.getGoodsListFn(region)
      }
    })
  },
  getGoodsListFn: function (region) {
    //商品信息请求
    var that = this;
    wx.request({
      url: gConfig.http + 'xcx/item/promotionitems',
      data: {
        region: region
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        that.setData({
          actData: res.data.data
        })
      }
    })
  }
})