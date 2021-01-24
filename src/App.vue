<template>
  <div id="app">
    <headNav/>
    <PicCanvas/>
  </div>
</template>

<script>
import PicCanvas from './components/PicCanvas';
import headNav from './components/headNav';

export default {
  name: "App",
  data(){
    return{
    }
  },
  components:{
    PicCanvas,
    headNav
  }
};
</script>
<style lang="less" scoped >
  #app{
    margin: 0;
    padding: 0;
    height: 100vh;
    overflow: hidden;
  }

</style>
 