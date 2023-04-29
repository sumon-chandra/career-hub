import React, { useEffect, useState } from "react";
import Job from "./Job";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [showLess, setShowLess] = useState(true);

  const handleViewMore = () => {
    setJobs(jobs);
    setShowLess(false);
  };

  const handleViewLess = () => {
    setJobs(jobs.slice(0, 4));
    setShowLess(true);
  };

  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data.jobs));
  }, []);

  return (
    <div className="py-4 ">
      <header className="text-center">
        <h3 className="lg:text-4xl text-2xl font-bold pb-4">Featured Jobs</h3>
        <p className="lg:font-bold lg:text-lg text-[14px]">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </header>
      <div className="lg:grid grid-cols-2 gap-10 lg:pt-20 pt-10">
        {showLess
          ? jobs.slice(0, 4).map((job) => <Job key={job.id} job={job} />)
          : jobs.map((job) => <Job key={job.id} job={job} />)}
      </div>
      {showLess ? (
        <button
          onClick={handleViewMore}
          className="btn lg:mt-7 mt-2 border-none lg:btn-md btn-sm lg:text-lg text-sm bg-gradient-to-br from-bgPrimary to-bgSecondary border-0 normal-case text-gray-700 shadow-xl hover:shadow-md hover:bg-gradient-to-tl"
        >
          View more
        </button>
      ) : (
        <button
          onClick={handleViewLess}
          className="btn lg:mt-7 mt-2 border-none lg:btn-md btn-sm lg:text-lg text-sm bg-gradient-to-br from-bgPrimary to-bgSecondary border-0 normal-case text-gray-700 shadow-xl hover:shadow-md hover:bg-gradient-to-tl"
        >
          View less
        </button>
      )}
    </div>
  );
};

export default Jobs;
