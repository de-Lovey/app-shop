<template>
  <div>
    <ul class="myUl">
      <li v-for="item in arr">
          <router-link :to="{name:'ShopDetial',query:{ id: item.goodsId}}">
                <List :goodsTitle="item.goodsTitle" :price="item.price">
                  <img :src="item.goodsImage" alt="" slot="Img">
                </List>
          </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  //import axios from 'axios'
  import List from '../components/list'
  export default {
    name: "shoplist",
    components:{
      List
    },
    data(){
      return {
        arr:[]
      }
    },
    created(){
      var that = this;
      this.$axios.get('../../static/shoplist.json').then(function
        (res){
        console.log(res.data.data.goodsList);
        that.arr = res.data.data.goodsList;
        //console.log(that.arr);
      })
    }
  }
</script>

<style scoped>

  .myUl li{
    width: 50%;
    display: inline-block;
  }
</style>
