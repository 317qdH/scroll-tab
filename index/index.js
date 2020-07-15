import comAnimation from '../utils/comAnimation';
const app = getApp()

Page({
  data: {
    //模板id
    templateId: 1,
    userInfoObj: {
      name: '糊一筒',
      mobile: '159****6298',
      mail: 'qdhdl9102314@163.com',
      position: '前端开发',
      companyName: '某某公司',
      avatarPath: '/images/hyt.jpg',
      templateId: 1,
      weChat:'微信未填写',
      address:'地址未填写'

    },
    //传递的模板id
    toViewId: 'G',
    //初始化名片样式类
    cardClassName: 'user-card-template1',
    //初始化名片背景src
    cardImageSrc: '/images/business-card-bg1.png',
    canTab:true
  },
  getCardInfor(e) {
    if (this.data.canTab == false) return
    let templateId = e.detail.templateId;
    let userInfoObj = this.data.userInfoObj;
    userInfoObj.templateId = templateId;
    // wx.setStorage({
    //   key: 'formUserInfo',
    //   data: userInfoObj,
    // })
    this.setData({
      canTab: false,
      templateId,
      userInfoObj
    })
    comAnimation.toggleShow(this, 'slide_card', 0, 1, this.getCardClassName);
    setTimeout(() => {
      let cardClassName = e.detail.cardClassName;
      let cardImageSrc = e.detail.cardImageSrc;
      let toCanvasMethodName = e.detail.toCanvasMethodName;
      this.setData({
        cardClassName,
        cardImageSrc,
        toCanvasMethodName,
        canTab: true
      })
      //,templateId
    }, 400)
  },
  initCardInfor(e) {
    wx.getStorage({
      key: 'BgSelection',
      success: (res) => {
        this.setData({
          cardClassName: res.data.cardClassName,
          cardImageSrc: res.data.cardImageSrc
        })
      },
    })
  },
  onLoad: function () {
    console.log('代码片段是一种迷你、可分享的小程序或小游戏项目，可用于分享小程序和小游戏的开发经验、展示组件和 API 的使用、复现开发问题和 Bug 等。可点击以下链接查看代码片段的详细文档：')
    console.log('https://mp.weixin.qq.com/debug/wxadoc/dev/devtools/devtools.html')
    let cardSelect = this.selectComponent("#cardSelect")
    //移除的名片模板选择
    cardSelect.getCardList();
  },
})
