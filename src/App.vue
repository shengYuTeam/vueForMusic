<template>
    <div id="app">
        <div class="header">
            <AppHeader></AppHeader>
        </div>
        <main>
            <router-view/>
        </main>
        <div class="footer">
            <AppFooter></AppFooter>
        </div>
    </div>
</template>

<script>
import AppHeader from './containers/header'
import AppFooter from './containers/footer'
export default {
  name: 'app',
  components : {
    AppHeader,AppFooter,
  }
}
</script>

<style lang="scss">
@import './styles/_base.scss';

</style>
<style>
  #app{
    display:flex;
    flex-direction: column;
    height:100%;
    width:100%;
  }
  .header{
    height:.745rem;
    flex-shrink: 0;
    flex-grow: 0;
  }
  main{
    flex-grow: 1;
    flex-shrink: 1;
    overflow-y: scroll;
  }
  .footer{
    height:.5rem;
    flex-grow:0;
    flex-shrink:0;
  }
</style>
