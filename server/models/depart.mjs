import mongoose from "mongoose"

const Schema = mongoose.Schema

const DepartTdSchema  = new Schema({
    number: {type: Number, require: true}, 
    messageDate: {type: String, require: true},
    reciever: {type: String, require: true},
    subject: {type: String, require: true},
    answerdate: {type: String, require: true},
    status: {type: String, require: false}
})

const departSchema = new Schema({
    DepartTd: { type: [DepartTdSchema], require: true }
}, { timestamps: true })

export default mongoose.model("Depart", departSchema)
