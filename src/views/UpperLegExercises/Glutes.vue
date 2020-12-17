<template>
<div>
  <Navbar/>
  <div class="pa-7">
    <h1>Gluteal muscles</h1>
    <h3 class="mt-3">Here are several stretches and exercises to help you recover</h3>
    <v-container class="pa-10">
      <v-layout column>
        <v-flex v-for="item in items" :key="item.title">
          <v-card  class="text-center ma-3 pt-3 px-3 d-flex flex-column">
            <v-card-text>
              <h2>{{ item.title }}</h2>
            </v-card-text>
  
            <v-responsive class="pt-4">
              <v-img :src="item.picture" height="300" contain></v-img>
            </v-responsive>

            <v-responsive class="pt-4">
              <p>{{ item.info }}</p>
            </v-responsive>

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
        { title: 'Seated Figure-Four Stretch',
          info: ':)',
          picture: require('../../assets/SeatedFigureFourStretch.gif') },
        { title: 'Seated Figure-Four Stretch',
          info: ':)',
          picture: require('../../assets/SeatedFigureFourStretch.gif') },  
      ],
    }
  },
}
</script>