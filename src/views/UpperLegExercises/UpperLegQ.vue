<template>
<div>
  <Navbar/>
  <div class="pa-7">
    <h1>Step 2: Specific Muscle</h1>
    <h3 class="mt-3">Press continue if the situation applies to you.</h3>
    <v-container class="pa-10">
      <v-layout column>
        <v-flex v-for="item in items" :key="item.title">
          <v-card  class="text-center ma-3 pt-3 px-3 d-flex flex-column">
            <v-card-text>
              <h2>{{ item.title }}</h2>
            </v-card-text>

            <v-responsive class="pt-4">
              <p>{{ item.info }}</p>
            </v-responsive>

            <v-card-actions :to="item.route">
              <v-spacer></v-spacer>
              <v-btn flat depressed color="white grey--text" :to="item.route">
                <span>Continue</span>
                <v-icon large right>mdi-arrow-right</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex> 
      </v-layout>
    </v-container>
  </div>
</div>
</template>

<script>
import Navbar from '../../components/Navbar'

export default {
    name: 'Home',
    components: { Navbar },

  data() {
    return {
      items: [
        { title: 'Gluteal muscles', route: '/Glutes', 
          info: '',
          picture: require('../../assets/GlutealMuscles.jpg') },
        { title: 'Gluteal muscles', route: '/Glutes', 
          info: '',
          picture: require('../../assets/GlutealMuscles.jpg') },        
        { title: 'Gluteal muscles', route: '/Glutes', 
          info: '',
          picture: require('../../assets/GlutealMuscles.jpg') },
        { title: 'Gluteal muscles', route: '/Glutes', 
          info: '',
          picture: require('../../assets/GlutealMuscles.jpg') },        
        { title: 'Gluteal muscles', route: '/Glutes', 
          info: '',
          picture: require('../../assets/GlutealMuscles.jpg') },
        { title: 'Gluteal muscles', route: '/Glutes', 
          info: '',
          picture: require('../../assets/GlutealMuscles.jpg') },      
      ],
    }
  },
}
</script>