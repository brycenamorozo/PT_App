<template>
<div>
  <Navbar/>
  <div class="pa-7">
    <v-layout row>
    <v-layout col>
      <h1>Gluteal muscles</h1>
    </v-layout>
    <v-spacer></v-spacer>
    <v-spacer></v-spacer>
    <v-layout col>
      <v-card-actions href="/rice">
        <v-btn flat color="white grey--text" href="/rice">
          <span>R.I.C.E.</span>
          <v-icon small right>mdi-arrow-right</v-icon>
        </v-btn>
      </v-card-actions>
    </v-layout>
    </v-layout>
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
        { title: 'Seated Figure-Four Stretch',
          info: "Also called the seated pigeon, the seated figure-four stretch helps to loosen up your glutes and surrounding muscles. <br/>Step 1: Sit upright in a sturdy chair. Place your ankle with your injured leg on your thigh, just above your knee. Place your hands on your shins. <br/>Step 2: Keeping your spine straight, lean slightly forward to deepen the stretch.<br/>Hold for 20–30 seconds.<br/>Step 3: Return to the starting position. Repeat with the other leg.",
          picture: require('../../assets/SeatedFigureFourStretch.gif') },
        { title: 'Seated Twist',
          info: 'Step 1: Sit on the ground and stretch your legs out in front of you.<br/>Step 2: Place your arm behind you and bring your injured leg over the other, placing your foot on the floor, near your knee.<br/>Step 3: Position your arm over your knee, with your palm facing outward.<br/>Step 4: Twist to the left or right and use your arm to pull your knee inward causing resistance.<br/>Step 5: Hold this position for 20–30 seconds.<br/>Untwist and repeat on the other side.',
          picture: require('../../assets/SeatedTwist.gif') },
        { title: 'Seated Glute Stretch',
          info: 'Step 1: Sit on the floor and extend your legs out in front of you.<br/>Step 2: Keeping your back straight, lift your injured leg and place your ankle on your knee. <br/>Step 3: Lean slightly forward to deepen the stretch.<br/>Hold for 20 seconds.',
          picture: require('../../assets/SeatedGluteStretch.gif') },   
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