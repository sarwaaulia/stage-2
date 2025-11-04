import express from "express";
import postRoute from "./routes/post-route"
import createRoute from "./routes/create-order-route";
import orderRoute from "./routes/create-order-route"
import updateRoute from "./routes/post-route";
import deleteRoute from "./routes/post-route";

const app = express()
const PORT = 3000

app.use(express.json());

app.use("/api", postRoute)
app.use("/api", createRoute)
app.use("/api", updateRoute)
app.use("/api", deleteRoute)
app.use("/api", orderRoute)


app.listen(PORT, ()=>{
    console.log("running")
});
