<template>

  <section class="alert-prompt">
    <button class="btn btn-outline-success" v-on:click="showAlert">Click here!</button>
  </section>

</template>

<script>
export default {
  name: 'alert-prompt',
  methods: {
    showAlert () {
      this.$swal({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.value) {
          this.$swal(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        }
      })
    }
  }
}
</script>
