import express from "express";
import {getPosts, createPost} from "../controllers/index.js";
const router = express.Router();

router.get('/',getPosts);//HTTP verbs
router.post('/',createPost);

export default router;