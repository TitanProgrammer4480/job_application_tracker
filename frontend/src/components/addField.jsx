import React, { useEffect, useState } from 'react'
import JobCard from './jobCard';

function MainField() {

  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const storedJobs = JSON.parse(localStorage.getItem("jobs")) || [];
    if (storedJobs) {
      setJobs(storedJobs);
    }
  }, []);

  const handleSubmit = (e) => {
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
    setJobs(prevJobs => {
      const updatedJobs = [...prevJobs, newJob];
      localStorage.setItem("jobs", JSON.stringify(updatedJobs));
      return updatedJobs;
    });
    console.log(jobs.length);
    console.log(jobs);

    e.target.reset();
  };

  const handleDeletion = (index) => {
    setJobs(prevJobs => {
      const updatedJobs = prevJobs.filter((_, i) => i !== index);
      localStorage.setItem("jobs", JSON.stringify(updatedJobs));
      return updatedJobs;
    });
  };

  const jobList = jobs.map((job, index) => <JobCard key={index} job={job} number={index} btnFunction={handleDeletion} />);

  return (
    <div className="w-full h-[85vh] mt-20 flex flex-col items-center">
      <form onSubmit={handleSubmit}>
        <div className='flex flex-col gap-2'>
          <div className='flex flex-row gap-2'>
            <label className="floating-label">
              <input type="text" placeholder="Job name" name="jobName" required className="input input-sm" />
              <span>Job name:</span>
            </label>
            <label className="floating-label">
              <input type="text" placeholder="Company name" name="companyName" required className="input input-sm" />
              <span>Company name:</span>
            </label>
            <label className="floating-label">
                <input type="text" placeholder="Place" name="place" required className="input input-sm" />
                <span>Place:</span>
            </label>
            <label className="floating-label">
              <input type="text" placeholder="Link" name="link" required className="input input-sm" />
              <span>Link:</span>
            </label>
          </div>
          <div className='flex flex-row gap-2'>
            <label className="label">
              <span className='pr-2'>Applied:</span>
              <input type="checkbox" name="applied" className="checkbox" />
            </label>
            <label className="label">
              <span className='pr-2'>Remote:</span>
              <input type="checkbox" name="remote" className="checkbox" />
            </label>
          </div>
        </div>
        <button type="submit" className='btn mt-2'>Submit</button>
      </form>
      <div className='mt-20'>
        <div className="overflow-x-auto">
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