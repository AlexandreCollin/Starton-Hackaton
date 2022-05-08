<script>
    import SizedBox from "../lib/SizedBox.svelte";
    import Row from "../lib/Row.svelte";
</script>

<div class="fix-banner">
    <SizedBox borderBottom="solid" borderBottomColor="rgb(203, 203, 2)" backgroundColor="black">
            <Row gap={0}>
                <a class="title" href="/">Frames.</a>
                <button class="button-category">My account</button>
                <button class="button-category">My collection</button>
                <button class="button-category">Forum</button>
                <button class="button-sign" on:click={() => {window.location.href='/login'}}>Sign in</button>
            </Row>
    </SizedBox>
</div>

<style>
    .fix-banner {
        top: 0;
        width: 100%;
        bottom: 0;
        height: 70px;   
        position: fixed;
    }
    .button-category {
        width: 100%;
        height: 60px;
        color: white;
        background-color: black;
        font-size: 20px;
        font-weight: bold;
        padding: 0;
        cursor: pointer;
        border: none;
    }
    .button-category:hover {
        background-color: rgb(50, 50, 50);
    }
    .button-sign:hover {
        background-color: rgb(50, 50, 50);
    }
    .title {
        color: white;
        font-weight: bold;
        margin-top: 10px;
        margin-left: 40px;
        font-size: 35px;
        text-decoration: none;
    }
    .button-sign {
        width: 500px;
        height: 60px;
        font-size: 25px;
        font-weight: bold;
        border: none;
        border-left: solid;
        border-left-color: rgb(203, 203, 2);
        border-left-width: 4px;
        cursor: pointer;
        background-color: black;
        color: white;
    }
    .button-sign:hover {
        opacity: 0.9;
    }
</style>