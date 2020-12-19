<template>
  <div>
    <Navbar/>
    <h1 class="ma-3">Calendar</h1>
    <v-row>
    <v-col>
      <v-sheet height="600" class="mx-10">
        <v-calendar :now="today" :value="today" color="primary">
          <template v-slot:day="{ date }">
            <v-row class="fill-height">
              <template v-if="tracked[date]">
                <v-container>
                  <v-textarea 
                    filled auto-grow
                    class="caption font-weight-light"
                  ></v-textarea>
                </v-container>
              </template>
            </v-row>
          </template>
        </v-calendar>
      </v-sheet>
    </v-col>
    </v-row>
  </div>
</template>

<script>
import Navbar from '../components/Navbar'

export default {
    name: 'Home',
    
    components: { 
      Navbar,
   },

    data: () => ({
      today: '2020-12-18',
      tracked: {
        '2020-12-31': [],
        '2020-12-30': [], '2020-12-29': [], '2020-12-28': [],
        '2020-12-27': [], '2020-12-26': [], '2020-12-25': [],
        '2020-12-24': [], '2020-12-23': [], '2020-12-22': [],
        '2020-12-21': [], '2020-12-20': [], '2020-12-19': [],
        '2020-12-18': [], '2020-12-17': [], '2020-12-16': [],
        '2020-12-15': [], '2020-12-14': [], '2020-12-13': [],
        '2020-12-12': [], '2020-12-11': [], '2020-12-10': [],
        '2020-12-09': [], '2020-12-08': [], '2020-12-07': [],
        '2020-12-06': [], '2020-12-05': [], '2020-12-04': [],
        '2020-12-03': [], '2020-12-02': [], '2020-12-01': [],
      },
    }),
}
</script>