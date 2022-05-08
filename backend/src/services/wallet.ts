import web3 from "web3";

type WalletService = {
    isValide: (wallet: string) => boolean,
}

const walletService: WalletService = {
    isValide: (wallet: string) => {
        try {
            return web3.utils.isAddress(wallet);
        } catch(e) {
            return false;
        }
    }
}

export default walletService;