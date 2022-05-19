import 'dotenv/config';
import express from "express";
import cors from "cors";
//import logger from './utils/logger';

const app = express();
const PORT = process.env.PORT || "8050";

app.use(cors());
app.use(express.json({ limit: "20mb" }));

app.get("/", (req, res, next) => {
    res.send("<h2>🈯 Research Project Management Tool</h2>");
    next();
})

app.listen(PORT, () => {
    console.log('🚀 SERVER IS UP AND RUNNING ON PORT :', PORT);
});