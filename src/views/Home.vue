<template>
<div>
    <Navbar />
    <div class="pa-7">
        <h1>Step 1: Self Diagnosis</h1>
        <h3 class="mt-3">Select area of pain</h3>
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
import Navbar from '../components/Navbar'

export default {
    name: 'Home',
    components: {
        Navbar
    },

    data() {
        return {
            items: [{
                    title: 'Neck',
                    route: '/incomplete',

                },
                {
                    title: 'Arm',
                    route: '/arm',
                },
                {
                    title: 'Chest',
                    route: '/incomplete',
                },
                {
                    title: 'Upper Back',
                    route: '/incomplete',
                },
                {
                    title: 'Lower Back',
                    route: '/lowerback',
                },
                {
                    title: 'Hip',
                    route: '/incomplete',
                },
                {
                    title: 'Upper leg',
                    route: '/incomplete',
                },
                {
                    title: 'Lower leg',
                    route: '/lowerleg',
                },
            ],
        }
    },
}
</script>
