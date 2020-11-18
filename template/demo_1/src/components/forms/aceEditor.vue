<template>

  <section class="ace-editor">
    <editor v-model="content" @init="editorInit" width="100%" lang="html" theme="chrome" height="200px"></editor>
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
<!-- Default panel -->
<div class="panel panel-default">
  <div class="panel-heading">
    <h5 class="panel-title">
      Panel Title
      <span class="text-semibold">Default</span>
      <small>Full featured toolbar</small>
    </h5>

    <ul class="panel-heading-icons">
      <li><a href="javascript:void(0);" data-panel="collapse"><i class="icon-arrow-down2"></i></a></li>
      <li><a href="javascript:void(0);" data-panel="reload"><i class="icon-reload"></i></a></li>
      <li><a href="javascript:void(0);" data-panel="move"><i class="icon-move"></i></a></li>
      <li><a href="javascript:void(0);" data-panel="close"><i class="icon-close"></i></a></li>
    </ul>
  </div>

  <div class="panel-body">
    Panel body
  </div>
</div>
<!-- /default panel -->

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
      require('brace/snippets/javascript')
    }
  },
}
</script>
