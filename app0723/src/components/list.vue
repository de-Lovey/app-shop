<template>
    <div class="listWrap">
        <ul>
          <li>
            <div class="imgBox"><slot name="Img"></slot></div>
            <div class="box">
                <p class="text">{{goodsTitle}}</p>
                <p class="priceWrap">&yen;{{price}}</p>
            </div>
          </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "list",
        /*props:{
          goodsTitle:{
            type:String,
            default:''
          },
          price:{
            type:String,
            default:''
          }
        }*/
        props:['goodsTitle','price']
    }
</script>

<style scoped>
  .listWrap{
    display:inline-block;
    margin-left: 1%;
    margin-top:1%;
  }
  .listWrap li{
    background: #fff;
    display:inline-block;
  }
  .listWrap img{
    width: 100%;
  }
  .listWrap .box{
    padding:8px 22px;
  }
  .listWrap .text{
    width: 100%;
    height: 50px;
    margin:5% 0 5%;
    line-height: 20px;
    color:#333333;
  }
  .listWrap .priceWrap{
    margin:5% 0 5%;
    line-height: 20px;
    width: 100%;
    font-size:14px;
    color:#b3092c;
  }



</style>
