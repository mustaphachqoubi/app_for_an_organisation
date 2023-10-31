import Arrivee from "../models/arrivee.mjs"
import mongoose from 'mongoose'

//get
export const getArrivee = async (req, res) => {
    const arrivee = await Arrivee.find({}).sort({ createdAt: -1})

    res.status(200).json(arrivee)
}

//post
export const createArrivee = async (req, res) => {
    const { ArriveeTd } = req.body
    try{
        const arrivee = await Arrivee.create({ ArriveeTd })
        res.status(200).json(arrivee)
    } catch (err){
        res.status(400).json({ err: err.message })
    }
}

// delete
export const deleteArrivee = async (req, res) => {
  const { id } = req.params

  if(!mongoose.Types.ObjectId.isValid(id)){
    res.status(404).json({ error: "id is not valid" })
  }

  const arrivee = await Arrivee.findOneAndUpdate(
    {},
    {
      $pull: {
        ArriveeTd: { "_id": id }
      }
    },
    {new: true}
  )

  if(!arrivee){
    res.status(404).json({ error: "There is no arrivee with this id found" })
  }

  res.status(200).json(arrivee)
}
