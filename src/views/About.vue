<template>
  <div>
    <Navbar/>
    <h1 class="ma-3">This is an about page</h1>
  </div>
</template>

<script>
import Navbar from '../components/Navbar'

export default {
    name: 'Home',
    components: { Navbar },

  data: () => ({
    //
  }),
}
</script>