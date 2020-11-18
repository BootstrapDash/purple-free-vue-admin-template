<template>
  <section class="chartjs">
    <div class="page-header">
      <h3 class="page-title">
        ChartJS
      </h3>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="javascript:void(0);">Charts</a></li>
          <li class="breadcrumb-item active" aria-current="page">Chartjs</li>
        </ol>
      </nav>
    </div>
    <div class="row">
      <div class="col-lg-6 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Line chart</h4>
            <line-chart :height="250"></line-chart>
          </div>
        </div>
      </div>
      <div class="col-lg-6 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Bar chart</h4>
            <bar-chart :height="250"></bar-chart>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-6 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Area chart</h4>
            <area-chart :height="250"></area-chart>
          </div>
        </div>
      </div>
      <div class="col-lg-6 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Doughnut chart</h4>
            <doughnut-chart :height="200"></doughnut-chart>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-6 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Pie chart</h4>
            <pie-chart :height="200"></pie-chart>
          </div>
        </div>
      </div>
      <div class="col-lg-6 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Scatter chart</h4>
            <scatter-chart :height="200"></scatter-chart>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import lineChart from '../../components/charts/chartjs/lineChart'
import barChart from '../../components/charts/chartjs/barChart'
import areaChart from '../../components/charts/chartjs/areaChart'
import doughnutChart from '../../components/charts/chartjs/doughnutChart'
import pieChart from '../../components/charts/chartjs/pieChart'
import scatterChart from '../../components/charts/chartjs/scatterChart'
export default {
  name: 'chartjs',
  components: {
    lineChart,
    barChart,
    areaChart,
    doughnutChart,
    pieChart,
    scatterChart
  }
}
</script>
