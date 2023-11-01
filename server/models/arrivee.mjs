import mongoose from "mongoose"

const Schema = mongoose.Schema

const DataSchema = new Schema({
    number: {type: Number, require: true}, 
    messageDate: {type: String, require: true},
    reciever: {type: String, require: true},
    subject: {type: String, require: true},
    answerdate: {type: String, require: true},
    status: {type: String, require: true}
})

const ArriveeTdSchema = new Schema({
    data: { type: [DataSchema], require: true }
})

const arriveeSchema = new Schema({
    ArriveeTd: { type: [ArriveeTdSchema], require: true }
}, { timestamps: true })

export default mongoose.model("Arrivee", arriveeSchema)