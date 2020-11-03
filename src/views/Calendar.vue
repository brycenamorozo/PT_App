<template>
  <div>
    <Navbar/>
    <h1 class="ma-3">This is a calendar page</h1>
    <Calendar/>
  </div>
</template>

<script>
import Navbar from '../components/Navbar'

export default {
    name: 'Home',
    components: { 
      Navbar,
   },

  data: () => ({
    //
  }),
}
</script>