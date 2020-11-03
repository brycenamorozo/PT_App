<template>
  <div>
    <Navbar/>
    <h1 class="ma-3">This is a calendar page</h1>
    <Calendar/>
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
import Calendar from '../components/Calendar'

export default {
    name: 'Calendar',
    components: { 
      Navbar,
      Calendar
   },

  data: () => ({
    //
  }),
}
</script>