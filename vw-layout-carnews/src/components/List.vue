<template>
  <div>
   <ul class="list">
      <router-link to="/desc" tag='li' class="item" v-for='item in list'>
         <div class="icon-hot"></div>
         <p class="title">{{item.title}}</p>
         <div class="info">
            <span class="time">{{item.time}}</span>
            <span class="author">{{item.name}}</span>
         </div>
      </router-link>
   	
   </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      list:[
      {
          title:'最美自主车致尚XT竞争力分析',
          time:'07-04 06:30',
          name:'搜狐汽车'
      },
      {
          title:'最美自主车致尚XT竞争力分析',
          time:'07-04 06:30',
          name:'搜狐汽车'
      },
      {
          title:'最美自主车致尚XT竞争力分析',
          time:'07-04 06:30',
          name:'搜狐汽车'
      },
      {
          title:'最美自主车致尚XT竞争力分析',
          time:'07-04 06:30',
          name:'搜狐汽车'
      },
      {
          title:'最美自主车致尚XT竞争力分析',
          time:'07-04 06:30',
          name:'搜狐汽车'
      },
      {
          title:'最美自主车致尚XT竞争力分析',
          time:'07-04 06:30',
          name:'搜狐汽车'
      },
      {
          title:'最美自主车致尚XT竞争力分析',
          time:'07-04 06:30',
          name:'搜狐汽车'
      },
      {
          title:'最美自主车致尚XT竞争力分析',
          time:'07-04 06:30',
          name:'搜狐汽车'
      },
      {
          title:'最美自主车致尚XT竞争力分析',
          time:'07-04 06:30',
          name:'搜狐汽车'
      },
      {
          title:'最美自主车致尚XT竞争力分析',
          time:'07-04 06:30',
          name:'搜狐汽车'
      },
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

