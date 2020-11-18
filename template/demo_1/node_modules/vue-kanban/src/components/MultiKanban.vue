<template>
  <div ref="wrapper">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'MultiKanban',

  mounted() {
    const [first, ...others] = this.$children;
    others.forEach((other) => {
      other.drake.destroy();
      other.$refs.list.forEach((list) => {
        first.drake.containers.push(list);
      });
    });
  },
};
</script>
