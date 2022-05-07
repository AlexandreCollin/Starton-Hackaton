<script lang="ts">
    import Center from '../lib/Center.svelte';
    import SizedBox from '../lib/SizedBox.svelte';
    import Row from '../lib/Row.svelte';
    import LoginMetamask from '../component/LoginMetamask.svelte';

    let pseudo: string = "";
    let wallet: string = "";
</script>

<SizedBox backgroundColor="whitesmoke" width={800} height={800}>
    <Center>
        <SizedBox backgroundColor="black" borderRadius=50px width={100} height={100} />
    </Center>
    <LoginMetamask />
</SizedBox>