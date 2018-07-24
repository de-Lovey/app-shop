<template>
  <div>
    <input type="text" v-model="product.productName"/>
    <input type="text" v-model="product.sellPrice"/>
    <input type="text" v-model="product.sellCount"/>
    <input type="text" v-model="product.memberPrice"/>
    <input type="text" v-model="product.marketPrice"/>
    <textarea  cols="50">
      {{product.productName}}
      {{product.sellPrice}}
      {{product.sellCount}}
      {{product.memberPrice}}
      {{product.marketPrice}}
    </textarea>
    <button @click="fn()">确定</button>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: "editDetail",
    data() {
      return {
        product: {}
      }
    },
    methods:{
      fn(){
       //var thisProduct=JSON.stringify(this.product);
        this.$router.push({
            path:'/newDetail',
          query:{
              test:this.product
          }
        })
      }
    }
    ,
    created() {
      var productId = this.$route.params.id;
      console.log("productId");
      console.log(productId);
      axios.get('../../static/shopdetail.json').then((res) =>{
        var item = eval('(' + res.data + ')');
        console.log(typeof (item));
        console.log(item);
        console.log(item.data.coverImage);
        this.product = item.data;

      })
    }
  }
</script>

<style scoped>

</style>
