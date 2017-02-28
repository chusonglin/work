// pages/logs/logs.js
Page({
  data: {},
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    var that = this;
    wx.login({
      success: function (res) {
        console.log(res)
        //获取用户信息 
        wx.getUserInfo({
          success: function (res) {
            console.log(res)
            var userInfo = res.userInfo
            var nickName = userInfo.nickName
            var avatarUrl = userInfo.avatarUrl
            var gender = userInfo.gender //性别 0：未知、1：男、2：女 
            var province = userInfo.province
            var city = userInfo.city
            var country = userInfo.country

            that.setData({
              nickName: nickName,
              avatarUrl: avatarUrl,
              gender: gender,
              province: province,
              city: city,
              country: country
            })
          }
        })
        //获取用户信息
      }
    })


    // wx.getLocation({
    //   type: 'wgs84', //返回可以用于wx.openLocation的经纬度
    //   success: function (res) {
    //     console.log(res)
    //     var latitude = res.latitude
    //     var longitude = res.longitude
    //     // wx.openLocation({
    //     //   latitude: latitude,
    //     //   longitude: longitude,
    //     //   scale: 18,
    //     //   name:"望京大楼",
    //     //   success: function (res) {
    //     //     console.log(res)
    //     //   }
    //     // })
    //   }
    // })


    wx.getLocation({
      type: 'wgs84',
      success: function (res) {
        console.log(res)
        var latitude = res.latitude
        var longitude = res.longitude
        var speed = res.speed
        var accuracy = res.accuracy
        that.setData({
          latitude: latitude,
          longitude: longitude,
          speed: speed,
          accuracy: accuracy
        })
      }
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
  }
})