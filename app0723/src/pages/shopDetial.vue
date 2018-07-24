<template>
  <div>
    <button @click="editClick(product.producId)">编辑</button>
    <Detail :memberPrice="product.memberPrice"
            :marketPrice="product.marketPrice" :productName="product.productName"
            :sellCount="product.sellCount">
      <img :src="product.coverImage" alt="" slot="myImg">
    </Detail>

  </div>
</template>

<script>
  import Detail from '../components/detail'
  import axios from 'axios'
  export default {
    name: "shopDetial",
    components:{
      Detail
    },
    data() {
      return {
        product: {}
      }
    },
    methods:
      {
        editClick(id) {
         alert(id);
         this.$router.push({
           name:'EditDetail',
           params:id
         });
        },
      },
    created() {
      //把传过来的id存到变量
      var goodsId = this.$route.query.id;
      console.log(goodsId);
      axios.get('../../static/shopdetail.json').then((res) => {
        console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
        console.log(res.data.productName);
        console.log(typeof(res.data))
        var item = eval('(' + res.data + ')');
        console.log(typeof (item));
        console.log(item);
        //console.log(item.data.coverImage);
        this.product = item.data;
      })
    }
  }

</script>

<style scoped>

</style>
