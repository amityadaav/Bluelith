import express from "express";
import { createProject } from "../controllers/projectController.js";

const router = express.Router();

router.post("/start-project", createProject);

export default router;
