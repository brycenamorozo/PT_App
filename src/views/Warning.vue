<template>
<div>

    <v-container class="pa-10">

        <v-layout row wrap>
            <v-flex>
                <v-card color="blue darken-3" dark class="text-center ma-16 pt-10">
                    <v-card-text>
                        <v-icon large>mdi-alert</v-icon>
                        <h1 class="display-1">Use at your own discretion</h1>
                        <h2 class="mt-3">This app is designed for ages 13+</h2>
                    </v-card-text>

                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn light flat depressed href=" /home">
                            <span>Click to continue</span>
                            <v-icon right>mdi-arrow-right-circle</v-icon>
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>

    </v-container>

</div>
</template>

<script>
export default {
    name: 'Warning',
    data() {
        return {

        }
    }
}
</script>
