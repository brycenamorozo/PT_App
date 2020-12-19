<template>
<div>
  <Navbar/>
  <div class="pa-7">
    <h1>Groin</h1>
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
        { title: 'Leg Swings',
          info: "Step 1: Stand with your feet shoulder-width apart.<br/>Step 2: Lift your injured leg off the ground, and keep your weight on the heel of your other foot.<br/>Hold onto a wall or chair for support if you need to.<br/>Step 3: Starting slowly, swing your leg like a pendulum from side to side. Try to avoid twisting your torso too much.<br/>Perform 20 times.",
          picture: require('../../assets/LegSwings.gif') },
        { title: 'Seated Butterfly',
          info: 'Step 1: Sit on the floor with your back straight and abs engaged.<br/>Step 2: Push the soles of your feet together in front of you. Let your knees bend out to the sides.<br/>Step 3: As you pull your heels toward you, relax your knees and allow them to inch closer to the floor.<br/>Take a deep breath, and hold this pose for 10 to 30 seconds.',
          picture: require('../../assets/SeatedTwist.gif') },
        { title: 'Lateral Squats',
          info: 'Step 1: Step 1: Stand up and place your feet double shoulder-width apart.<br/>Step 2: Shift your weight to your injured leg, bend that knee of the same leg, and push your hips back as if you’re going to sit down.<br/>Step 3: Drop as low as possible while keeping your other leg straight. Keep your chest up and your weight on your injured leg.<br/>Breathe deeply and hold for 10 to 20 seconds before returning to the starting position.',
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