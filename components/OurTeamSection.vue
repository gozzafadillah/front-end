<template>
  <section id="ourteam">
    <v-container id="ourteam" class="ourteam" fluid>
      <v-row align="center" justify="center" fill-height class="pa-md-16">
        <v-col cols="12" md="8">
          <v-row align="center" justify="space-around">
            <v-col cols="12" class="text-center">
              <h2 class="text-h3 font-weight-bold">Our Team</h2>
              <p>
                Along with people who are professionals in their fields, we
                guarantee the convenience and security of your transactions
              </p>
            </v-col>
            <v-col cols="12" align="center">
              <v-row align="center" justify="center">
                <v-col
                  v-for="(team, i) in teams"
                  :key="i"
                  cols="12"
                  md="4"
                  class="text-center"
                >
                  <v-card flat>
                    <div class="text-h6 font-weight-bold mb-4">
                      {{ team.role }}
                    </div>

                    <v-row align="center" justify="center" align-self="center">
                      <v-col cols="6" align="center">
                        <v-img
                          alt=""
                          :src="team.people[0].avatar"
                          max-width="100"
                        ></v-img>
                        {{ team.people[0].name }}
                      </v-col>
                      <v-col cols="6" align="center">
                        <v-img
                          alt=""
                          :src="team.people[1].avatar"
                          max-width="100"
                        ></v-img>
                        {{ team.people[1].name }}
                      </v-col>
                    </v-row>
                  </v-card>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>
<script>
export default {
  name: 'OurTeamComponent',
  data() {
    return {
      teams: [
        {
          role: 'VueJS Front End Engineer',
          people: [
            {
              name: 'Nanda Hady Mulya',
              avatar: require('static/assets/avatar/nanda.svg'),
            },
            {
              name: 'Gisela Ramadinawati',
              avatar: require('static/assets/avatar/gisel.svg'),
            },
          ],
        },
        {
          role: 'Golang Back End Engineer',
          people: [
            {
              name: 'M. Fadhillah Abdul A.',
              avatar: require('static/assets/avatar/fadhil.svg'),
            },
            {
              name: 'Indah Lestari',
              avatar: require('static/assets/avatar/indah.svg'),
            },
          ],
        },
        {
          role: 'Golang Back End Engineer',
          people: [
            {
              name: 'Abel Melido Bangun',
              avatar: require('static/assets/avatar/abel.svg'),
            },
            {
              name: 'Luqman Wiranto',
              avatar: require('static/assets/avatar/luqman.svg'),
            },
          ],
        },
        {
          role: 'UI/UX Designer',
          people: [
            {
              name: 'Ghilman Faza',
              avatar: require('static/assets/avatar/ghilman.svg'),
            },
            {
              name: 'Ardi Sugondo',
              avatar: require('static/assets/avatar/ardi.svg'),
            },
          ],
        },
        {
          role: 'Quality Engineer',
          people: [
            {
              name: 'M. Fatkhul Allam',
              avatar: require('static/assets/avatar/alam.svg'),
            },
            {
              name: 'Sri Wulandari',
              avatar: require('static/assets/avatar/wulan.svg'),
            },
          ],
        },
        {
          role: 'Mobile Flutter',
          people: [
            {
              name: 'Reza Syahputra S.',
              avatar: require('static/assets/avatar/reza.svg'),
            },
            {
              name: 'M. Fajar Al Fath',
              avatar: require('static/assets/avatar/alfath.svg'),
            },
          ],
        },
      ],
    }
  },
}
</script>
