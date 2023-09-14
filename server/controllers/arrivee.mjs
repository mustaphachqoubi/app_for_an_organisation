import Arrivee from "../models/arrivee.mjs"

//get
export const getArrivee = async (req, res) => {
    const arrivee = await Arrivee.find({}).sort({ createdAt: -1})

    res.status(200).json(arrivee)
}

//post
export const createArrivee = async (req, res) => {
    const { ArriveeTh, ArriveeTd } = req.body
    try{
        const arrivee = await Arrivee.create({ ArriveeTh, ArriveeTd })
        res.status(200).json(arrivee)
    } catch (err){
        res.status(400).json({ err: err.message })
    }
}