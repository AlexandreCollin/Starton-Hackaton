<script context="module" lang="ts">
    import detectEthereumProvider from '@metamask/detect-provider';

    const loginMetamask = async () => {
        const provider = await detectEthereumProvider();
        
        if (provider) {

            console.log('Ethereum successfully detected!')
            const chainId = await provider.request({
            method: 'eth_chainId'
            })
            } else {

            // if the provider is not detected, detectEthereumProvider resolves to null
                console.error('Please install MetaMask !');
            }
    }
</script>

<script lang="ts">

</script>

