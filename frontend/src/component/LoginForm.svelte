<script lang="ts">
    import Center from '../lib/Center.svelte';
    import SizedBox from '../lib/SizedBox.svelte';
    import Row from '../lib/Row.svelte';

    let pseudo:string = "";
    let adress:string = "";
    let password:string = "";
    let passwordConfirmed:string = "";
</script>

<SizedBox backgroundColor="whitesmoke" width={800} height={800}>
    <Center>
        <SizedBox backgroundColor="black" borderRadius=50px width={100} height={100} />
        <label for="wallet">Wallet</label>
        <input id="wallet" bind:value={adress} type="text">
        <label for="pseudo">Pseudo</label>
        <input id="pseudo" bind:value={pseudo} type="text">
        <label for="password">Password</label>
        <input id="password" bind:value={password} type="text">
        <label for="passwordConfirmed">Confirm password</label>
        <input id="passwordConfirmer" bind:value={passwordConfirmed} type="text">
    </Center>
</SizedBox>