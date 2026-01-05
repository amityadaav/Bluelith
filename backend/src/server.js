import dotenv from "dotenv";
dotenv.config();

import app from "./app.js";
import { connectDB } from "./config/db.js"; // ✅ NAMED IMPORT

const PORT = process.env.PORT || 5000;

connectDB(); // ✅ now this is a function

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
