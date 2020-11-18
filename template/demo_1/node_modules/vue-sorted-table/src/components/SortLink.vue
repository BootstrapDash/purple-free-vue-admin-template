<template>
  <a href="#" @click.prevent="$parent.sortBy(name)">
    <slot>{{ name }}</slot>
    <slot name="icon">
      <span
        v-if="$parent.getCurrentSort() == name"
        v-html="$parent.getSortIcon()"
      ></span>
    </slot>
  </a>
</template>

<script>
export default {
  name: "SortLink",
  props: {
    name: {
      type: String,
      required: true,
      default: ""
    }
  }
};
</script>
