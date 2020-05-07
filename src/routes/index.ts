import { Request, Response } from "express";
import express from "express";

const router = express.Router();

router.get("/", (req: Request, res: Response, next: () => void) => {
    res.send("Genealogy API Home Page");
    next();
});

export default router;
