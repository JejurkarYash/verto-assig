import express from "express";
import cors from "cors";
const app = express();
// middlewaares 
app.use(express.json());
app.use(cors());
// health check 
app.get("/", (req, res) => {
    return res.json({
        message: "Http Server is now running..."
    });
});
export default app;
//# sourceMappingURL=app.js.map