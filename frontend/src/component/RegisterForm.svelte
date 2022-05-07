<script lang="ts">
    import Center from '../lib/Center.svelte';
    import SizedBox from '../lib/SizedBox.svelte';

    let pseudo:string = ""
    let adress:string = ""
    let password:string = ""

</script>

<SizedBox backgroundColor="whitesmoke" width={800} height={800}>
    <Center>
        <SizedBox backgroundColor="black" borderRadius=50px width={100} height={100} />
        <p>Wallet :</p>
        <input bind:value={adress} type="text">
        <p>Pseudo :</p>
        <input bind:value={pseudo} type="text">
        <p>Pseudo :</p>
        <input bind:value={pseudo} type="text">
    </Center>
</SizedBox>