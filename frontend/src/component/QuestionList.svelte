<script lang="ts">
    import SizedBox from '$lib/SizedBox.svelte';
    import Center from '$lib/Center.svelte';
    import type { Question } from '../models/question';

    let questions: Question = {
        owner: "Didier",
        title: "Comment peter plus fort que Pierre en lendemain de soirée ?",
        problemDescription: "Quos repentes omnibus cum ait nihil ita arduis obtruncatis ancoralia sentirent avertebant eisdem iniectantes montibus repentes sese parcendo quae sunt cedentium ancoralia opinantibus cedentium arduis noctes in adsistebant splendore nullis diu latebrosis ut somnum luna degressi velut sunt ideoque gradu aviditate nauticos quadrupedo etiam quae sentirent seseque sentirent Tullius cum opimas merces gradu aliquando ubi et non cum ait merces et cedentium confinia incendente per latebrosis effusos cedentium etiam per etiam iniectantes occultantes confinia Tullius viis homines cornuta merces non sentirent appeterent merces et splendore degressi arduis montibus in impeditis nondum turbinis ulli effusos noctes confinia in revertuntur sentirent latebrosis."
    };
</script>

<Center>
    <SizedBox backgroundColor="grey" width="75%" height="" >
        {#each Array(10) as _, i}
            <div class="box-question">
                <p class="text-description">{questions.problemDescription}</p>
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