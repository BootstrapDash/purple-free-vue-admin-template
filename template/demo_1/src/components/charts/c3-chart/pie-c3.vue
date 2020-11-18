<template>
  <section class="pie-c3">
    <vue-c3 :handler="piecharthandler"></vue-c3>
  </section>
</template>

<script>
  import Vue from 'vue'
  import VueC3 from 'vue-c3'

  export default {
    name: 'pie-c3',
    components: {
      VueC3
    },

    data () {
      return {
        piecharthandler: new Vue(),
      }
    },

    mounted () {
      const options = {
        data: {
          columns: [
            ['data1', 30],
            ['data2', 120],
          ],
          type: 'pie'
        },
        color: {
          pattern: ['#6153F9', '#8E97FC', '#A7B3FD']
        },
        padding: {
          top: 0,
          right: 0,
          bottom: 30,
          left: 0,
        }
      }

      this.piecharthandler.$emit('init', options)
    }
  }
</script>