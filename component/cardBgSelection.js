// components/cardBgSelection/cardBgSelection.js
const app = getApp();
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    canTab: {
      type: Boolean,
      value: ''
    },
    //选择名片背景标识id
    templateId: {
      type: Number,
      value: 1,
      observer: function (newVal, oldVal) {
        // 属性值变化时执行
        // console.log(newVal,oldVal);
        // console.log('这里是有没有数据',this.data.cardTemplateList.length > 1);
        // console.log('有没有请求到数组啊啊',this.data.cardTemplateList.length);
        if (newVal == this.data.templateId){
          return
        }
        if (this.data.cardTemplateList.length !== 0){
          // console.log('jjjjjjjjjjjjjjjjjjjjjj', newVal, this.data.cardTemplateList);
          this.updateCardBg(newVal, this.data.cardTemplateList);
        }
      }
    }
  },
  attached(){
    
  },
  /**
   * 组件的初始数据
   */
  data: {
    // //初始化名片样式类
    // cardClassName: 'user-card-template1',
    // //初始化名片背景src
    // cardImageSrc: '/images/business-card-bg1.png',
    cardSmallBgList: [
      {
        toViewId: 'A',
        src: "/images/business-card-small-bg1.png"
      },
      {
        toViewId: 'B',
        src: "/images/business-card-small-bg2.png"
      },
      {
        toViewId: 'C',
        src: "/images/business-card-small-bg3.png"
      },
      {
        toViewId: 'D',
        src: "/images/business-card-small-bg4.png"
      },
      {
        toViewId: 'E',
        src: "/images/business-card-small-bg5.png"
      },
      {
        toViewId: 'F',
        src: "/images/business-card-small-bg6.png"
      },
      {
        toViewId: 'G',
        src: "/images/business-card-small-bg7.png"
      },
      {
        toViewId: 'H',
        src: "/images/business-card-small-bg8.png"
      },
      {
        toViewId: 'I',
        src: "/images/business-card-small-bg9.png"
      },
      {
        toViewId: 'J',
        src: "/images/business-card-small-bg10.png"
      },
      {
        toViewId: 'K',
        src: "/images/business-card-small-bg11.png"
      },
      {
        toViewId: 'L',
        src: "/images/business-card-small-bg12.png"
      },
      {
        toViewId: 'M',
        src: "/images/business-card-small-bg13.png"
      },
      {
        toViewId: 'N',
        src: "/images/business-card-small-bg14.png"
      },
      {
        toViewId: 'O',
        src: "/images/business-card-small-bg15.png"
      },
      {
        toViewId: 'P',
        src: "/images/business-card-small-bg16.png"
      },
    ],
    cardTemplateList:[],
    viewCode:'A'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    //选择名片风格
    selectCardBg(e) {
      let viewCode = e.currentTarget.id
      if (viewCode === this.data.viewCode) return
      let idx = this.contains(this.data.cardTemplateList, viewCode,'viewCode');
      // if (!idx) {
      //   console.log('没有此名片id');
      //   return
      // }
      console.log(e)
      console.log(this.data.cardTemplateList);
      let cardClassName = this.data.cardTemplateList[idx].carteClassName;
      let cardImageSrc = this.data.cardTemplateList[idx].bigPicPath;
      let toCanvasMethodName = this.data.cardTemplateList[idx].poster;
      let id = this.data.cardTemplateList[idx].id;
      console.log(id);
      console.log(this.data.canTab);
      if (this.data.canTab == false) return
      this.setData({
        viewCode,
        templateId: id
      })
      this.triggerEvent('selectBgEvent', { 'cardClassName': cardClassName, 'cardImageSrc': cardImageSrc, 'templateId': id, 'toCanvasMethodName': toCanvasMethodName});
    },
    contains(arrays, id,value) {
      // console.log(arrays.length)
      var i = arrays.length;
      while (i--) {
        if (arrays[i][value] == id) {
          return i;
        }
      }
      return false;
    },
    async getCardList(){
      let response = {
        "success":true,
        "level":"info",
        "type":"normal",
        "bizType":"normal",
        "code":"00",
        "message":null,
        "data":[
            {
                "keyWords":null,
                "order":"create_time DESC",
                "pageSize":20,
                "pageNum":1,
                "totalPage":0,
                "id":1,
                "templateName":"名片模板一",
                "viewCode":"A",
                "poster":"cardPoster1",
                "carteClassName":"user-card-template1",
                "smallPicPath":"/images/business-card-small-bg1.png",
                "bigPicPath":"/images/business-card-bg1.png",
                "delFlag":false,
                "creatId":1,
                "creatTime":1555896016000,
                "modifyId":1,
                "modifyTime":1555896016000
            },
            {
                "keyWords":null,
                "order":"create_time DESC",
                "pageSize":20,
                "pageNum":1,
                "totalPage":0,
                "id":2,
                "templateName":"名片模板二",
                "viewCode":"B",
                "poster":"cardPoster2",
                "carteClassName":"user-card-template2",
                "smallPicPath":"/images/business-card-small-bg2.png",
                "bigPicPath":"https://img0.912688.com/mc-business-card-bg2.png",
                "delFlag":false,
                "creatId":1,
                "creatTime":1557910958000,
                "modifyId":1,
                "modifyTime":1557910963000
            },
            {
                "keyWords":null,
                "order":"create_time DESC",
                "pageSize":20,
                "pageNum":1,
                "totalPage":0,
                "id":3,
                "templateName":"名片模板三",
                "viewCode":"C",
                "poster":"cardPoster3",
                "carteClassName":"user-card-template3",
                "smallPicPath":"/images/business-card-small-bg3.png",
                "bigPicPath":"https://img0.912688.com/mc-business-card-bg3.png",
                "delFlag":false,
                "creatId":1,
                "creatTime":1557914066000,
                "modifyId":1,
                "modifyTime":1557914066000
            },
            {
                "keyWords":null,
                "order":"create_time DESC",
                "pageSize":20,
                "pageNum":1,
                "totalPage":0,
                "id":4,
                "templateName":"名片模板四",
                "viewCode":"D",
                "poster":"cardPoster4",
                "carteClassName":"user-card-template4",
                "smallPicPath":"/images/business-card-small-bg4.png",
                "bigPicPath":"https://img0.912688.com/mc-business-card-bg4.png",
                "delFlag":false,
                "creatId":1,
                "creatTime":1557914096000,
                "modifyId":1,
                "modifyTime":1557914096000
            },
            {
                "keyWords":null,
                "order":"create_time DESC",
                "pageSize":20,
                "pageNum":1,
                "totalPage":0,
                "id":5,
                "templateName":"名片模板五",
                "viewCode":"E",
                "poster":"cardPoster5",
                "carteClassName":"user-card-template5",
                "smallPicPath":"/images/business-card-small-bg5.png",
                "bigPicPath":"https://img0.912688.com/mc-business-card-bg5.png",
                "delFlag":false,
                "creatId":1,
                "creatTime":1557914096000,
                "modifyId":1,
                "modifyTime":1557914096000
            },
            {
                "keyWords":null,
                "order":"create_time DESC",
                "pageSize":20,
                "pageNum":1,
                "totalPage":0,
                "id":6,
                "templateName":"名片模板六",
                "viewCode":"F",
                "poster":"cardPoster6",
                "carteClassName":"user-card-template6",
                "smallPicPath":"/images/business-card-small-bg6.png",
                "bigPicPath":"https://img0.912688.com/mc-business-card-bg6.png",
                "delFlag":false,
                "creatId":1,
                "creatTime":1557914096000,
                "modifyId":1,
                "modifyTime":1557914096000
            },
            {
                "keyWords":null,
                "order":"create_time DESC",
                "pageSize":20,
                "pageNum":1,
                "totalPage":0,
                "id":7,
                "templateName":"名片模板七",
                "viewCode":"G",
                "poster":"cardPoster7",
                "carteClassName":"user-card-template7",
                "smallPicPath":"/images/business-card-small-bg7.png",
                "bigPicPath":"https://img0.912688.com/mc-business-card-bg7.png",
                "delFlag":false,
                "creatId":1,
                "creatTime":1557914096000,
                "modifyId":1,
                "modifyTime":1557914096000
            },
            {
                "keyWords":null,
                "order":"create_time DESC",
                "pageSize":20,
                "pageNum":1,
                "totalPage":0,
                "id":8,
                "templateName":"名片模板八",
                "viewCode":"H",
                "poster":"cardPoster8",
                "carteClassName":"user-card-template8",
                "smallPicPath":"/images/business-card-small-bg8.png",
                "bigPicPath":"https://img0.912688.com/mc-business-card-bg8.png",
                "delFlag":false,
                "creatId":1,
                "creatTime":1557914096000,
                "modifyId":1,
                "modifyTime":1557914096000
            },
            {
                "keyWords":null,
                "order":"create_time DESC",
                "pageSize":20,
                "pageNum":1,
                "totalPage":0,
                "id":9,
                "templateName":"名片模板九",
                "viewCode":"I",
                "poster":"cardPoster9",
                "carteClassName":"user-card-template9",
                "smallPicPath":"/images/business-card-small-bg9.png",
                "bigPicPath":"https://img0.912688.com/mc-business-card-bg9.png",
                "delFlag":false,
                "creatId":1,
                "creatTime":1557914096000,
                "modifyId":1,
                "modifyTime":1557914096000
            },
            {
                "keyWords":null,
                "order":"create_time DESC",
                "pageSize":20,
                "pageNum":1,
                "totalPage":0,
                "id":10,
                "templateName":"名片模板十",
                "viewCode":"J",
                "poster":"cardPoster10",
                "carteClassName":"user-card-template10",
                "smallPicPath":"/images/business-card-small-bg10.png",
                "bigPicPath":"https://img0.912688.com/mc-business-card-bg10.png",
                "delFlag":false,
                "creatId":1,
                "creatTime":1557914133000,
                "modifyId":1,
                "modifyTime":1557914133000
            },
            {
                "keyWords":null,
                "order":"create_time DESC",
                "pageSize":20,
                "pageNum":1,
                "totalPage":0,
                "id":11,
                "templateName":"名片模板十一",
                "viewCode":"K",
                "poster":"cardPoster11",
                "carteClassName":"user-card-template11",
                "smallPicPath":"/images/business-card-small-bg11.png",
                "bigPicPath":"https://img0.912688.com/mc-business-card-bg11.png",
                "delFlag":false,
                "creatId":1,
                "creatTime":1557914133000,
                "modifyId":1,
                "modifyTime":1557914133000
            },
            {
                "keyWords":null,
                "order":"create_time DESC",
                "pageSize":20,
                "pageNum":1,
                "totalPage":0,
                "id":12,
                "templateName":"名片模板十二",
                "viewCode":"L",
                "poster":"cardPoster12",
                "carteClassName":"user-card-template12",
                "smallPicPath":"/images/business-card-small-bg12.png",
                "bigPicPath":"https://img0.912688.com/mc-business-card-bg12.png",
                "delFlag":false,
                "creatId":1,
                "creatTime":1557914133000,
                "modifyId":1,
                "modifyTime":1557914133000
            },
            {
                "keyWords":null,
                "order":"create_time DESC",
                "pageSize":20,
                "pageNum":1,
                "totalPage":0,
                "id":13,
                "templateName":"名片模板十三",
                "viewCode":"M",
                "poster":"cardPoster13",
                "carteClassName":"user-card-template13",
                "smallPicPath":"/images/business-card-small-bg13.png",
                "bigPicPath":"https://img0.912688.com/mc-business-card-bg13.png",
                "delFlag":false,
                "creatId":1,
                "creatTime":1557914133000,
                "modifyId":1,
                "modifyTime":1557914133000
            },
            {
                "keyWords":null,
                "order":"create_time DESC",
                "pageSize":20,
                "pageNum":1,
                "totalPage":0,
                "id":14,
                "templateName":"名片模板十四",
                "viewCode":"N",
                "poster":"cardPoster14",
                "carteClassName":"user-card-template14",
                "smallPicPath":"/images/business-card-small-bg14.png",
                "bigPicPath":"https://img0.912688.com/mc-business-card-bg14.png",
                "delFlag":false,
                "creatId":1,
                "creatTime":1557914133000,
                "modifyId":1,
                "modifyTime":1557914133000
            },
            {
                "keyWords":null,
                "order":"create_time DESC",
                "pageSize":20,
                "pageNum":1,
                "totalPage":0,
                "id":15,
                "templateName":"名片模板十五",
                "viewCode":"O",
                "poster":"cardPoster15",
                "carteClassName":"user-card-template15",
                "smallPicPath":"/images/business-card-small-bg15.png",
                "bigPicPath":"https://img0.912688.com/mc-business-card-bg15.png",
                "delFlag":false,
                "creatId":1,
                "creatTime":1557914133000,
                "modifyId":1,
                "modifyTime":1557914133000
            },
            {
                "keyWords":null,
                "order":"create_time DESC",
                "pageSize":20,
                "pageNum":1,
                "totalPage":0,
                "id":16,
                "templateName":"名片模板十六",
                "viewCode":"P",
                "poster":"cardPoster16",
                "carteClassName":"user-card-template16",
                "smallPicPath":"/images/business-card-small-bg16.png",
                "bigPicPath":"https://img0.912688.com/mc-business-card-bg16.png",
                "delFlag":false,
                "creatId":1,
                "creatTime":1557914133000,
                "modifyId":1,
                "modifyTime":1557914133000
            }
        ],
        "tdkVo":null
      }
      this.setData({
        cardTemplateList:response.data
      })
      console.log(response.data);
      this.updateCardBg(this.data.templateId, response.data);
      
    },
    updateCardBg(id, cardTemplateList) {
      id = id || 1;
      // console.log(id);
      cardTemplateList = cardTemplateList || this.data.cardTemplateList;
      let idx = this.contains(cardTemplateList, id, 'id');
      // if(!idx){
      //   console.log('没有此名片id');
      //   return
      // }
      // console.log(idx);
      // console.log(cardTemplateList);
      let viewCode = cardTemplateList[idx].viewCode || 'A';
      this.setData({
        cardTemplateList,
        viewCode
      })
      let cardClassName = cardTemplateList[idx].carteClassName;
      let cardImageSrc = cardTemplateList[idx].bigPicPath;
      let toCanvasMethodName = cardTemplateList[idx].poster;
      // console.log(this.data.canTab);
      if (this.data.canTab == false) return
      // console.log('1111');
      this.triggerEvent('initBgEvent', { 'cardClassName': cardClassName, 'cardImageSrc': cardImageSrc, 'toCanvasMethodName': toCanvasMethodName });
    }
    // getUpdate(newVal, cardTemplateList){
    //   if (cardTemplateList.length > 0) {
    //     this.updateCardBg(newVal);
    //   } else {
    //     setTimeout(()=>{
    //       this.getUpdate(newVal);
    //     },1000)
    //   }
    // }
  }
})
