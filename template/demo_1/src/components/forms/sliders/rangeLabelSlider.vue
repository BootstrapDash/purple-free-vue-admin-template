<template>

  <section class="range-label-slider">
    <vue-slide-bar class="pt-3" v-model="sliderWithLabel.value" :data="sliderWithLabel.data" :range="sliderWithLabel.range" @callbackRange="callbackRange" />
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
      sliderWithLabel: {
        value: 45,
        data: [15, 30, 45, 60, 75, 90, 120],
        range: [
          {
            label: '15 mins'
          },
          {
            label: '30 mins',
            isHide: true
          },
          {
            label: '45 mins'
          },
          {
            label: '1 hr',
            isHide: true
          },
          {
            label: '1 hr 15 mins'
          },
          {
            label: '1 hr 30 mins',
            isHide: true
          },
          {
            label: '2 hrs'
          }
        ]
      }
    }
  },
  methods: {
    callbackRange (val) {
      this.rangeValue = val
    }
  },
}
</script>
<style scoped lang="scss">
.vue-slide-bar-component {
  min-height: auto !important;
}
</style>
