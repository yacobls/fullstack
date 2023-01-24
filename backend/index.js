import express from "express";
import cors from "cors";
import PkpRoute from "./routes/PkpRoute.js"
import PwpRoute from "./routes/PwpRoute.js"
import PplRoute from "./routes/PplRoute.js"
import PafeRoute from "./routes/PafeRoute.js"

const app = express();
app.use(cors());
app.use(express.json());
app.use(PkpRoute);
app.use(PwpRoute);
app.use(PplRoute);
app.use(PafeRoute);

app.listen(5000, ()=> console.log('Server up and running...'));