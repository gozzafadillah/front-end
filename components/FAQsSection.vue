<template>
  <section id="faq">
    <v-container id="faq" class="faq" fluid>
      <v-row align="center" justify="center" fill-height class="pa-md-16">
        <v-col cols="12" md="8">
          <v-row align="center" justify="center">
            <v-col cols="12" class="text-center">
              <h2 class="text-h3 font-weight-bold">FAQ's</h2>
            </v-col>
          </v-row>
          <v-row align="center" justify="center">
            <v-col cols="12" md="8">
              <v-list>
                <v-list-group
                  v-for="item in items"
                  :key="item.title"
                  v-model="item.active"
                  no-action
                  class="card__faq ma-6"
                >
                  <template v-slot:activator>
                    <v-list-item-content class="pa-6" v-text="item.question">
                    </v-list-item-content>
                  </template>

                  <v-list-item v-for="child in item.items" :key="child.title">
                    <v-list-item-content
                      class="pa-6"
                      v-text="child.answer"
                    ></v-list-item-content>
                  </v-list-item>
                </v-list-group>
              </v-list>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>
<script>
export default {
  name: 'FAQsComponent',
  data() {
    return {
      items: [
        {
          question: 'Is Bayeue safe?',
          items: [
            {
              answer:
                'of course! You can top up any type of e-wallet using Bayeue. go to the Top Up menu then select the e-wallet that you want to top up.',
            },
          ],
        },
        {
          question: 'Can I top up my e-wallet using Bayeue?',
          active: true,
          items: [
            {
              answer:
                'of course! You can top up any type of e-wallet using Bayeue. go to the Top Up menu then select the e-wallet that you want to top up.',
            },
          ],
        },
        {
          question: 'How to see the last transaction on Bayeue?',
          items: [
            {
              answer:
                'of course! You can top up any type of e-wallet using Bayeue. go to the Top Up menu then select the e-wallet that you want to top up.',
            },
          ],
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.card__faq {
  background: #f1f9fd;
  border-radius: 10px;
}
</style>
