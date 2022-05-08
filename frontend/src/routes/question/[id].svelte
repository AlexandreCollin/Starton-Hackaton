<script lang="ts">
    import Center from '$lib/Center.svelte';
    import SizedBox from '$lib/SizedBox.svelte';
    import Margin from '$lib/Margin.svelte';

    import Banner from '../../component/Banner.svelte';
    import http from '../../service/http';
    import type Question from '../../models/question';
    import { questions } from '../../models/question';
    import { answers } from '../../models/answer';
    import { page } from '$app/stores';
    import FlexBox from '$lib/FlexBox.svelte';
    import Column from '$lib/Column.svelte';

    const question: Question | undefined = questions.find((value) => value.id.toString() == $page.params.id);
</script>

<Banner />
<Margin marginTop=200px>
    {#if question === undefined}
        <Center>
            <p>Eh beh tu joues a quoi la elle est ou la question ?</p>
        </Center>
    {:else}
        <Center>
            <SizedBox backgroundColor="grey" width="75%" borderRadius={25} padding={20}>
                <SizedBox backgroundColor="white" borderRadius={7.5} padding={10}>
                    <p class="style-text">{question.title}</p>
                    <hr width="100%">
                    {#each answers as answer}
                        <p>{answer.owner}</p>
                        <FlexBox width="80%" height="300px" textAlign="center" justifyContent="start" backgroundColor="whitesmoke" padding={20}>
                            <Column backgroundColor="grey" width="80px" height="100%" alignItems="center" justifyContent="center">
                                <button class="button-arrow" on:click={async () => {
                                        answer.upvote += 1;
                                        await http.createNft("0x9447c59ACF4849F8cEd390818f58b642298F3fda")    
                                    }}><i class="arrow up" /></button>
                                <p>{answer.upvote}</p>
                            </Column>
                            <SizedBox width="100%" height="100%" backgroundColor="rgb(210, 210, 210)" overflowY="scroll">
                                <p class="descritopn">{answer.description}</p>
                            </SizedBox>
                        </FlexBox>
                        <hr width="100%" class="other-answer">
                    {/each}
                </SizedBox>
            </SizedBox>
        </Center>
    {/if}
</Margin>

<style>
    .style-text {
        font-size: 25px;
    }
    .arrow {
        border: solid black;
        border-width: 0 3px 3px 0;
        display: inline-block;
        padding: 3px;
    }
    .button-arrow {
        height: 20px;
        width: 20px;
    }
    .up {
        transform: rotate(-135deg);
        -webkit-transform: rotate(-135deg);
    }
    .other-answer {
        border: 1px solid grey;
    }
</style>