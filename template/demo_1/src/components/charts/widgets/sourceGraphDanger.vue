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
          data: [8, 12, 5, 4, 1, 12, 4],
          borderColor: [
            'rgb(255,80,70)'
          ],
          borderWidth: 2,
          fill: false
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
            radius: 1
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
