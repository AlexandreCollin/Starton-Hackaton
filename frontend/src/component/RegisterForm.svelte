<script lang="ts">
    import SizedBox from '../lib/SizedBox.svelte';
    import Row from '../lib/Row.svelte';
    import type { RegisterUser } from '../models/user';
    import http from '../service/http'
    
    let user: RegisterUser = {
        wallet: "",
        pseudo: "",
        password: ""
    };
    let passwordConfirmed: string = "";

</script>

<SizedBox backgroundColor="whitesmoke" width={800} height={800}>    
    <Row marginTop={400} justifyContent="space-between">
        <label for="wallet">Wallet</label>
        <input id="wallet" bind:value={user.wallet} type="text">
        <label for="pseudo">Pseudo</label>
        <input id="pseudo" bind:value={user.pseudo} type="text">
    </Row>
    <Row marginTop={20} justifyContent="space-between">
        <label for="password">Password</label>
        <input id="password" bind:value={user.password} type="text">
        <label for="passwordConfirmed">Confirm password</label>
        <input id="passwordConfirmer" bind:value={passwordConfirmed} type="text">
    </Row>
        <button class="button-create-count" on:click={() => {
            if (user.pseudo === "" || user.wallet === "" || user.password === "" || passwordConfirmed === "") {
                // faire une alert
            } else if (user.password !== passwordConfirmed) {
                // faire une alter
            } else {
                http.register(user);
            }
        }}>Create count</button>
</SizedBox>

<style>
    .button-create-count {
        margin-top: 30px;
        margin-left: 45%;
    }
</style>