
<template>

  <section class="custom-primary-slider">
    <vue-slide-bar class="pt-3" v-model="sliderCustomzie.val" :min="1" :max="10" :processStyle="sliderCustomzie.processStyle" :lineHeight="sliderCustomzie.lineHeight" :tooltipStyles="sliderCustomzie.tooltipStyles" />
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
      sliderCustomzie: {
        val: 6,
        lineHeight: 10,
        processStyle: {
          backgroundColor: '#008ffb'
        },
        tooltipStyles: {
          backgroundColor: '#008ffb',
          borderColor: '#008ffb'
        }
      }
    }
  }
}
</script>
