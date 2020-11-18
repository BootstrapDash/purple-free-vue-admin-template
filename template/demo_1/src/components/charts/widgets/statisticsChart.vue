<script>
import {
  Bar
} from 'vue-chartjs'

export default {
  extends: Bar,
  data () {
    return {
      datacollection: {
        labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7', 'Day 8', 'Day 9', 'Day 10'],
        datasets: [{
          label: 'Revenue',
          data: [39, 19, 25, 16, 31, 39, 23, 20, 23, 18],
          backgroundColor: 'rgb(0,224,147)'
        },
        {
          label: 'Sales',
          data: [27, 12, 26, 15, 21, 27, 13, 19, 32, 22],
          backgroundColor: 'rgb(0,143,251)'
        }]
      },
      options: {
        layout: {
          padding: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
          }
        },

        scales: {
          responsive: true,
          maintainAspectRatio: true,
          yAxes: [{
            stacked: true,
            display: false,
            gridLines: {
              color: 'rgba(0, 0, 0, 0.03)'
            }
          }],
          xAxes: [{
            stacked: true,
            display: false,
            barPercentage: 0.3,
            gridLines: {
              display: false
            }
          }]
        },
        legend: {
          display: false
        }
      }
    }
  },
  mounted () {
    this.renderChart(this.datacollection, this.options)
  }
}
</script>
