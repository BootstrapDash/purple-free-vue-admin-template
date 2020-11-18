<template>
  <section class="line-c3">
    <vue-c3 :handler="linecharthandler"></vue-c3>
  </section>
</template>

<script>
  import Vue from 'vue'
  import VueC3 from 'vue-c3'

  export default {
    name: 'line-c3',
    components: {
      VueC3
    },

    data () {
      return {
        linecharthandler: new Vue(),
      }
    },

    mounted () {
      const options = {
        data: {
          columns: [
            ['data1', 30, 200, 100, 400, 150, 250],
            ['data2', 50, 20, 10, 40, 15, 25]
          ]
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

      this.linecharthandler.$emit('init', options)
    }
  }
</script>

