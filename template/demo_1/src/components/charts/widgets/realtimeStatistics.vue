<script>
import {
  Bar
} from 'vue-chartjs'

export default {
  extends: Bar,
  data () {
    return {
      datacollection: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
          label: 'Profit',
          data: [330, 380, 230, 400, 309, 530, 340, 400, 490, 380, 300, 510],
          backgroundColor: 'rgb(0,143,251)'
        },
        {
          label: 'Target',
          data: [600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600],
          backgroundColor: 'rgba(238, 242, 245, 1)'
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        layout: {
          padding: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
          }
        },
        scales: {
          yAxes: [{
            display: false,
            gridLines: {
              display: false
            }
          }],
          xAxes: [{
            stacked: true,
            ticks: {
              beginAtZero: true,
              fontColor: '#354168'
            },
            gridLines: {
              color: 'rgba(0, 0, 0, 0)',
              display: false
            },
            barPercentage: 0.4
          }]
        },
        legend: {
          display: false
        },
        elements: {
          point: {
            radius: 0
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
