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
    this.gradient = this.$refs.canvas.getContext('2d').createLinearGradient(0, 0, 0, 181)
    this.gradient2 = this.$refs.canvas.getContext('2d').createLinearGradient(0, 0, 0, 300)
    this.gradient3 = this.$refs.canvas.getContext('2d').createLinearGradient(0, 0, 0, 50)
    this.gradient.addColorStop(0, 'rgba(54, 215, 232, 1)')
    this.gradient.addColorStop(1, 'rgba(177, 148, 250, 1)')
    this.gradient2.addColorStop(0, 'rgba(6, 185, 157, 1)')
    this.gradient2.addColorStop(1, 'rgba(132, 217, 210, 1)')
    this.gradient3.addColorStop(0, 'rgba(255, 191, 150, 1)')
    this.gradient3.addColorStop(1, 'rgba(254, 112, 150, 1)')
    this.renderChart({
      labels: this.labels,
      datasets: [{
        label: 'Revenue',
        data: [30, 30, 40],
        backgroundColor: [
            this.gradient,
            this.gradient2,
            this.gradient3
          ],
        borderWidth: 0
      }]
    }, {
      responsive: true,
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
