import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    jobName: {
        type: String,
        required: true,
    },
    companyName: {
        type: String,
        required: true,
    },
    place: {
        type: String,
        required: true,
    },
    link: {
        type: String,
        required: true,
    },
    applied: {
        type: Boolean
    },
    remote: {
        type: Boolean
    }
    }, {}
);

const Job = mongoose.model("Job", jobSchema);

export default Job;