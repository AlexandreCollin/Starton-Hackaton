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
    <Row backgroundColor="pink">
        <label for="wallet">Wallet</label>
        <input id="wallet" bind:value={adress} type="text">
        <label for="pseudo">Pseudo</label>
        <input id="pseudo" bind:value={pseudo} type="text">
    </Row>
    <Row>
        <label for="password">Password</label>
        <input id="password" bind:value={password} type="text">
        <label for="passwordConfirmed">Confirm password</label>
        <input id="passwordConfirmer" bind:value={passwordConfirmed} type="text">
    </Row>
</SizedBox>