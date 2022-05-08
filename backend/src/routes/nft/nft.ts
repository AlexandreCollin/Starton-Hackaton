import express from 'express';
import nftService from '../../services/nft';

const router = express.Router();

router.post('/baby-sponge-bob/:wallet', async (req, res) => {
    const wallet = req.params.wallet;

    const response = await nftService.createBabySpongeBob(wallet);

    if (response === null)
        return res.status(500).json({"error": "Internal error"});
    return res.status(200).json({"response": response});
});

export default router;