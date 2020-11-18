<template>

  <section class="loading-value-slider">
    <vue-slide-bar v-model="loadingValue" :showTooltip="false" :lineHeight="20" :isDisabled="true" :processStyle="{ backgroundColor: '#35495e' }" />
    <button class="btn btn-primary btn-sm mt-4" @click="startLoad()">Start</button>    
  </section>

</template>

<script>
import VueSlideBar from 'vue-slide-bar'
export default {
  components: {
    VueSlideBar
  },
  data () {
    return {
      loader: null,
      loadingValue: 0
    }
  },
  methods: {
    startLoad () {
      this.loader = setInterval(() => {
        this.loadingValue++
        if (this.loadingValue === 100) {
          // console.log('clear', this.loadingValue)
          clearInterval(this.loader)
        }
      }, 100)
    }
  }
}
</script>
<style scoped lang="scss">
.loading-value-slider {
  .vue-slide-bar-component {
    padding-top: 15px !important;
  }
}
</style>
