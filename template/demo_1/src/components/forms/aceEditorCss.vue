<template>

  <section class="ace-editor">
    <editor v-model="content" @init="editorInit" width="100%" lang="css" theme="chrome" height="200px"></editor>
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
.nav ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

.nav li {
  display: inline-block;
}

.nav a {
  display: block;
  padding: 6px 12px;
  text-decoration: none;
}

`
    }
  },
  methods: {
    editorInit: function () {
      require('brace/ext/language_tools')
      require('brace/mode/html')
      require('brace/mode/javascript')
      require('brace/mode/less')
      require('brace/theme/chrome')
      require('brace/theme/monokai')
      require('brace/snippets/javascript')
    }
  },
}
</script>
