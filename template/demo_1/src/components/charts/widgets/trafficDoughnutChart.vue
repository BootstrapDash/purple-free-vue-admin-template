<script>
import {
  Doughnut
} from 'vue-chartjs'

export default {
  extends: Doughnut,
  data () {
    return {
      datacollection: {
        datasets: [{
          data: [70, 20],
          backgroundColor: [
            'rgb(0,143,251)',
            'rgb(0,224,147)'
          ],
          borderColor: [
            'rgb(0,143,251)',
            'rgb(0,224,147)'
          ]
        }],

        // These labels appear in the legend and in the tooltips when hovering different arcs
        labels: [
          'Chrome',
          'Firefox',
          'Safari',
          'Opera',
          'IE'
        ]
      },
      options: {
        cutoutPercentage: 70,
        animationEasing: 'easeOutBounce',
        animateRotate: true,
        animateScale: false,
        responsive: true,
        maintainAspectRatio: true,
        showScale: true,
        legend: {
          display: false
        },
        layout: {
          padding: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
          }
        }
      }
    }
  },
  mounted () {
    this.renderChart(this.datacollection, this.options)
  }
}
</script>
