import express  from "express"
import cors from "cors"
import dotenv from "dotenv"
import mongoose from "mongoose"
import depart from "./routes/depart.mjs"
import arrivee from "./routes/arrivee.mjs"

dotenv.config();

const uri = process.env.mongoDbURI
const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors());
app.use(express.json());

app.use("/depart", depart)
app.use("/arrivee", arrivee)

mongoose.connect(uri).then(
app.listen(PORT, () => {
  console.log("connect to mongo db successfully")
})
)
.catch((error) => {
  console.log(error)
})