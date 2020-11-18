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
          data: [80, 34, 100],
          backgroundColor: [
            "#1bcfb4",
            "#198ae3",
            "#c3bdbd"
          ],
          borderColor: [
            "#1bcfb4",
            "#198ae3",
            "#c3bdbd"
        ],
        }],
        labels: [
            'Request',
            'Email',
        ]
      },
      options: {
        cutoutPercentage: 70,
        animationEasing: "easeOutBounce",
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
