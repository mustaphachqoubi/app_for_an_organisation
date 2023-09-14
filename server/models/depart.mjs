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

const DepartThSchema = new Schema({
    name: { type: String, require: true }
})

const DepartTdSchema = new Schema({
    data: { type: [DataSchema], require: true }
})

const departSchema = new Schema({
    DepartTh: { type: [DepartThSchema], require: true },
    DepartTd: { type: [DepartTdSchema], require: true }
}, { timestamps: true })

export default mongoose.model("Depart", departSchema)