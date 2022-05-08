import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

type NftService = {
    http: any,
    createBabySpongeBob: (destWallet: string) => Promise<string>
}

const nftService: NftService = {
    http: axios.create({
        baseURL: "https://api.starton.io/v2",
        headers: {
            "x-api-key": `${process.env.STARTON_API_KEY}`,
        },
    }),
    createBabySpongeBob: async (destWallet: string) => {
        try {
            const response = await nftService.http.post('/smart-contract/polygon-mumbai/0x41460568a7E08112844377cD2972522F93226Fcc/call', {
                "functionName": 'safeMint',
                "signerWallet": '0x3a33f49A19F38e3f92402c588f04e845fa5Ed457',
                "speed": "low",
                "params": [
                    destWallet,
                    'QmVJFj5N9vTohAiVkJ5NiH7sKELfTYv3bgQLStU5HukkGs'
                ],
            });
            console.log(response.data);
            return response.data;
        } catch (e) {
            console.log(e);
            return null;
        }
    }
}

export default nftService;