<template>
  <div class="ml-4">
    <div class="font-weight-bold display-1 mb-8">
      <v-btn icon to="/products" class="mr-4">
        <v-icon color="primary"> mdi-arrow-left </v-icon>
      </v-btn>
      Add Category
    </div>
    <div class="font-weight-bold headline mb-3">Nama Category</div>

    <v-row>
      <v-col cols="6">
        <v-text-field solo placeholder="Nama category baru"> </v-text-field>
      </v-col>
    </v-row>

    <div class="font-weight-bold headline my-3">Pilih icon</div>

    <v-card max-width="40%">
      <v-card-actions>
        <v-btn icon>
          <v-icon color="primary"> mdi-home-outline </v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon color="primary"> mdi-bell-outline </v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon color="primary"> mdi-timer-sand-empty </v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon color="primary"> mdi-hospital </v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon color="primary"> mdi-play-box-outline </v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>

    <v-btn color="primary" class="px-10 mt-10" large> Add </v-btn>
  </div>
</template>

<script>
export default {
  name: 'addCategory',
  layout: 'blank',
}
</script>

<style></style>
