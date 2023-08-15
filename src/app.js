import express from 'express';
import 'dotenv/config';
import apiRouter from './routes/api';
import connectDB from './configs/connectDB';
import cors from 'cors';

const app = express();
const port = process.env.APP_PORT || 3000;

app.use(cors({ origin: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
apiRouter(app);
connectDB();

app.listen(port, () => {
    console.log(`Example app listening on port ${process.env.APP_URL}:${process.env.APP_PORT}`);
})
