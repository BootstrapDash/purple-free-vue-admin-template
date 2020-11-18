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
          data: [185, 85, 65],
          backgroundColor: [
            'rgb(0,143,251)',
            'rgb(255,194,37)',
            'rgb(0,224,147)'
          ],
          borderColor: [
            'rgb(0,143,251)',
            'rgb(255,194,37)',
            'rgb(0,224,147)'
          ]
        }],

        // These labels appear in the legend and in the tooltips when hovering different arcs
        labels: [
          'Admin Dashbaord',
          'Website Design',
          'Mobile App'
        ]
      },
      options: {
        cutoutPercentage: 75,
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
