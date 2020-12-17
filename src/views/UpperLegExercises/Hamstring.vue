<template>
<div>
  <Navbar/>
  <div class="pa-7">
    <h1>Hamstring</h1>
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
        { title: 'Seated Hamstring Stretch',
          info: "Step 1: Sit on the ground in a butterfly position.<br/>Step 2: Extend your injured leg with your knee slightly bent.<br/>Step 3: Bend forward at your waist over your injured leg at a very slow pace.<br/>You may hold your lower leg for support, but don’t force the stretch. You should only feel minimal pain.<br/>Hold for 10 seconds and work up to 30 seconds.",
          picture: require('../../assets/SeatedHamstringStretch.gif') },
        { title: 'Straight Leg Raise',
          info: 'Step 1: Lie on your back with your legs extended.<br/>Step 2: Bend the knee of your unaffected leg.<br/>Step 3: Press your foot into the floor.<br/>Step 4: Engage the thigh muscles on your affected side.<br/>Step 5: Raise your leg 8 inches from the floor.<br/>Step 6: Slowly return your leg to the floor.<br/>Do 2 sets of 15 repetitions.',
          picture: require('../../assets/StraightLegRaise.gif') },
        { title: 'Standing Hamstring Stretch',
          info: 'Step 1: Stand with your spine in a neutral position.<br/>Step 2: Then place your injured leg in front of you. Bend your other knee slightly.<br/>Step 3: Gently lean forward while placing your hands on your bent leg.<br/>Step 4: Be sure to keep your back straight to avoid hunching over your leg.<br/>Hold this stretch for 10 seconds and work up to 30 seconds.',
          picture: require('../../assets/StandingHamstringStretch.gif') },   
      ],
    }
  },
}
</script>