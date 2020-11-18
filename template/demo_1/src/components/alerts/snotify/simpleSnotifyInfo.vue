<template>
  <section class="simple-snotify">
    <button class="btn btn-outline-success mx-auto" v-on:click="showSnotify">Click here!</button>
    <vue-snotify></vue-snotify>
  </section>
</template>

<script scoped lang="js">
  import Vue from 'vue'
  import Snotify, { SnotifyPosition} from 'vue-snotify'
  const options = {
    toast: {
      position: SnotifyPosition.rightTop,
    }
  }
  Vue.use(Snotify,options)
  export default {
    name: 'simple-snotify',
    methods: {
      showSnotify () {
        this.$snotify.info('Example body content', {
          timeout: 2000,
          showProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
        });
        
      }
    }
  }
</script>

<style scoped lang="scss">
.simple-snotify {
  display: flex;
  justify-content: center;
}
</style>
