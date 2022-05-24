import express from "express";
import helmet from 'helmet';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app = express();
app.use(helmet());
app.use(cors(
    {
        origin:
            process.env.NODE_ENV == "development" ? "http://localhost:3000"
            : /dangonoticias\.com$/,
        credentials: true,
    }
));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cookieParser());

app.get('/hello', (req, res) => {
    res.send("hello world!");
})

export default app;