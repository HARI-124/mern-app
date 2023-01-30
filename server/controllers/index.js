import express from "express";
import mongoose from "mongoose";
import postMessage from "../model/postMessage.js";

const router = express.Router();

export const getPosts = async(req,res) => {
    try {
        const postMessages = await postMessage.find();
        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({message:error.message});
    }
}

export const createPost = async(req,res) => {
    const {title,message,creator,tags,selectedFile} = req.body;
    const newPostmessage = new postMessage({title,message,creator,tags,selectedFile});
    try {
        
        await newPostmessage.save();
        res.status(201).json(newPostmessage);
    } catch (error) {
        res.status(409).json({message:error.message});
    }
}