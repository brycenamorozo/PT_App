<template>
<div>
  <Navbar/>
  <div class="pa-7">
    <h1>Step 1: Self Diagnosis</h1>
    <h3 class="mt-3">Select specific area of pain</h3>
    <v-card class="mt-3" elevation="12" width="256">
      <v-navigation-drawer floating permanent>
        <v-list dense rounded>
          <v-list-item v-for="item in items" :key="item.title" :to="item.route">
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </v-card>
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
        {
          title: 'Triceps',
          route: '/incomplete',
        },
        {
          title: 'Biceps',
          route: '/incomplete',
        },
        {
          title: 'Deltoid',
          route: '/incomplete',
        },
        {
          title: 'Supraspinatus',
          route: '/incomplete',
        },
        {
          title: 'Infraspinatus',
          route: '/incomplete',
        },
        {
          title: 'I\'m not sure',
          route: '/incomplete',
        }
      ],
    }
  },
}
</script>