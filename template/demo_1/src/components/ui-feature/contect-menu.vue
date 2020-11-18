<template>
<div>
  <div>
      <p @contextmenu.prevent="$refs.menu.open">
          Right click on me
      </p>    
  </div>
  <vue-context ref="menu">
    <li>
      <a href="javascript:void(0);" @click.prevent="onClick($event)"><i class="mdi mdi-lead-pencil
"></i> edit</a><li>
    <li>
      <a href="javascript:void(0);" @click.prevent="onClick($event)"><i class="mdi mdi-content-cut
"></i> cut</a>
    </li>
    <li>
      <a href="javascript:void(0);" @click.prevent="onClick($event)"><i class="mdi mdi-content-copy
"></i> copy</a>
    </li>
    <li>
      <a href="javascript:void(0);" @click.prevent="onClick($event)"><i class="mdi mdi-content-paste
"></i> paste</a>
    </li>
    <li>
      <a href="javascript:void(0);" @click.prevent="onClick($event)"><i class="mdi mdi-delete
"></i> delete</a>
    </li>
    <li>
      <a href="javascript:void(0);" @click.prevent="onClick($event)"><i class="mdi mdi-exit-to-app
"></i> quit</a>
    </li>
</vue-context>
</div>
</template>
<script>
import { VueContext } from 'vue-context';
export default {
    components: {
        VueContext
    },
    methods: {
        onClick (e) {
            e.stopPropagation()
        }
    }
}
</script>
<style>
@import '~vue-context/dist/css/vue-context.css';
</style>
