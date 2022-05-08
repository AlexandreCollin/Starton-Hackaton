<script lang="ts">
    import Center from '$lib/Center.svelte';
</script>


<main>
    <Center>
        <input class="search-bar" type="search" placeholder="       Find question"/>
        <button class="search-button">Search</button>
    </Center>
</main>

<style>
    main {
        width: 50%;
    }
    .search-bar {
        width: 100%;
        height: 50px;
        border-radius: 30px 0px 0px 30px;
        border: none;
    }
    .search-button {
        height: 50px;
        border-radius: 0px 30px 30px 0px;
        padding-right: 20px;
        padding-left: 10px;
        border: none;
    }
</style>