import express from 'express';
import dotenv from 'dotenv';
import auth from './routes/user/auth';

const app = express();

dotenv.config();

const PORT: string = process.env.PORT || "3000";
const HOST: string = process.env.HOST || "http://127.0.0.1";

app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type, authorization');
    res.setHeader('Access-Control-Allow-Credentials', "true");
    next();
});

app.use((req, _, next) => {
    const client = req.socket.remoteAddress?.split(':', 4)[3];
    console.log(client + ": " + req.method + " " + req.originalUrl);
    next();
});

app.get('/health', (req, res) => res.status(200).json({"status": "Up"}));

app.use('/', auth);

app.listen(PORT, () => console.log("Application run on " + HOST + ":" + PORT));
