<script lang="ts">
    import SizedBox from '$lib/SizedBox.svelte';
    import Center from '$lib/Center.svelte';
    import { questions } from '../models/question';
    import type Question from 'src/models/question';
</script>

<Center>
    <SizedBox backgroundColor="grey" width="75%" borderRadius={25} padding={20}>
        {#each questions as question}
            <div class="box-question">
                <div class="user-avis">
                    <span class="interest">Interest: 1276</span>
                    <span style="color: green;">↑</span>
                    <p class="interest">Last hour view: 1276</p>
                    <hr width="90%">
                    <p class="username">{question.owner}</p>
                </div>
                <hr height="100%">
                <div class="title-description" >
                    <a class="text-question" href="/question/{question.id}">{question.title}</a>
                    <p class="text-description">{question.description}</p>
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
        transition: box-shadow 0.1s ease-in-out;
    }
    .box-question:hover {
        transition: box-shadow 0.2s ease-in-out;
        box-shadow: rgba(0, 0, 0, 0.3) 2px 19px 38px, rgba(0, 0, 0, 0.22) 2px 15px 12px;
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
        /* text-shadow: #EEEE00 0 0 10px; */
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