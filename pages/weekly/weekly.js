// pages/weekly/weekly.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    weeklyMovieList: [
      {
        name: "教父",
        comment: "最精彩的剧本，最真实的黑帮电影",
        imagePath: "../images/jiaofu.jpg",
        isHighlyRecommended: true,
        id: 1291841
      },
      {
        name: "泰坦尼克号",
        comment: "失去的才是永恒的",
        imagePath: "../images/taitannike.jpg",
        isHighlyRecommended: false,
        id: 1292722
      },
      {
        name: "这个杀手不太冷",
        comment: "最精彩的剧本，最真实的黑帮电影。",
        imagePath: "../images/shashoubuleng.jpg",
        isHighlyRecommended: true,
        id: 1295644
      },
    ],
  },

  f0: function (event) {
    this.setData({
      currentIndex: this.data.weeklyMovieList.length-1
    }) 
  },
  f1: function (event) {
    var movieId = event.currentTarget.dataset.movieId
    console.log(movieId);

    wx.navigateTo({
      url:'/pages/detail/detail?id=' + movieId
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      currentIndex: this.data.weeklyMovieList.length-1
    }) 
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