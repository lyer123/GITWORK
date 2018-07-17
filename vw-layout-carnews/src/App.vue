<template>
  <div>
    <header>
      <a href="">二手车</a>
      <h1>汽车新闻</h1>
      <a href="#" class="home"></a>
    </header>
    <div id="app">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
    <footer>
    <div class="loading">
           加载中
    </div>
    <div class="return">
      <a href="#" class="re-top">
        返回顶部
      </a>
    </div>
    <div class="bot-nav">
      <div class="subnav">
        <div class="kuang">
          <a href="" >首页</a>
          <a href="" >新闻</a>
          <a href="" >体育</a>
          <a href="" >娱乐</a>
          <a href="" >女人</a>
          <a href="" >导航</a>
        </div>
      </div>
      <div class="bottom">
        <div class="kind">
        <span>彩版</span>
        <span>触版</span>
        <span>PC版</span>
        <span>客户端</span>
      </div>
      <p class="massage">留言-合作</p>
      <p class="email">copyright@2013Sohu.com</p>
      </div>
    </div>
  </footer>
  </div>

</template>

<script>

export default {
  name: 'App',
  
};
</script>
<style>
 *{margin: 0;padding: 0}
body{
  background-color: #eee;
  height: 100%
}
header{width: 640px;height: 102px;background-color: #fccf04;
  color: #333;
  position: relative;
}
header a{
  font-size: 34px;
  margin-left: 18px;
  line-height: 102px;
  display: block;
  float: left;
  width: 217px;
}
header h1{
  width: 160px;
  font-size: 36px;
  display: block;
  float: left;
  line-height: 102px;
}
header a.home{
  width: 32px;
  height: 30px;
  background:url(./assets/home.png) no-repeat 0 0 /cover;
  display: block;
  position: absolute;
  right: 54px;
  top:31px; 
}
ul.list{
  padding-top: 5px;
}
.item{
  width: 604px;
  height: 124px;
  border: 1px solid #dadada;
  border-radius: 10px;
  margin: 28px auto;
  background-color: #fff;
  padding-left: 19px;
  padding-top: 13px;
  box-sizing: border-box;
  position: relative;
}
.title{
  font-size: 30px;
  color: #333;
  width: 455px;
  line-height: 54px;
}
.info{
  line-height: 45px;
  font-size: 28px;
  color: #a9a9a9;
}
.icon-hot{
  background: url(./assets/hot.png) no-repeat 0 0 /cover;
  width: 33px;
  height: 28px;
  position: absolute;
  right: 86px;
  top: 25px;
}


.wrapper{
  padding: 40px;
  background-color: #fff;
  
}
.wrapper h2{
    font-size: 36px;
    color: #040404;
    font-weight: bold;
    line-height: 66px;
  }
  .subtitle{
    color: #b7b7b7;
    font-size: 28px;
    line-height: 46px;
    padding-bottom: 24px;
    border-bottom: 1px solid #e8e8e8;
  }
  .coverll {
    display:inline-block;
    width:560px;
    height:400px;
    padding: 34px 0 16px;
  }
  .cover-info{
    font-size: 28px;
    line-height: 46px;
    color: #b7b7b7;
    text-align: center;
    padding-bottom: 26px;
  }
  .content{
    font-size: 34px;
    line-height: 60px;
    color: #494a49;
  }
.loading{
  font-size: 28px;
  color: #989898;
  width: 90px;
  height: 30px;
  margin: 0 auto;
}
.return{
  width: 212px;
  height: 60px;
  border:2px solid #d7d7d7;
  border-radius: 4px;
  margin: 34px auto 86px auto;
}
.re-top{
  font-size:26px;
  color: #686868;
  line-height:56px;
  padding-left:56px;
}
.subnav{
  width: 100%;
  height: 80px;
  background-color: #2d2d2d;
}
.kuang{
  width: 550px;
  height: 80px;
  margin: 0 auto;
}
.bottom{
  width: 100%;
  height: 188px;
  background-color: #ffffff;
}
.subnav a{
  float: left;
  font-size: 28px;
  color: #fcfcfc;
  padding-left:25px;
  line-height: 80px;
}
.kind{
  width:550px;
  height: 30px;
  margin:0 auto;
  padding-top: 30px;
}
.kind span{
  font-size:30px;
  padding-left: 52px;
  color: #448ac8;
}
.massage{
  font-size: 30px;
  margin:30px 252px;
}
.email{
  font-size: 20px;
  margin: 0 168px;
  color: #686868;
  
}
</style>

