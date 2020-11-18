<template>

  <section class="alert-custom-html">
    <button class="btn btn-outline-success" v-on:click="showAlert">Click here!</button>
  </section>

</template>

<script>
export default {
  name: 'alert-custom-html',
  methods: {
    showAlert () {
      this.$swal({
        title: '<strong>HTML <u>example</u></strong>',
        type: 'info',
        html:
         'You can use <b>bold text</b>, ' +
         '<a href="//github.com">links</a> ' +
         'and other HTML tags',
        showCloseButton: true,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText:
         '<i class="fa fa-thumbs-up"></i> Great!',
        confirmButtonAriaLabel: 'Thumbs up, great!',
        cancelButtonText:
        '<i class="fa fa-thumbs-down"></i>',
        cancelButtonAriaLabel: 'Thumbs down'
      })
    }
  }
}
</script>
