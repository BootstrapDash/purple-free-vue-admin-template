<template>
  <section class="step-c3">
    <vue-c3 :handler="stepcharthandler"></vue-c3>
  </section>
</template>

<script>
  import Vue from 'vue'
  import VueC3 from 'vue-c3'

  export default {
    name: 'step-c3',
    components: {
      VueC3
    },

    data () {
      return {
        stepcharthandler: new Vue(),
      }
    },

    mounted () {
      const options = {
        data: {
          columns: [
            ['data1', 300, 350, 300, 0, 0, 100],
            ['data2', 130, 100, 140, 200, 150, 50]
          ],
          type: 'step'
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

      this.stepcharthandler.$emit('init', options)
    }
  }
</script>