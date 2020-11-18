<script lang='js'>
import {
  Bar
} from 'vue-chartjs'
export default {
  extends: Bar,
  props: {
    labels: {
      type: Array,
      default: () => ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG']
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
    this.gradient2 = this.$refs.canvas.getContext('2d').createLinearGradient(0, 0, 0, 360)
    this.gradient3 = this.$refs.canvas.getContext('2d').createLinearGradient(0, 0, 0, 300)
    this.gradient.addColorStop(0, 'rgba(218, 140, 255, 1)')
    this.gradient.addColorStop(1, 'rgba(154, 85, 255, 1)')
    this.gradient2.addColorStop(0, 'rgba(255, 191, 150, 1)')
    this.gradient2.addColorStop(1, 'rgba(254, 112, 150, 1)')
    this.gradient3.addColorStop(0, 'rgba(54, 215, 232, 1)')
    this.gradient3.addColorStop(1, 'rgba(177, 148, 250, 1)')
    this.renderChart({
      labels: this.labels,
      datasets: [{
        label: 'CHN',
        data: [20, 40, 15, 35, 25, 50, 30, 20],
        borderColor: this.gradient,
        backgroundColor: this.gradient,
        borderWidth: 1
      }, {
        label: 'USA',
        data: [40, 30, 20, 10, 50, 15, 35, 40],
        borderColor: this.gradient2,
        backgroundColor: this.gradient2,
        borderWidth: 1
      }, {
        label: 'UK',
        data: [70, 10, 30, 40, 25, 50, 15, 30],
        borderColor: this.gradient3,
        backgroundColor: this.gradient3,
        borderWidth: 1
      }]
    }, {
      responsive: true,
      elements: {
        point: {
          radius: 0
        }
      },
      legend: false,
      scales: {
        xAxes: [{
          ticks: {
            padding: 20,
            fontColor: "#9c9fa6",
            autoSkip: true,
          },
          gridLines: {
            display:false,
            drawBorder: false,
            color: 'rgba(0,0,0,1)',
            zeroLineColor: 'rgba(235,237,242,1)'
          },
          categoryPercentage: 0.5,
          barPercentage: 0.5
        }],
        yAxes: [{
          ticks: {
            display: false,
            min: 0,
            stepSize: 20,
            max: 80
          },
          gridLines: {
            drawBorder: false,
            color: 'rgba(235,237,242,1)',
            zeroLineColor: 'rgba(235,237,242,1)'
          }
        }]
      }
    })
  }
}
</script>

<style scoped lang='scss'>
  .visitAndSalesStatitics {
  }
</style>
