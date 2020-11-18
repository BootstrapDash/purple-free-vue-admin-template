<script>
import {
  Line
} from 'vue-chartjs'

export default {
  extends: Line,
  data () {
    return {
      datacollection: {
        labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'],
        datasets: [{
          label: 'Profit',
          data: [1, 4, 8, 3, 4, 6, 1],
          borderColor: 'rgb(255,194,37)',
          backgroundColor: 'rgba(255,194,37,0.1)',
          borderWidth: 2,
          fill: true
        }]
      },
      options: {
        scales: {
          yAxes: [{
            display: false
          }],
          xAxes: [{
            display: false
          }]
        },
        legend: {
          display: false
        },
        elements: {
          point: {
            radius: 0
          },
          line: {
            tension: 0
          }
        },
        stepsize: 100
      }
    }
  },
  mounted () {
    this.renderChart(this.datacollection, this.options)
  }
}
</script>
