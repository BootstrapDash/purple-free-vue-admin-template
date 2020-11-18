<template>

  <section class="alert-default">
    <button class="btn btn-outline-success" v-on:click="showAlert">Click here!</button>
  </section>

</template>

<script>
export default {
  name: 'alert-default',
  methods: {
    showAlert () {
      this.$swal('Hello Vue world!!!')
    }
  }
}
</script>
