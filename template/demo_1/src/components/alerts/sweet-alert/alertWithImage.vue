<template>

  <section class="alert-with-image">
    <button class="btn btn-outline-success" v-on:click="showAlert">Click here!</button>
  </section>

</template>

<script>
export default {
  name: 'alert-with-image',
  methods: {
    showAlert () {
      this.$swal({
        title: 'Sweet!',
        text: 'Modal with a custom image.',
        imageUrl: 'https://unsplash.it/400/200',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
        animation: false
      })
    }
  }
}
</script>

<style scoped lang="scss">
