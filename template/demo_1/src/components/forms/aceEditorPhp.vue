<template>

  <section class="ace-editor">
    <editor v-model="content" @init="editorInit" width="100%" lang="php" theme="monokai" height="200px"></editor>
  </section>

</template>

<script>
export default {
  name: 'ace-editor',
  components: {
    editor: require('vue2-ace-editor')
  },
  data () {
    return {
        content: `
<?php

  function nfact($n) {
    if ($n == 0) {
      return 1;
    }
    else {
      return $n * nfact($n - 1);
    }
  }

  echo "\n\nPlease enter a whole number ... ";
  $num = trim(fgets(STDIN));


  // ===== PROCESS - Determing the factorial of the input number =====

  $output = "\n\nFactorial " . $num . " = " . nfact($num) . "\n\n";
  echo $output;

?>

`
    }
  },
  methods: {
    editorInit: function () {
      require('brace/ext/language_tools')
      require('brace/mode/html')
      require('brace/mode/javascript')
      require('brace/mode/less')
      require('brace/mode/scss')
      require('brace/mode/php')
      require('brace/theme/chrome')
      require('brace/theme/monokai')
      require('brace/snippets/javascript')
    }
  },
}
</script>
