<template>
  <div class="detailWrap">
    <div class="myImg"><slot name="myImg"></slot></div>
    <div class="title">
      <span class="price1">&yen;{{ memberPrice }}</span>
      <span class="price2">市场价: &yen;{{marketPrice}}</span>
    </div>
    <div class="text">
      <p>{{ productName }}</p>
      <span class="text1">剩余库存:{{sellCount}}</span>
      <span class="text2">快递: 限时包邮</span>
    </div>
    <ul class="myUl">
      <li>图文详情</li>
      <li>宝贝评价</li>
    </ul>


  </div>
</template>

<script>
  /*import axios from 'axios'*/
  export default {
    name: "detail",
    props: ['memberPrice','marketPrice','productName',
          'sellCount',
    ]
    /*data() {
      return {
        detail: []
      }
    },
    created() {
      axios.get('../../static/shopdetail.json').then((res) => {
        //console.log(typeof res.data)//字符串
        var item = eval('(' + res.data + ')');
        console.log(item.data.detail);//对象
        this.detail = item.data.detail


      })
    }*/
  }
</script>

<style scoped>
  .detailWrap {
    width: 100%;
    background: #fff;
  }

  .detailWrap .myImg img {
    width: 100%;
  }

  .detailWrap .title {
    height: 100px;
    line-height: 100px;
    padding-left: 10px;
    border-bottom: 1px solid #cccccc;
  }

  .detailWrap .title .price1 {
    font-size: 40px;
    font-weight: bolder;
    color: #B3092C;
  }

  .detailWrap .title .price2 {
    font-size: 14px;
    color: #cccccc;
    text-decoration: line-through;
    padding-left: 10px;
  }

  .detailWrap .text {
    border-bottom: 5px solid #cccccc;
    padding-bottom: 30px;
    padding-left: 30px;
    color: #cccccc;
    font-size: 14px;
  }

  .detailWrap .text p {
    font-size: 20px;
    line-height: 30px;
    margin-bottom: 20px;
  }

  .detailWrap .text .text1 {
    padding-right: 30px;
  }

  .detailWrap .myUl {
    width: 100%;
    border-bottom: 1px solid #cccccc;
    display: flex;
  }

  .detailWrap .myUl li {
    flex: 1;
    text-align: center;
    font-size: 18px;
    line-height: 65px;
    color: #cccccc;
  }


</style>
