import Express = require("express");
import postRoutes from "./routes/post-route"
import router from "./routes/post-route";

const app = Express()
const port = 5000

app.use("/api/v1", router)


app.listen(port, ()=>{
    console.log("running")
});