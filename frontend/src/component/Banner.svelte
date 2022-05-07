<script>
    import SizedBox from "../lib/SizedBox.svelte";
</script>

<SizedBox backgroundColor="black" width="100%" height={100}>
    <div class="button-place">
        <button class="button-sign">Sign In</button>
    </div>
</SizedBox>

<style>
    .button-place {
        display: flex;
        align-items: center;
        justify-content: end;
    }
    .button-sign {
        background-color:white;
        width: 150px;
        height: 100px;
        border: 0px;
        color: black;
        font-size: 20px;
        font-weight: bold;
    }
    .button-sign:hover {
        opacity: 0.8;
    }
</style>