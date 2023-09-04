import mongoose from "mongoose";
const authSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
})
mongoose.models = {}
export default mongoose.model('learnNext', authSchema)