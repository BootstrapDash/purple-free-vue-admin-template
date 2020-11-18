<template>

  <section class="code-mirror-editor">
    <codemirror v-model="code" :options="cmOptions"></codemirror>
  </section>

</template>

<script>
import { codemirror } from 'vue-codemirror'
export default {
  name: 'code-mirror-editor',
  components: {
    codemirror
  },
  data () {
    return {
      code: 'qwETARHDGFN',
      cmOptions: {
        tabSize: 4,
        mode: 'html',
        theme: 'base16-dark',
        lineNumbers: true,
        line: true
      }
    }
  }
}
</script>
