<script>
    import SizedBox from "../lib/SizedBox.svelte";
    import Row from "../lib/Row.svelte";
    import Center from "../lib/Center.svelte";
</script>

<SizedBox width="100%" height={75} margin={0}>
        <Row gap={0}>
            <button class="button-sign">My account</button>
            <button class="button-sign">My collection</button>
            <button class="button-sign">Forum</button>
        </Row>
</SizedBox>

<style>
    .button-sign {
        background-color:black;
        width: 640px;
        height: 75px;
        color: white;
        font-size: 20px;
        font-weight: bold;
        padding: 0;
        cursor: pointer;
        border: none;
    }
    .button-sign:hover {
        opacity: 0.9;
        color: rgb(132, 127, 127);
    }
</style>