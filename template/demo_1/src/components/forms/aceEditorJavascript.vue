<template>

  <section class="ace-editor">
    <editor v-model="content" @init="editorInit" width="100%" lang="javascript" theme="monokai" height="200px"></editor>
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
/**
* In fact, you're looking at ACE right now. Go ahead and play with it!
*
* We are currently showing off the JavaScript mode. ACE has support for 45
* language modes and 24 color themes!
*/

function add(x, y) {
var resultString = "Hello, ACE! The result of your math is: ";
var result = x + y;
return resultString + result;
}

var addResult = add(3, 2);
console.log(addResult);

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
