<template>
<div>
  <Navbar/>
  <div class="pa-7">
    <h1>Quads</h1>
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

            <v-responsive class="py-4 px-10">
              <p v-html="item.info" class="text-justify"></p>
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
        { title: 'Flamingos',
          info: "Step 1: Stand on your left foot and grab your right shin by bending your leg behind you.<br/>Step 2: Tuck your pelvis in, pull your shin toward your glutes, making sure your knee is pointing to the ground. Try not to pull the knee backward or sideways.<br/>Hold for 30 seconds and then switch sides.",
          picture: require('../../assets/Flamingos.gif') },
        { title: 'Ground Quad Stretch',
          info: 'Step 1: Grab one thigh and pull it toward your chest.<br/>Step 2: Make sure that your back is flat and not arched. Let gravity pull down on the leg that is dangling.<br/>Relax into the stretch so as not to tense up the muscles. Hold for 1 to 2 minutes.',
          picture: require('../../assets/GroundQuadStretch.gif') },
        { title: 'Quad Stretch Against Wall',
          info: 'Step 1: Stand facing a wall with the feet hip-width apart. Place the hands on the wall for balance.<br/>Step 2: Take a step back with the injured leg’s foot, keeping the knee bent.<br/>Step 3: Slightly bend the other knee, ensuring that it does not move past the toes.<br/>Step 4: Squeeze the buttocks muscles and keep them under the hips. You should notice a gentle pulling sensation in the front of the right hip and thigh.<br/>Maintain this position for up to 60 seconds.',
          picture: require('../../assets/QuadStretchAgainstWall.gif') },   
      ],
    }
  },
}
</script>

<style>
  .paragraph{
    white-space: pre;
  }
</style>