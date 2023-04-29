import { useState } from "react";
import { AiOutlineDollar } from "react-icons/ai";
import { GrLocation } from "react-icons/gr";
import { Link, useLoaderData } from "react-router-dom";

const AppliedJobs = () => {
  const { jobs } = useLoaderData();
  const jobIdsFromLS = JSON.parse(localStorage.getItem("JOBS_ID"));
  const jobFilter = jobs.filter((job) => jobIdsFromLS?.includes(job.id));
  const [filteredJobs, setFilteredJobs] = useState(jobFilter);

  // Handle filter job tye
  const handleFilterJobType = (e) => {
    const selectedOption = e.target.value;
    if (selectedOption === "Remote") {
      const jobs = filteredJobs?.filter(
        (job) => job.remote_or_onsite === selectedOption
      );
      setFilteredJobs(jobs);
    } else if (selectedOption === "Onsite") {
      const jobs = filteredJobs?.filter(
        (job) => job.remote_or_onsite === selectedOption
      );
      setFilteredJobs(jobs);
    } else {
      setFilteredJobs(jobFilter);
    }
  };

  return (
    <>
      <header className="pt-20 bg-no-repeat bg-center bg-cover lg:bg-[url('https://i.ibb.co/h2nX2DB/5570863.jpg')] border-b-2 border-gray-200 shadow-md rounded-b-lg">
        <h2 className="lg:text-5xl text-3xl font-bold text-gray-700 text-center lg:py-20 py-10">
          {jobIdsFromLS ? "Applied Jobs" : "No Job Applied"}
        </h2>
      </header>
      <section className="my-20 relative">
        <select
          onChange={(e) => handleFilterJobType(e)}
          name="jobs"
          className="bg-gradient-to-br from-bgPrimary to-bgSecondary rounded-md text-gray-700 px-4 py-1 absolute -top-10 right-0 font-semibold"
        >
          <option value="All">All</option>
          <option value="Remote">Remote</option>
          <option value="Onsite">Onsite</option>
        </select>
        {filteredJobs.map((job) => (
          <div
            key={job.id}
            className="p-4 lg:w-4/5 mx-auto rounded-lg shadow-lg border-2 border-gray-200 mt-4 lg:grid grid-cols-6 gap-10 lg:items-center flex flex-col"
          >
            <img
              className="lg:col-span-1 lg:w-full w-32"
              src={job.company_logo}
              alt=""
            />
            <div className="lg:col-span-4">
              <h3 className="text-xl font-semibold">{job.job_title}</h3>
              <p>{job.company_name}</p>
              <div className="py-2">
                <button className=" bg-bgPrimary text-gray-700 normal-case mr-8 px-4 py-2 border2 border-gray-700 rounded-lg shadow-lg">
                  {job.remote_or_onsite}
                </button>
                <button className=" bg-bgPrimary text-gray-700 normal-case mr-8 px-4 py-2 border2 border-gray-700 rounded-lg shadow-lg">
                  {job.job_type}
                </button>
              </div>
              <div className="lg:flex gap-20 font-semibold">
                <p>
                  <GrLocation className="inline" /> {job.location}
                </p>
                <p>
                  <AiOutlineDollar className="inline" /> {job.salary}
                </p>
              </div>
            </div>
            <Link
              to={`/job/${job.id}`}
              className="btn w-full lg:col-span-1 border-none lg:btn-md btn-sm lg:text-lg text-sm bg-gradient-to-br from-bgPrimary to-bgSecondary border-0 font-semibold normal-case text-gray-700 shadow-xl hover:shadow-md hover:bg-gradient-to-tl"
            >
              See details
            </Link>
          </div>
        ))}
      </section>
    </>
  );
};

export default AppliedJobs;
