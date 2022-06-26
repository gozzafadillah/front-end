<template>
  <div class="ml-4">

    <div class="font-weight-bold display-1 mb-8">
        <v-btn icon to="/products" class="mr-4">
            <v-icon color="primary">
                mdi-arrow-left
            </v-icon>
        </v-btn>
        Add Product-Payment
    </div>
    <div class="font-weight-bold headline mb-3">
        Nama Category
    </div>

    <v-row>
        <v-col cols="6">
            <v-text-field
            solo
            placeholder="Nama category baru"
            >
            </v-text-field>
        </v-col>
    </v-row>

    <div class="font-weight-bold headline my-3">
        Pilih icon
    </div>

    <v-card max-width="40%">
        <v-card-actions>
            <v-btn icon>
                <v-icon color="primary">
                    mdi-home-outline
                </v-icon>
            </v-btn>
            <v-btn icon>
                <v-icon color="primary">
                    mdi-bell-outline
                </v-icon>
            </v-btn>
            <v-btn icon>
                <v-icon color="primary">
                    mdi-timer-sand-empty
                </v-icon>
            </v-btn>
            <v-btn icon>
                <v-icon color="primary">
                    mdi-hospital
                </v-icon>
            </v-btn>
            <v-btn icon>
                <v-icon color="primary">
                    mdi-play-box-outline
                </v-icon>
            </v-btn>
        </v-card-actions>
    </v-card>

    <div class="font-weight-bold headline my-3">
        Gambar product
    </div>

    <v-btn
    color="primary"
    class="px-5 mt-3"
    large
    outlined
    >
        <v-icon class="mr-4">
            mdi-upload
        </v-icon>
        Upload
    </v-btn>

    <div>
        <v-btn 
        color="primary"
        class="px-5 mt-15"
        large
        outlined
        >
            <v-icon class="mr-4">
                mdi-plus-box
            </v-icon>
            input filed
        </v-btn>

        <v-btn 
        color="primary"
        class="px-5 mt-15"
        large
        outlined
        >
            <v-icon class="mr-4">
                mdi-plus-box
            </v-icon>
            jenis product
        </v-btn>
    </div>

    <v-btn
    color="primary"
    class="px-16 mt-15"
    large
    >
        Add
    </v-btn>

  </div>
</template>

<script>
export default {
    name: 'addProductPayment'
}
</script>

<style>

</style>