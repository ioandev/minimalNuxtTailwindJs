<template>
  <div>
    <h1>Hidden.</h1>
  </div>
</template>

<script>
  export default {
    //middleware: 'promo'
    middleware({ redirect }) {
      return redirect('/example')
    }
  }
</script>
