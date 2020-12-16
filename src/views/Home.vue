<template>
<div>
    <Navbar/>
    <div class="pa-7">
        <h1>Step 1: Self Diagnosis</h1>
        <h3 class="mt-3">Select area of pain</h3>
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
        <!--<v-card class="mt-3" elevation="12" width="256">
            <v-navigation-drawer floating permanent>
                <v-list dense rounded>
                    <v-list-item v-for="item in items" :key="item.title" :to="item.route">
                        <v-list-item-content>
                            <v-list-item-title>{{ item.title }}</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
            </v-navigation-drawer>
        </v-card>-->
    </div>
</div>
</template>

<script>
import Navbar from '../components/Navbar'

export default {
    name: 'Home',
    components: {
        Navbar
    },

    data() {
        return {
            items: [
                { title: 'Neck', route: '/incomplete', picture: require('../assets/Neck.png') },
                { title: 'Arm', route: '/arm', picture: require('../assets/Arm.png') },
                { title: 'Chest', route: '/incomplete', picture: require('../assets/Chest.png') },
                { title: 'Upper Back', route: '/incomplete', picture: require('../assets/UpperBack.jpg') },
                { title: 'Lower Back', route: '/incomplete', picture: require('../assets/LowerBack.jpg') },
                { title: 'Hip', route: '/incomplete', picture: require('../assets/Hip.jpg') },
                { title: 'Upper leg', route: '/UpperLeg', picture: require('../assets/UpperLeg.png') },
                { title: 'Lower leg', route: '/lowerleg', picture: require('../assets/LowerLeg.png') },
            ],
        }
    },
}
</script>
