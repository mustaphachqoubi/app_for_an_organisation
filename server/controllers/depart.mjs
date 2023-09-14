import Depart from "../models/depart.mjs";

//  get
export const getDepart = async (req, res) => {
    const depart = await Depart.find({}).sort({ createdAt: -1 })

    res.status(200).json(depart)
}

// post
export const createDepart = async (req, res) => {
    const { DepartTh, DepartTd } = req.body

    try{
        const depart = await Depart.create({ DepartTh, DepartTd })
        res.status(200).json(depart)
    } catch (err) {
        res.status(400).json({ err: err.message })
    }
}