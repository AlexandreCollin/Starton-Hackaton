<script lang="ts">
    import SizedBox from '../lib/SizedBox.svelte';
    import Center from '../lib/Center.svelte';
    import Column from '../lib/Column.svelte';
    import type { RegisterUser } from '../models/user';
    import http from '../service/http'
    
    let user: RegisterUser = {
        wallet: "",
        pseudo: "",
        password: ""
    };
    let passwordConfirmed: string = "";
    let error: string = "";
</script>

<SizedBox backgroundColor=white width={500} height={670} marginTop=95px borderRadius=25px>
    <SizedBox backgroundColor="black" borderRadius=100px width={150} height={150} marginLeft=175px marginTop=50px/>   
    <Center>
        <Column>
            <label class="fst-label" for="pseudo">Pseudo</label>
            <input class="input-style" id="pseudo" bind:value={user.pseudo} type="text">
            <label class="fst-label" for="password">Password</label>
            <input class="input-style" id="password" bind:value={user.password} type="password">
            <label class="fst-label" for="passwordConfirmed">Confirm password</label>
            <input class="input-style" id="passwordConfirmer" bind:value={passwordConfirmed} type="password">
            <label class="fst-label" for="wallet">Wallet address</label>
            <input class="input-style" id="wallet" bind:value={user.wallet} type="text">
            {#if error.length > 0}
                <small>{error}</small>
            {/if}
            <button class="button-style" on:click={() => {
            if (user.pseudo === "" || user.wallet === "" || user.password === "" || passwordConfirmed === "") {
                error = "A field is empty."
            } else if (user.password !== passwordConfirmed) {
                error = "Password and Confirm Password must be same.";
            } else {
                http.register(user);
            }
        }}>Create account</button>
        <small class="small-login-message">
            <a href="/login">
                Already registered ?
            </a>
        </small>
        </Column>
    </Center>
</SizedBox>

<style>
    .fst-label {
        margin-top: 20px;
        margin-left: 50px;
    }
    .small-login-message {
        color: rgb(0, 85, 128);
        margin-left: 80px;
        margin-top: 5px;
        font-size: 15px;
    }
    .input-style {
        justify-content:center;
        align-items: center;
        margin-top:10px;
        font-size: 20px;
        margin-left:50px;
        width: 400px;
        height: 35px;
    }
    .button-style {
        background-color: black;
        margin-top: 20px;
        margin-left: 75px;
        color: white;
        cursor: pointer;
        border-radius: 20px;
        padding: 8px 12px;
        font-weight: bold;
        font-size: 17.5px;
        width: 350px;
        height: 50px;
    }
</style>