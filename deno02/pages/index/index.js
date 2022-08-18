// index.js
// 获取应用实例

Page({

  /**
   * 页面的初始数据
   */
  data: {
    region:['安徽省','芜湖市','镜湖区'],
    now:{
      temp:0,
      text:'未知',
      icon:'999',
      humidity:0,
      pressure:0,
      vis:0,
      windDir:0,
      windSpeed:0,
      windScale:0
    }
  },
  /**
   * 更新省、市、区信息
   */
  regionChange:function(e){
    this.setData({region:e.detail.value});
    //console.log(this.data.region)
    this.getCityId(this.getWeather);
  },

  /**
   * 获取城市ID
   */
  getCityId:function(){
    var that = this;
    var id = ''; 
    wx.request({
      url: 'https://geoapi.qweather.com/v2/city/lookup',
      data:{
        location:that.data.region[1],
        key:'a6bd0cb1b7734188a6b5b850323f2813'
      },
      success:function(res){
        id = res.data.location[0].id;
        console.log(id);
        that.getWeather(id);
        //return id;
        //console.log(that.data.id)
        //console.log(res.data)
      },
    })
  },

  /**
   * 获取实况天气数据
   */
  getWeather:function(cityId){
    var that = this;
    wx.request({
      url: 'https://devapi.qweather.com/v7/weather/now',
      data:{
        location:cityId,
        key:'a6bd0cb1b7734188a6b5b850323f2813'
      },
      success:function(res){
        that.setData({now:res.data.now})
        console.log(res.data);
      }
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //console.log(this.data.region[1])
    //console.log(this.getCityId());
    //this.getWeather();
    this.getCityId(this.getWeather);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})