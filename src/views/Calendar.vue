<template>
  <div>
    <Navbar/>
    <h1 class="ma-3">Calendar</h1>
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