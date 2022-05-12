<template>
<div class="d-flex flex-row align-center py-4 px-4">
  <div class="d-flex flex-column align-center ml-8">
    <v-btn
        icon
        x-large
        :color="upVoteColor"
        @click="upVote"
    >
      <v-icon
          x-large
      >
        mdi-chevron-up
      </v-icon>
    </v-btn>
    <p> {{ upVotes }} votes </p>
  </div>
  <v-divider
      class="mx-16"
      vertical
  ></v-divider>

  <div class="d-flex flex-column">
    <p class="mb-2 title-question">{{ title }}</p>
    <div class="d-flex flex-row my-2">
      <v-chip
          v-for="(tag, index) in tags" :key="index"
          class="mr-2"
          color="tags"
      >
        {{ tag.name }}
      </v-chip>
    </div>
    <div class="d-flex flex-row">
      <p class="mr-4 text-question">{{ upVotes }} se posent cette question</p>
      <p class="mr-4 text-question">{{ answersCount }} réponses</p>
      <p class="mr-4 text-question">il y a {{ date }} min</p>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'QuestionCard',
  data() {
    return {
      upVoteColor: 'white',
    };
  },
  props: {
    title: {
      type: String,
      default: 'Alex suce des bites',
    },
    tags: {
      type: Array,
      default: null,
    },
    upVotes: {
      type: Number,
      default: 10,
    },
    answersCount: {
      type: Number,
      default: 10,
    },
    date: {
      type: Number,
      default: 10,
    },
  },
  methods: {
    upVote() {
      if (this.upVoteColor === 'white') {
        this.upVoteColor = 'success';
        this.upVotes += 1;
      } else if (this.upVoteColor === 'success') {
        this.upVoteColor = 'white';
        this.upVotes -= 1;
      }
    },
  },
};
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@200&display=swap');
    .title-question {
        font-family: 'Nunito', bold;
        font-size: 30px;
        color: #2c8ffa
    }
    .text-question {
        font-family: 'Nunito', bold;
        font-size: 15px;
    }
</style>
