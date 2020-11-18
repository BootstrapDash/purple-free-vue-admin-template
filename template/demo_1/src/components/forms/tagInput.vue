<template>

  <section class="tag-input">
    <vue-tags-input
      v-model="tag"
      :tags="tags"
      @tags-changed="newTags => tags = newTags"
    />
  </section>

</template>

<script>
import VueTagsInput from '@johmun/vue-tags-input'
export default {
  components: {
    VueTagsInput
  },
  data () {
    return {
      tag: '',
      tags: [ {"text":"London","tiClasses":["ti-valid"]},{"text":"Cananda","tiClasses":["ti-valid"]}, {"text":"Australia","tiClasses":["ti-valid"]}, {"text":"Mexico","tiClasses":["ti-valid"]}]
    }
  }
}
</script>
