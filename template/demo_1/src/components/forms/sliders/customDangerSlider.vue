
<template>

  <section class="custom-danger-slider">
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
        val: 4,
        lineHeight: 10,
        processStyle: {
          backgroundColor: '#ff5046'
        },
        tooltipStyles: {
          backgroundColor: '#ff5046',
          borderColor: '#ff5046'
        }
      }
    }
  }
}
</script>
