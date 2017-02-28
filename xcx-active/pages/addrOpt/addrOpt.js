// pages/addrOpt/addrOpt.js
Page({
  data:{
    addrData:[{
      defalut:"true",
      userName:"小明",
      userAddr:"北京市朝阳区望京东大街望京SOHO塔2 C座2705"
    },{
      defalut:"",
      userName:"小强",
      userAddr:"北京市朝阳区望京东大街望京SOHO塔2 C座2705"
    },{
      defalut:"",
      userName:"小亮",
      userAddr:"北京市朝阳区望京东大街望京SOHO塔2 C座2705"
    }]
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },
  editorFn:function(){
    wx.navigateTo({
      url: '../addrEdit/addrEdit'
    })
  },
  creatAddrFn:function(){
    wx.navigateTo({
      url: '../addrEdit/addrEdit'
    })
  }
})