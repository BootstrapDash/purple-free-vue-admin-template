<template>
  <section class="spline-c3">
    <vue-c3 :handler="splinecharthandler"></vue-c3>
  </section>
</template>

<script>
  import Vue from 'vue'
  import VueC3 from 'vue-c3'

  export default {
    name: 'spline-c3',
    components: {
      VueC3
    },

    data () {
      return {
        splinecharthandler: new Vue(),
      }
    },

    mounted () {
      const options = {
        data: {
          columns: [
            ['data1', 30, 200, 100, 400, 150, 250],
            ['data2', 130, 100, 140, 200, 150, 50]
          ],
          type: 'spline'
        },
        color: {
          pattern: ['rgba(88,216,163,1)', 'rgba(237,28,36,0.6)', 'rgba(4,189,254,0.6)']
        },
        padding: {
          top: 0,
          right: 0,
          bottom: 30,
          left: 0,
        }
      }

      this.splinecharthandler.$emit('init', options)
    }
  }
</script>