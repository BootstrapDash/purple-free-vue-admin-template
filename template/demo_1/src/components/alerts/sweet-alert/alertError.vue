<template>

  <section class="alert-error">
    <button class="btn btn-outline-success" v-on:click="showAlert">Click here!</button>
  </section>

</template>

<script>
export default {
  name: 'alert-error',
  methods: {
    showAlert () {
      this.$swal({
        type: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
        footer: '<a href>Why do I have this issue?</a>'
      })
    }
  }
}
</script>
