<script>
import {
  Line
} from 'vue-chartjs'

export default {
  extends: Line,
  data () {
    return {
      datacollection: {
        labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"],
        datasets: [{
            label: 'Profit',
            data: [7, 9, 2, 2, 8, 7, 9],
            borderColor: "#b66dff",
            backgroundColor: "rgba(182,109,255, .2)",
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
        stepsize: 10
      }
    }
  },
  mounted () {
    this.renderChart(this.datacollection, this.options)
  }
}
</script>
