<template>

  <section class="alert-animated">
    <button class="btn btn-outline-success" v-on:click="showAlert">Click here!</button>
  </section>

</template>

<script>
export default {
  name: 'alert-animated',
  methods: {
    showAlert () {
      this.$swal({
        title: 'Custom animation with Animate.css',
        animation: false,
        customClass: 'animated tada'
      })
    }
  }
}
</script>
