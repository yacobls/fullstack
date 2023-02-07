import express from "express";
import cors from "cors";
import session from "express-session";
import dotenv from "dotenv";
import PkpRoute from "./routes/PkpRoute.js"
import PwpRoute from "./routes/PwpRoute.js"
import PplRoute from "./routes/PplRoute.js"
import PafeRoute from "./routes/PafeRoute.js"
import PoRoute from "./routes/PoRoute.js"
dotenv.config();

const app = express();
app.use(session({
    secret: process.env.SESS_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: 'auto'
    }
}));
app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
}));
app.use(express.json());
app.use(PkpRoute);  
app.use(PwpRoute);
app.use(PplRoute);
app.use(PafeRoute);
app.use(PoRoute);

app.listen(process.env.APP_PORT, () => {
    console.log('Server up and running...');
});