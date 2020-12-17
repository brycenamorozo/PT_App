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
              <v-img :src="item.picture" height="250" contain></v-img>
            </v-responsive>

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
          info: 'Soreness or tightness in the buttocks and/or in the hips when sitting, running, or squatting. ',
          picture: require('../../assets/GlutealMuscles.jpg') },
        { title: 'Groin', route: '/Groin', 
          info: 'Pain usually felt in the inner thigh, but located anywhere from just below the hip to the knee. Usually felt when extending your leg far from a standing or sitting position in any direction.',
          picture: require('../../assets/Groin.jpg') },        
        { title: 'Hamstring', route: '/Hamstring', 
          info: 'Pain in the back of the thigh when fully bending or extending your leg. Tendereness or bruising may occur in the back of the thigh as well.',
          picture: require('../../assets/Hamstring.jpg') },
        { title: 'Psoas', route: '/Psoas', 
          info: 'Pain in the front of the hip right near the pelvis. Hurting should occur when walking up stairs, and lifting the knee up to your chest. Soreness may also translate to the inner thigh.',
          picture: require('../../assets/Psoas.jpg') },        
        { title: 'Quads', route: '/Quads', 
          info: 'Pain in the thigh when bending or extending your leg. Sharp pain in the thigh when kicking hard or jumping.',
          picture: require('../../assets/Quads.jpg') },  
      ],
    }
  },
}
</script>