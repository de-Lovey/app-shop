<template>
    <div>
      <Detail :memberPrice="newProduct.memberPrice"
              :marketPrice="newProduct.marketPrice" :productName="newProduct.productName"
              :sellCount="newProduct.sellCount">
        <img :src="newProduct.coverImage" alt="" slot="myImg">
      </Detail>
    </div>
</template>

<script>
    import Detail from '../components/detail'
      export default {
        name: "newDetail",
        components:{
          Detail
        },
        data() {
          return {
            newProduct: {}
          }
        },
      created(){
        console.log('11111111111111111111111');
        console.log(this.$route.query.test);
       // var item = eval('(' + this.$route.query.test + ')');
        this.newProduct = this.$route.query.test;
      }
    }
</script>

<style scoped>

</style>
