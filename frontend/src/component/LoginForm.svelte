<script lang="ts">
    import Center from '../lib/Center.svelte';
    import SizedBox from '../lib/SizedBox.svelte';
    import Column from '../lib/Column.svelte';

    let pseudo:string = "";
    let password:string = "";

    function handleClick() {
        console.log("CONNEXION")
    }
</script>

<SizedBox backgroundColor=white width={500} height={670} marginTop=95px borderRadius=25px>
    <SizedBox backgroundColor="black" borderRadius=100px width={150} height={150} marginLeft=175px marginTop=50px/>
    <Center>
            <Column>
                <label class="fst-label" for="pseudo">Pseudo</label>
                <input class="input-style" id="pseudo" bind:value={pseudo} type="text">
                <label class="fst-label" for="password">Password</label>
                <input class="input-style" id="password" bind:value={password} type="text">
                <button class="button-style" on:click|once={handleClick}>
                    Connexion
                </button>
            </Column>
    </Center>
</SizedBox>

<style>
    .fst-label {
        margin-top: 50px;
        margin-left: 50px;
    }
    .input-style {
        justify-content:center;
        align-items: center;
        margin-top:20px;
        margin-left:50px;
        width: 400px;
        height: 35px;
    }
    .button-style {
        background-color: black;
        margin-top: 90px;
        margin-left: 75px;
        color: white;
        cursor: pointer;
        border-radius: 20px;
        padding: 8px 12px;
        font-weight: bold;
        font-size: 17.5px;
        width: 350px;
        height: 75px;
    }
</style>