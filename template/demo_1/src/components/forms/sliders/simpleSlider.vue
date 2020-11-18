<template>

  <section class="simple-slider">
    <vue-slide-bar class="pt-3" v-model="simpleValue"/>
  </section>

</template>

<script>
import VueSlideBar from 'vue-slide-bar'
export default {
  name: 'simple-slider',
  components: {
    VueSlideBar
  },
  data () {
    return {
      simpleValue: 50
    }
  }
}
</script>
