import mongoose from "mongoose";

import Job from "../models/job.model.js";
import User from "../models/user.model.js";

export const create = async (req, res) => {
    try {
        const { jobName, companyName, place, link, applied, remote } = req.body;

        if(!jobName || !companyName || !place || !link) return res.status(400).json({ message: "job and company name, place and link are required" });

        const userId = req.user._id;

        if(!userId) return res.status(500).json({ message: "Internal Server Error" });

        const newJob = new Job({
            userId,
            jobName,
            companyName,
            place,
            link,
            applied,
            remote
        });

        if(!newJob) return res.status(400).json({ message: "Invalid job data" });

        await newJob.save();
        res.status(201).json(newJob);
    }catch (err) {
        console.log("error in createJob controller: " + err.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

export const remove = async (req, res) => {
    try {
        const {jobId: jobId} = req.params;
        if(!jobId) return res.status(500).json({ message: "Internal Server Error" });

        const job = await Job.findById(jobId);
        if(!job) return res.status(400).json({ message: "Job doesn't exist" });

        const deletedJob = await job.deleteOne();
        if(!deletedJob) return res.status(500).json({ message: "Internal Server Error" });

        res.status(200).json({ message: "Successfully deleted job" });

    }catch (err) {
        console.log("error in deleteJob controller: " + err.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

export const getByUserId = async (req, res) => {
    try {
        const userId = req.user._id;
        if(!userId) return res.status(500).json({ message: "Internal Server Error" });
    
        const user = await User.findById(userId).select("-password");
        if(!user) return res.status(500).json({ message: "Internal Server Error" });

        const jobs = await Job.find({
            userId: userId
        });
        if(!jobs) return res.status(500).json({ message: "Internal Server Error" });

        res.status(200).json(jobs);
    }catch (err) {
        console.log("error in getByUserId controller: " + err.message);
        res.status(500).json({ message: "Internal Server Error" });
    }

};