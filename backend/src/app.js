import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import contactRoutes from "./routes/contact.js";
import errorHandler from "./middlewares/error.js";
import adminRoutes from "./routes/adminRoutes.js";
import scheduleCallRoutes from "./routes/scheduleCall.js";
import projectRoutes from "./routes/projectRoutes.js";
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API running...");
});

app.use("/api/contact", contactRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api", scheduleCallRoutes);

app.use("/api/projects", projectRoutes);
app.use(errorHandler);

export default app;
