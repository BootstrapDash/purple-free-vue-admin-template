
<template>
  <section class="justgageRefresh">
    <vue-justgage ref="g2" id="g2" class="gauge" data-value="100"></vue-justgage>
    <button href="javascript:void(0);" class="btn btn-success" @click="refresh" id="g2_refresh">Random Refresh</button>
  </section>
</template>

<script>
import Vue from 'vue';
import vueJustgage from 'vue-justgage';
Vue.use(vueJustgage);
export default {
  data() {
    return {
      dflt: {
        min: 0,
        max: 200,
        donut: true,
        gaugeWidthScale: 0.6,
        counter: true,
        hideInnerShadow: true,
      }
    }
  },
  mounted() {
  this.$refs.g2.draw({
      id: 'g2',
      value: 100,
      title: 'refresh',
      defaults: this.dflt
    });
  },
  methods: {
    refresh() {
      this.$refs.g2.refresh(this.getRandomInt(0, 100));
    }
  }
}
</script>
