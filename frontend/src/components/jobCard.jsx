import React from 'react'

function JobCard({ job, btnFunction, number }) {
  return (
    <tr>
      <th>{number + 1}</th>
      <td>{job.jobName}</td>
      <td>{job.companyName}</td>
      <td>{job.place}</td>
      <td>{<a href={job.link} target='_blank'>Website</a>}</td>
      <td>{job.applied ? (<div aria-label="status" className="status status-success"></div>) : (<div aria-label="status" className="status status-error"></div>)}</td>
      <td>{job.remote ? (<div aria-label="status" className="status status-success"></div>) : (<div aria-label="status" className="status status-error"></div>)}</td>
      <th><button className="btn btn-ghost btn-xs" onClick={() => btnFunction(job._id)}>Delete</button></th>
    </tr>
  )
}

export default JobCard

