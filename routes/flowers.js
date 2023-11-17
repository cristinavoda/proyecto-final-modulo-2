const express = require('express')
const router = express.Router();
const { getFlowers, getFlowers, deleteFlower, createFlower, updateFlower} = require('Flowers')

router.get("/flowers", getFlowers)
router.post("/flower", createFlower)
router.put("/flowers/:id", updateFlower)
router.delete("/flowers/:id", deleteFlower)
