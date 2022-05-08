<script lang="ts">
    import QuestionList from '../component/QuestionList.svelte'
    import Banner from '../component/Banner.svelte';
    import SearchBar from '../component/SearchBar.svelte';
    import Margin from '$lib/Margin.svelte';
    import Column from '$lib/Column.svelte';
    import Center from '$lib/Center.svelte';
</script>

<Banner />

<Margin marginTop=200px>
    <Column gap={50}>
        <Center>
            <SearchBar/>
        </Center>
        <QuestionList />
    </Column>
</Margin>    

<style>

</style>