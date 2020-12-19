<template>
<div>
  <Navbar/>
  <div class="pa-7">
    <h1>Psoas</h1>
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
        { title: 'Bridges',
          info: "Step 1: Lie down on your back with your arms at your sides, feet on the floor, and your knees bent. Try to position your feet so your fingers can touch your heels.<br/>Step 2: Press into your heels, and lift your hips off the floor toward the ceiling while squeezing your glutes. Try to shimmy your shoulders as close together under your body as possible.<br/>Step 3: Hold the position for a few seconds before returning to the original position, then repeat several times. Don’t forget to breathe!",
          picture: require('../../assets/Bridges.gif') },
        { title: 'Horizontal Squat Stretch',
          info: 'Step 1: Begin with your elbows and knees on the floor, and your knees bent at 90 degrees.<br/>Step 2: Walk your knees as far apart as you can and lengthen the spine.<br/>Step 3: Lower your upper body onto your forearms as you draw your hips back and down.<br/>Hold for up to 60 seconds.',
          picture: require('../../assets/HorizontalSquatStretch.gif') },
        { title: 'Resisted Hip Flexion',
          info: 'Step 1: Make a loop and place the resistance band around the ankle of your affected leg.<br/>Step 2: Place the other end of the resistance band around an anchor point.<br/>Step 3: Engage the front of your thigh and keep your leg straight as you extend your leg forward.<br/>Slowly go back to the starting position. Do 2 sets of 15.',
          picture: require('../../assets/ResistedHipFlexion.gif') },   
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