<template>
  <section class="donut-c3">
    <vue-c3 :handler="donutcharthandler"></vue-c3>
  </section>
</template>

<script>
  import Vue from 'vue'
  import VueC3 from 'vue-c3'

  export default {
    name: 'donut-c3',
    components: {
      VueC3
    },

    data () {
      return {
        donutcharthandler: new Vue(),
      }
    },

    mounted () {
      const options = {
        data: {
          columns: [
            ["Income", 0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.3, 0.2, 0.2, 0.1, 0.2, 0.2, 0.1, 0.1, 0.2, 0.4, 0.4, 0.3, 0.3, 0.3, 0.2, 0.4, 0.2, 0.5, 0.2, 0.2, 0.4, 0.2, 0.2, 0.2, 0.2, 0.4, 0.1, 0.2, 0.2, 0.2, 0.2, 0.1, 0.2, 0.2, 0.3, 0.3, 0.2, 0.6, 0.4, 0.3, 0.2, 0.2, 0.2, 0.2],
            ["Outcome", 1.4, 1.5, 1.5, 1.3, 1.5, 1.3, 1.6, 1.0, 1.3, 1.4, 1.0, 1.5, 1.0, 1.4, 1.3, 1.4, 1.5, 1.0, 1.5, 1.1, 1.8, 1.3, 1.5, 1.2, 1.3, 1.4, 1.4, 1.7, 1.5, 1.0, 1.1, 1.0, 1.2, 1.6, 1.5, 1.6, 1.5, 1.3, 1.3, 1.3, 1.2, 1.4, 1.2, 1.0, 1.3, 1.2, 1.3, 1.3, 1.1, 1.3],
            ["Revenue", 2.5, 1.9, 2.1, 1.8, 2.2, 2.1, 1.7, 1.8, 1.8, 2.5, 2.0, 1.9, 2.1, 2.0, 2.4, 2.3, 1.8, 2.2, 2.3, 1.5, 2.3, 2.0, 2.0, 1.8, 2.1, 1.8, 1.8, 1.8, 2.1, 1.6, 1.9, 2.0, 2.2, 1.5, 1.4, 2.3, 2.4, 1.8, 1.8, 2.1, 2.4, 2.3, 1.9, 2.3, 2.5, 2.3, 1.9, 2.0, 2.3, 1.8],
          ],
          type: 'donut'
        },
        color: {
          pattern: ['rgba(88,216,163,1)', 'rgba(4,189,254,0.6)', 'rgba(237,28,36,0.6)']
        },
        padding: {
          top: 0,
          right: 0,
          bottom: 30,
          left: 0,
        },
        bar: {
          width: {
            ratio: 0.7 // this makes bar width 50% of length between ticks
          }
        }
      }

      this.donutcharthandler.$emit('init', options)
    }
  }
</script>