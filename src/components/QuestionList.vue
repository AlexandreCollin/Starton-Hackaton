<template>
  <div class="question-list">
    <v-card elevation="8"
            outlined
            tile
    >
      <question-card
          title="Quelle est la couleur du cheval blanc d'Henry IV ?"
          :tags="[
           {name: 'histoire'}, {name: 'culture générale'}
          ]"
          :up-votes="15"
          :answers-count="5"
          :date="8"
      />
    </v-card>
    <v-card elevation="8"
            outlined
            tile>
      <question-card
          title="Comment print en C ?"
          :tags="[
           {name: 'test'},
          ]"
          :up-votes="15"
          :answers-count="5"
          :date="50"
      />
    </v-card>
    <v-card elevation="8"
            outlined
            tile>
      <question-card
          title="C'est quoi le problème ?"
          :tags="[
           {name: 'test'},
          ]"
          :up-votes="15"
          :answers-count="5"
          :date="42"
      />
    </v-card>
    <v-card elevation="8"
            outlined
            tile>
      <question-card
          title="Mais on est ou la ?"
          :tags="[
           {name: 'test'},
          ]"
          :up-votes="15"
          :answers-count="5"
          :date="8"
      />
    </v-card>
    <v-card elevation="8"
            outlined
            tile>
      <question-card
          title="Premier titre"
          :tags="[
           {name: 'test'},
          ]"
          :up-votes="15"
          :answers-count="5"
          :date="8"
      />
    </v-card>
    <v-card elevation="8"
            outlined
            tile>
      <question-card
          title="Premier titre"
          :tags="[
           {name: 'test'},
          ]"
          :up-votes="15"
          :answers-count="5"
          :date="8"
      />
    </v-card>
    <v-card elevation="8"
            outlined
            tile>
      <question-card
          title="Premier titre"
          :tags="[
           {name: 'test'},
          ]"
          :up-votes="15"
          :answers-count="5"
          :date="8"
      />
    </v-card>
  </div>
</template>

<script>
import QuestionCard from '@/components/QuestionCard';

export default {
  name: 'QuestionList',
  components: { QuestionCard },
};
</script>

<style scoped>
.question-list {
  height: 100%;
  overflow: auto;
}
::-webkit-scrollbar {
  width: 2px;
  height: 2px;
}
::-webkit-scrollbar-button {
  width: 0px;
  height: 0px;
}
::-webkit-scrollbar-thumb {
  background: #e1e1e1;
  border: 0px none #ffffff;
  border-radius: 50px;
}
::-webkit-scrollbar-thumb:hover {
  background: #ffffff;
}
::-webkit-scrollbar-thumb:active {
  background: #000000;
}
::-webkit-scrollbar-track {
  background: #666666;
  border: 0px none #ffffff;
  border-radius: 50px;
}
::-webkit-scrollbar-track:hover {
  background: #666666;
}
::-webkit-scrollbar-track:active {
  background: #333333;
}
::-webkit-scrollbar-corner {
  background: transparent;
}
</style>
