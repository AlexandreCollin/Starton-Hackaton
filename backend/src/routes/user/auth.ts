import express from 'express';
import { User, LoginUser, RegisterUser } from '../../models/models';
import jwtService from '../../services/jwt';
import walletService from '../../services/wallet';
import authQuery from './auth.query';

const router = express.Router();

router.post('/login', async (req, res) => {
    const user: LoginUser = req.body;

    try {
        const userDb: RegisterUser = await authQuery.login(user);
        if (!jwtService.comparePassword(user.password, userDb.password))
            return res.status(400).json({"error": "Bad password"});
        const token = jwtService.generateToken({wallet: user.wallet, pseudo: userDb.pseudo});
        return res.status(200).json({"token": token});
    } catch (e) {
        return res.status(400).json({"Error": "bad request"});
    }
});

router.post('/register', async (req, res) => {
    const user: RegisterUser = req.body;

    console.log(user);
    if (!walletService.isValide(user.wallet)) {
        return res.status(400).json({"error": user.wallet + " is not valid"});
    }
    
    user.password = jwtService.hash(user.password);

    try {
        await authQuery.register(user);
        const token = jwtService.generateToken({wallet: user.wallet, pseudo: user.pseudo});
        return res.status(200).json({token: token});    
    } catch (e) {
        return res.status(500).send("Internal error");
    }
});

export default router;