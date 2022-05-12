<template>
  <div class="home" style="height: 100%">
    <v-tabs
        style="height: 100%"
        vertical
        background-color="secondary"
    >
      <v-tab class="pa-8">
        <v-icon left>
          mdi-home
        </v-icon>
        Home
      </v-tab>
      <v-tab class="pa-8">
        <v-icon left>
          mdi-account
        </v-icon>
        Users
      </v-tab>

      <v-tab-item style="height: 100%">
        <v-card flat
                class="d-flex flex-column"
                style="height: 100%"
        >
          <v-card-title>
            <h2 class="ma-12 question-title">Questions les plus populaires</h2>
          </v-card-title>
          <v-card-text class="d-flex flex-column" style="height: 100%;">
            <div class="d-flex ml-auto">
              <v-btn
                  class="mr-8"
                  text
              >
                24h
              </v-btn>
              <v-btn
                  class="mr-8"
                  text
              >
                Mois
              </v-btn>
              <v-btn
                  class="mr-8"
                  text
              >
                Années
              </v-btn>
            </div>
            <QuestionList/>
          </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <p>
              Morbi nec metus. Suspendisse faucibus, nunc et pellentesque egestas,
              lacus ante convallis tellus,
              vitae iaculis lacus elit id tortor. Sed mollis, eros et ultrices tempus,
              mauris ipsum aliquam libero, non adipiscing dolor urna a orci.
              Curabitur ligula sapien, tincidunt non, euismod vitae,
              posuere imperdiet, leo. Nunc sed turpis.
            </p>

            <p>
              Suspendisse feugiat. Suspendisse faucibus, nunc et pellentesque egestas,
              lacus ante convallis tellus,
              vitae iaculis lacus elit id tortor.
              Proin viverra, ligula sit amet ultrices semper,
              ligula arcu tristique sapien, a accumsan nisi mauris ac eros.
              In hac habitasse platea dictumst. Fusce ac felis sit amet ligula pharetra condimentum.
            </p>

            <p>
              Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,
              quis gravida magna mi a libero.
              Nam commodo suscipit quam. In consectetuer turpis ut velit.
              Sed cursus turpis vitae tortor. Aliquam eu nunc.
            </p>

            <p>
              Etiam ut purus mattis mauris sodales aliquam. Ut varius tincidunt libero.
              Aenean viverra rhoncus pede. Duis leo. Fusce fermentum odio nec arcu.
            </p>

            <p class="mb-0">
              Donec venenatis vulputate lorem. Aenean viverra rhoncus pede.
              In dui magna, posuere eget, vestibulum et, tempor auctor, justo. Fusce commodo
              aliquam arcu. Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi.
            </p>
          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs>
  </div>
</template>

<script>

import QuestionList from '@/components/QuestionList';

export default {
  name: 'Home',
  components: {
    QuestionList,
  },
};
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@200&display=swap');
.question-title {
    font-family: 'Nunito', sans-serif;
    color: #E7E9EB
}
.v-window__container {
  height: 100% !important;
}
</style>
