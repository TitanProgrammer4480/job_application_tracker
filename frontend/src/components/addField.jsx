import React, { useEffect } from 'react'
import { useJobStore } from "../store/useJobStore.js";
import JobCard from './jobCard';

function MainField() {

  const { jobs, remove, add, get } = useJobStore();

  useEffect(() => {
    get();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const { jobName, companyName, place, link } = Object.fromEntries(formData);
    const newJob = {
      jobName: jobName,
      companyName: companyName,
      place: place,
      link: link,
      applied: formData.get("applied") ? true : false,
      remote: formData.get("remote") ? true : false
    };
    try {
      await add(newJob);

      e.target.reset();
    }catch (err) {
      console.log("Failed to send message:", err)
    }
  };

  const jobList = jobs.map((job, index) => <JobCard key={index} job={job} number={index} btnFunction={remove} />);

  return (
    <div className="w-full h-[85vh] mt-20 flex flex-col items-center">
      <form onSubmit={handleSubmit} className='w-[95%]'>
        <fieldset className='fieldset bg-base-200 border border-base-300 p-6 rounded-box'>
          <div className='join gap-2'>
            <label className="fieldset-label">Job name:</label>
            <input type="text" placeholder="Job name" name="jobName" required className="input input-sm" />
            <label className="fieldset-label">Company name:</label>
            <input type="text" placeholder="Company name" name="companyName" required className="input input-sm" />
            <label className="fieldset-label">Place:</label>
            <input type="text" placeholder="Place" name="place" required className="input input-sm" />
            <label className="fieldset-label">Link:</label>
            <input type="text" placeholder="Link" name="link" required className="input input-sm" />
          </div>
          <div className='join gap-2 mt-2'>
            <label className="fieldset-label">Applied:</label>
            <input type="checkbox" name="applied" className="checkbox" />
            <label className="fieldset-label">Remote:</label>
            <input type="checkbox" name="remote" className="checkbox" />
          </div>
          <button type="submit" className='btn mt-2 w-30'>Submit</button>
        </fieldset>
      </form>
      <div className='mt-20'>
        <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
          <table className="table table-sm table-pin-rows">
            <thead>
              <tr>
                <th></th>
                <th>Job</th>
                <th>Company Name</th>
                <th>Place</th>
                <th>Link</th>
                <th>Applied</th>
                <th>Remote</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {jobList}
            </tbody>
            </table>
        </div>
      </div>
    </div>
  )
}

export default MainField