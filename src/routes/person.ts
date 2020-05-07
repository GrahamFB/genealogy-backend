import express from "express";
import { findAll, findOne, create, update, remove } from "../controllers/person/person";

const router = express.Router();

router.get("/", findAll);
router.get("/:_id", findOne);
router.post("/", create);
router.put("/:_id", update);
router.delete("/:_id", remove);

export default router;
