<script>
import {
  Line
} from 'vue-chartjs'

export default {
  extends: Line,
  data () {
    return {
      datacollection: {
        labels: ['2011', '2012', '2013', '2014', '2015', '2016', '2017'],
        datasets: [{
          label: 'Total Profit',
          data: [150, 200, 150, 220, 350, 275, 365],
          borderColor: 'rgb(0,143,251)',
          backgroundColor: 'rgba(0,143,251,0.1)',
          borderWidth: 2,
          fill: true
        }, {
          label: 'Total Sales',
          data: [300, 400, 300, 440, 700, 550, 730],
          borderColor: 'rgb(0,224,147)',
          backgroundColor: 'rgba(0,143,251,0.1)',
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
        stepsize: 100
      }
    }
  },
  mounted () {
    this.renderChart(this.datacollection, this.options)
  }
}
</script>