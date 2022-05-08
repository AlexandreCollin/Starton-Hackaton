<script lang="ts">
    import SizedBox from '$lib/SizedBox.svelte';
    import Center from '$lib/Center.svelte';
    import type { Question } from '../models/question';

    let questions: Question = {
        owner: "Didier",
        title: "Comment peter plus fort que Pierre en lendemain de soirée ?"
    };
</script>

<Center>
    <SizedBox backgroundColor="grey" width="75%" height="" >
        {#each Array(10) as _, i}
            <div class="box-question">
                <p class="text-question">{questions.title}</p>
            </div>
        {/each}
    </SizedBox>
</Center>

<style>
    .box-question {
        padding: 10px;
        margin: 10px;
        border: solid;
        border-color: pink;
        border-radius: 4px;
    }
    .text-question {
        font-size: 25px;
    }
</style>