
<template>
  <section class="justgage">
    <vue-justgage ref="g1" id="g1" class="gauge" data-value="100"></vue-justgage>
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
        donut: false,
        gaugeWidthScale: 0.6,
        counter: true,
        hideInnerShadow: true
      }
    }
  },
  mounted() {
  this.$refs.g1.draw({
      id: 'g1',
      value: 100,
      title: 'Simple JustGage',
      defaults: this.dflt
    });
  },
  methods: {
    refresh() {
      this.$refs.g1.refresh(this.getRandomInt(0, 100));
    }
  }
}
</script>
