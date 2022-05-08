<script>
    import SizedBox from "../lib/SizedBox.svelte";
    import Row from "../lib/Row.svelte";
    import SubBanner from "../component/SubBanner.svelte";
</script>

<SizedBox backgroundColor="black" width="100%" height={150} borderBottom="solid" borderBottomColor="rgb(203, 203, 2)">
    <Row justifyContent="space-between">
        <a class="title" href="/">Frames.</a>
        <button class="button-sign" on:click={() => {window.location.href='/login'}}>Sign in</button>
    </Row>
</SizedBox>
<SubBanner />

<style>
    .title {
        color: white;
        font-weight: bold;
        margin-top: 55px;
        margin-left: 40px;
        font-size: 35px;
        text-decoration: none;
    }
    .button-sign {
        background-color:rgb(203, 203, 2);
        width: 200px;
        height: 150px;
        color: black;
        font-size: 25px;
        font-weight: bold;
        border: none;
        border-bottom: solid;
        border-bottom-color: rgb(203, 203, 2);
        border-left: solid;
        border-left-color: rgb(203, 203, 2);
        border-left-width: 4px;
        cursor: pointer;
    }
    .button-sign:hover {
        opacity: 0.9;
    }
</style>