<script lang='js'>
import {
  Doughnut
} from 'vue-chartjs'
export default {
  extends: Doughnut,
  props: {
    labels: {
      type: Array,
      default: () => ['Search Engines',  'Direct Click',  'Bookmarks Click']
    }
  },
  data () {
    return {
      gradient: null,
      gradient2: null
    }
  },
  mounted () {
    this.renderChart({
      labels: this.labels,
      datasets: [{
        label: 'Revenue',
        data: [185, 85, 15],
        backgroundColor: [
            '#c3bdbd',
            '#1bcfb4',
            '#fe7c96'
          ],
        borderWidth: 0
      }]
    }, {
      responsive: true,
      cutoutPercentage: 70,
      animation: {
        animateScale: true,
        animateRotate: true
      },
      legend: false
    })
  }
}
</script>

<style scoped lang='scss'>
  .trafficSourceChart {

  }
</style>
