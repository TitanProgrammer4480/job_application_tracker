import React from 'react'

function SignUpPage() {
  return (
    <div>
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
    </div>
  )
}

export default SignUpPage