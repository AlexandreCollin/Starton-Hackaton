<script lang="ts">
    import Center from '../lib/Center.svelte';
    import SizedBox from '../lib/SizedBox.svelte';
    import Row from '../lib/Row.svelte';

    let pseudo:string = "";
    let password:string = "";
</script>

<SizedBox backgroundColor="whitesmoke" width={100} height={100} margin-top="50%">
    <Center>
        <SizedBox backgroundColor="black" borderRadius=50px width={100} height={100} />
        <Row>
        <label for="pseudo">Pseudo</label>
        <input id="pseudo" bind:value={pseudo} type="text">
        <label for="password">Password</label>
        <input id="password" bind:value={password} type="text">
        </Row>
    </Center>
</SizedBox>