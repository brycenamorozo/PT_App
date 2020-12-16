<template>
<div>
  <Navbar/>
  <div class="pa-7">
    <h1>Step 1: Self Diagnosis</h1>
    <h3 class="mt-3">Select specific area of pain</h3>
    <v-container class="pa-10">
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg3 xlg2 v-for="item in items" :key="item.title">
          <v-card  class="text-center ma-3 pt-3 px-3 d-flex flex-column">
            <v-card-text>
              <h2>{{ item.title }}</h2>
            </v-card-text>

            <v-responsive class="pt-4">
              <v-img :aspect-ratio="7/9"  :src="item.picture"></v-img>
            </v-responsive>

            <v-card-actions :to="item.route">
              <v-spacer></v-spacer>
              <v-btn flat depressed color="white grey--text" :to="item.route">
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
        { title: 'Gluteal muscles', route: '/Glutes', picture: require('../../assets/GlutealMuscles.jpg') },
        { title: 'Hamstring', route: '/Hamstring', picture: require('../../assets/Hamstring.jpg') },
        { title: 'Psoas', route: '/Psoas', picture: require('../../assets/Psoas.jpg') },
        { title: 'Groin', route: '/Groin', picture: require('../../assets/Groin.jpg') },
        { title: 'Quads', route: '/Quads', picture: require('../../assets/Quads.jpg') },
        { title: 'I\'m not sure', route: '/UpperLegQ', picture: require('../../assets/UpperLeg.png') },
      ],
    }
  },
}
</script>