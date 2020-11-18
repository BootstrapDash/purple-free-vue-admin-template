<script>
import {
  Bar
} from 'vue-chartjs'
// var ctx = document.getElementById('visit-sale-chart').getContext("2d");
    
//   var gradientStrokeViolet = ctx.createLinearGradient(0, 0, 0, 181);
//   gradientStrokeViolet.addColorStop(0, 'rgba(218, 140, 255, 1)');
//   gradientStrokeViolet.addColorStop(1, 'rgba(154, 85, 255, 1)');
//   var gradientLegendViolet = 'linear-gradient(to right, rgba(218, 140, 255, 1), rgba(154, 85, 255, 1))';
  
//   var gradientStrokeBlue = ctx.createLinearGradient(0, 0, 0, 360);
//   gradientStrokeBlue.addColorStop(0, 'rgba(54, 215, 232, 1)');
//   gradientStrokeBlue.addColorStop(1, 'rgba(177, 148, 250, 1)');
//   var gradientLegendBlue = 'linear-gradient(to right, rgba(54, 215, 232, 1), rgba(177, 148, 250, 1))';

//   var gradientStrokeRed = ctx.createLinearGradient(0, 0, 0, 300);
//   gradientStrokeRed.addColorStop(0, 'rgba(255, 191, 150, 1)');
//   gradientStrokeRed.addColorStop(1, 'rgba(254, 112, 150, 1)');
//   var gradientLegendRed = 'linear-gradient(to right, rgba(255, 191, 150, 1), rgba(254, 112, 150, 1))';
export default {
  
  
  extends: Bar,
  data () {
    return {
      datacollection: {
        labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7", "Day 8", "Day 9", "Day 10"],
        datasets: [{
            label: 'Amount Due',
            data: [39, 19, 25, 16, 31, 39, 12, 18, 33, 24],
            backgroundColor: "#b66dff",
            borderColor: "#b66dff",
            borderWidth: 0
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
              display: false,
              gridLines: {
                  color: 'rgba(0, 0, 0, 0.03)',
              }
          }],
          xAxes: [{
              display: false,
              barPercentage: 0.4,
              gridLines: {
                  display: false,
              }
          }]
        },
        legend: {
            display: false
        }
      },
      elements: {
        point: {
          radius: 0
        }
      }
    }
  },
  mounted () {
    this.renderChart(this.datacollection, this.options)
  }
}
</script>