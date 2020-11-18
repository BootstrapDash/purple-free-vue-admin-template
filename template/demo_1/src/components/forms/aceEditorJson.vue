<template>

  <section class="ace-editor">
    <editor v-model="content" @init="editorInit" width="100%" lang="json" theme="chrome" height="200px"></editor>
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
{
  "firstName": "John",
  "lastName": "Smith",
  "isAlive": true,
  "age": 27,
  "address": {
  "streetAddress": "21 2nd Street",
  "city": "New York",
  "state": "NY",
  "postalCode": "10021-3100"
  },
  "phoneNumbers": [
    {
      "type": "home",
      "number": "212 555-1234"
    },
    {
      "type": "office",
      "number": "646 555-4567"
    },
    {
      "type": "mobile",
      "number": "123 456-7890"
    }
  ],
  "children": [],
  "spouse": null
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
      require('brace/mode/scss')
      require('brace/mode/json')
      require('brace/theme/chrome')
      require('brace/theme/monokai')
      require('brace/snippets/javascript')
    }
  },
}
</script>
