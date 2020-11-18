<script>
import {
  Line
} from 'vue-chartjs'

export default {
  extends: Line,
  data () {
    return {
      datacollection: {
        labels: ['2013', '2014', '2014', '2015', '2016', '2017', '2018'],
        datasets: [{
          label: 'Support',
          data: [150, 200, 150, 220, 350, 275, 365],
          backgroundColor: 'rgba(52,110,240,0.7)',
          borderColor: 'rgba(52,110,240,0.8)',
          borderWidth: 2,
          fill: true
        },
        {
          label: 'Product',
          data: [300, 400, 300, 440, 700, 550, 730],
          backgroundColor: 'rgba(0,187,248,0.7)',
          borderColor: 'rgba(0,187,248,0.8)',
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
            radius: 3
          },
          line: {
            tension: 0
          }
        },
        stepsize: 1
      }
    }
  },
  mounted () {
    this.renderChart(this.datacollection, this.options)
  }
}
</script>
