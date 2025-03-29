import { create } from "zustand";

import { axiosInstance } from "../lib/axios.js";
import toast from "react-hot-toast";

export const useJobStore = create((set, get) => ({
    jobs: [],
    isJobsLoading: false,

    get: async () => {
        set({ isJobsLoading: true });
        try {
            const res = await axiosInstance.get("/job/get");
            set({ jobs: res.data });
        }catch (err) {
            toast.error(err.response.data.message);
        }finally {
            set({ isJobsLoading: false });
        }
    },
    add: async (data) => {
        const { jobs } = get();
        try {
            const res = await axiosInstance.post("/job/add", data);
            set({ jobs:[...jobs, res.data]});
        }catch (err) {
            toast.error(err.response.data.message);
        }
    },
    remove: async (data) => {
        const { jobs } = get();
        try {
            const res = await axiosInstance.delete(`/job/delete/${data}`);
            const updatedJobs = jobs.filter((job) => job._id !== data)
            set({ jobs:updatedJobs});
        }catch (err) {
            toast.error(err.response.data.message);
        }
    }
}));