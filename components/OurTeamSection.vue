<template>
  <v-container id="about" class="about" fluid>
    <v-row align="center" justify="center" class="pa-6" fill-height>
      <v-col cols="8">
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
              <v-col cols="6" md="4" class="text-center">
                <v-card>
                  <v-card-title>
                    <span class="font-weigth-bold text-center">
                      VueJS Front End Enginner
                    </span>
                  </v-card-title>

                  <v-list>
                    <v-list-item class="grow">
                      <v-list-item-avatar color="grey darken-3">
                        <v-img
                          class="elevation-6"
                          alt=""
                          src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                        ></v-img>
                      </v-list-item-avatar>

                      <v-list-item-content>
                        <v-list-item-title>Evan You</v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list>
                </v-card>
              </v-col>
              <v-col cols="6" md="8">
                <v-card>1</v-card>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="4">
                <v-card>2</v-card>
              </v-col>
              <v-col cols="4">
                <v-card>2</v-card>
              </v-col>
              <v-col cols="4">
                <v-card>2</v-card>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: 'OurTeamComponent',
}
</script>
