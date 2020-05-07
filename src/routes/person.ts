import express from "express";
import { findAll, findOne, create, put, remove, patch } from "../controllers/person/person";

const router = express.Router();

router.get("/", findAll);
router.get("/:_id", findOne);
router.post("/", create);
router.put("/:_id", put);
router.patch("/:_id", patch);
router.delete("/:_id", remove);

export default router;
