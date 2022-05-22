import 'dotenv/config';
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import {connect} from "./utils/database.connection";

const app = express();
const PORT = process.env.PORT || "8050";

//APP MIDDLEWARE
app.use(bodyParser.json());
app.use(cors());
app.use(express.json({ limit: "20mb" }));

//IMPORT ROUTES
const markingSchemaRoutes = require('./api/routes/markingSchema.r');
app.use(markingSchemaRoutes);

app.listen(PORT, () => {
    console.log('🚀 SERVER IS UP AND RUNNING ON PORT :', PORT);
    connect();
});