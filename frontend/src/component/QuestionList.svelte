<script lang="ts">
    import SizedBox from '$lib/SizedBox.svelte';
    import Center from '$lib/Center.svelte';
    // import Divider from '$lib/Divider.svelte';
    import type { Question } from '../models/question';

    let questions: Question = {
        owner: "Didier",
        title: "Android RecyclerView only contain one item after adding items got from asynchronous retrofit calls ?",
        problemDescription: "Quos repentes omnibus cum ait nihil ita arduis obtruncatis ancoralia sentirent avertebant eisdem iniectantes montibus repentes sese parcendo quae sunt cedentium ancoralia opinantibus cedentium arduis noctes in adsistebant splendore nullis diu latebrosis ut somnum luna degressi velut sunt ideoque gradu aviditate nauticos quadrupedo etiam quae sentirent seseque sentirent Tullius cum opimas merces gradu aliquando ubi et non cum ait merces et cedentium confinia incendente per latebrosis effusos cedentium etiam per etiam iniectantes occultantes confinia Tullius viis homines cornuta merces non sentirent appeterent merces et splendore degressi arduis montibus in impeditis nondum turbinis ulli effusos noctes confinia in revertuntur sentirent latebrosis."
    };
</script>

<Center>
    <SizedBox backgroundColor="grey" width="75%" >
        {#each Array(10) as _, i}
            <div class="box-question">
                <div class="user-avis">
                    <span class="interest">Interest :1276</span>
                    <span style="color: green;">↑</span>
                    <p class="interest">Last hour view :1276</p>
                    <hr width="90%">
                    <p class="username">{questions.owner}</p>
                </div>
                <hr height="100%">
                <div class="title-description" >
                    <a class="text-question" href="/question">{questions.title}</a>
                    <p class="text-description">{questions.problemDescription}</p>
                </div>
            </div>
        {/each}
    </SizedBox>
</Center>

<style>
    .box-question {
        display: flex;
        padding: 10px;
        margin: 10px;
        height: 200px;
        border: solid;
        border-color: black;
        border-radius: 7px;
        justify-content: start;
    }
    .box-question:hover {
        border-color: #EEEE00;
        box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
    }
    .user-avis {
        padding-top: 30px;
        height: 75px;
        width: 10%;
    }
    .username {
        padding-top: 20px;
    }
    .interest {
        font-size: 12.5px;
    }
    .text-question {
        font-size: 25px;
    }
    .text-question:hover {
        text-shadow: #EEEE00 0 0 10px;
        cursor: pointer;
    }
    .title-description {
        width: 90%;
        padding-left: 10px;
    }
    .text-description {
        height: 75px;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }
</style>