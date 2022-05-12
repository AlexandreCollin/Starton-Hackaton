<template>
  <v-app>
    <v-app-bar
        app
        color="primary"
        dark
    >
      <div class="d-flex align-center">
        <v-img
            alt="Vuetify Logo"
            class="shrink mr-2"
            contain
            src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
            transition="scale-transition"
            width="40"
        />

        <v-img
            alt="Vuetify Name"
            class="shrink mt-1 hidden-sm-and-down"
            contain
            min-width="100"
            src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
            width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-text-field
          style="max-width: 400px"
          class="mr-16"
          single-line
          clearable
          label="Cherchez votre question"
          color="white"
          filled
          hide-details
          dense
          rounded
          outlined
          append-icon="mdi-magnify"
      ></v-text-field>
      <v-btn
          icon
          x-large
      >
        <v-icon>mdi-account</v-icon>
      </v-btn>
      <v-btn
          icon
          x-large
          class="mr-1"
      >
        <v-icon>mdi-trophy</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main style="height: 100vh">
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
<style>
html {
  overflow: auto;
}
</style>
