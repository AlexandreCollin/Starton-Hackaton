<script lang="ts">
    import Center from '../lib/Center.svelte';
    import SizedBox from '../lib/SizedBox.svelte';
    import Column from '../lib/Column.svelte';
    import type { LoginUser } from '../models/user';
    import http from '../service/http';
    import Margin from '../lib/Margin.svelte';
    import Alignement from '../lib/Alignement.svelte';
import Banner from './Banner.svelte';

    let user: LoginUser = {
        wallet: "",
        password: ""
    };
    let empty: boolean = false;
</script>

<Banner />

<Margin marginTop={100}>
    <SizedBox backgroundColor=white width={500} height={670} borderRadius=25px>
        <SizedBox height={160} paddingTop={10}>
            <Alignement alignItems="Center" >
                    <SizedBox backgroundColor="black" borderRadius=100px width={150} height={150} marginLeft=175px marginTop=50px/>
            </Alignement>
        </SizedBox>
        <Center>
                <Column>
                    <label class="fst-label" for="pseudo">Wallet address</label>
                    <input class="input-style" id="pseudo" bind:value={user.wallet} type="text">
                    <label class="fst-label" for="password">Password</label>
                    <input class="input-style" id="password" bind:value={user.password} type="password">
                    {#if empty}
                        <small class="small-error-message">A field is empty.</small>
                    {/if}
                    <button class="button-style" on:click={async () => {
                        if (user.wallet === "" || user.password === "") {
                            empty = true;
                        }
                        if (await http.login(user)) {
                            window.location.href = "/";
                        } else {
                            empty = true;
                        }
                    }}>Connexion</button>
                    <small class="small-register-message">
                        <a href="/register">
                            Not registered yet ?
                        </a>
                    </small>
                </Column>
        </Center>
    </SizedBox>

</Margin>
<style>
    .small-register-message {
        color: rgb(0, 85, 128);
        margin-left: 80px;
        margin-top: 5px;
        font-size: 15px;
    }
    .small-error-message {
        color: red;
        margin-left: 50px;
        margin-top: 5px;
    }
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
        margin-top: 70px;
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