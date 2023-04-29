import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AiOutlineDollar, AiOutlineMail } from "react-icons/ai";
import { GoCalendar, GoLocation } from "react-icons/go";
import { CiMobile3 } from "react-icons/ci";

const JobDetails = () => {
  const { id } = useParams();
  const [job, setJob] = useState({});

  // Store job id to the local storage
  const handleStoreData = (id) => {
    const storedJobsId = localStorage.getItem("JOBS_ID");
    if (storedJobsId) {
      let jobsId = JSON.parse(storedJobsId);
      if (jobsId.includes(id)) {
        alert("Already added to the local storage");
      } else {
        jobsId = [...jobsId, id];
        localStorage.setItem("JOBS_ID", JSON.stringify(jobsId));
      }
    } else {
      localStorage.setItem("JOBS_ID", JSON.stringify([id]));
    }
  };

  useEffect(() => {
    fetch("/jobs.json")
      .then((res) => res.json())
      .then((data) => {
        const storedJobs = data.jobs.find((job) => job.id === id);
        setJob(storedJobs);
      });
  }, []);
  console.log();
  return (
    <>
      <header className="pt-20 bg-no-repeat bg-center bg-cover lg:bg-[url('https://i.ibb.co/h2nX2DB/5570863.jpg')] border-b-2 border-gray-200 shadow-md rounded-b-lg">
        <h2 className="lg:text-5xl text-3xl font-bold text-gray-700 text-center lg:py-20 py-10">
          Job Details
        </h2>
      </header>
      <section className="py-8 lg:flex justify-between gap-10">
        <div className=" lg:w-3/4 text-gray-700">
          <p className="font-semibold">
            <span className="font-bold block text-2xl">Position: </span>
            {job.job_title}
          </p>
          <p className="font-semibold pt-4">
            <span className="font-bold block text-2xl">Job Description: </span>
            {job.job_description}
          </p>
          <ul className="list-disc list-inside pt-4">
            <span className="font-bold text-2xl">Job Requirements: </span>
            {job.job_responsibility?.map((requirement) => (
              <li className="font-semibold" key={requirement}>
                {requirement}
              </li>
            ))}
          </ul>
          <ul className="list-disc list-inside pt-4">
            <span className="font-bold text-2xl">
              Educational Requirements:{" "}
            </span>
            {job.educational_requirements?.map((requirement) => (
              <li className="font-semibold" key={requirement}>
                {requirement}
              </li>
            ))}
          </ul>
          <ul className="list-disc list-inside pt-4">
            <span className="font-bold text-2xl">
              Educational Requirements:{" "}
            </span>
            {job.experiences?.map((experience) => (
              <li className="font-semibold" key={experience}>
                {experience}
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:w-1/4 h-1/2 mt-8 lg:mt-0 p-4 bg-no-repeat bg-center bg-cover lg:bg-[url('https://i.ibb.co/h2nX2DB/5570863.jpg')] border-2 border-gray-200 shadow-md rounded-b-lg text-gray-700">
          <h4 className="border-b-2 text-2xl font-bold border-gray-200">
            Details
          </h4>
          <p className="text-lg pt-4">
            <span className="font-bold">
              <AiOutlineDollar className="inline" /> Salary :
            </span>{" "}
            {job.salary}
          </p>
          <p className="text-lg">
            <span className="font-bold">
              <GoCalendar className="inline" /> Job Title :
            </span>{" "}
            {job.job_title}
          </p>
          <h4 className="border-b-2 pt-4 text-2xl font-bold border-gray-200">
            Contact Information
          </h4>
          <p className="text-lg pt-4">
            <span className="font-bold">
              <CiMobile3 className="inline" /> Phone :
            </span>{" "}
            {job.contact_information?.phone}
          </p>
          <p className="text-lg">
            <span className="font-bold">
              <AiOutlineMail className="inline" /> Email :
            </span>{" "}
            {job.contact_information?.email}
          </p>
          <p className="text-lg">
            <span className="font-bold">
              <GoLocation className="inline" /> Location :
            </span>{" "}
            {job.location}
          </p>
          <button
            onClick={() => handleStoreData(job.id)}
            className="btn w-full lg:mt-7 mt-2 border-none lg:btn-md btn-sm lg:text-lg text-sm bg-gradient-to-br from-bgPrimary to-bgSecondary border-0 normal-case text-gray-700 shadow-xl hover:shadow-md hover:bg-gradient-to-tl"
          >
            Apply Now
          </button>
        </div>
      </section>
    </>
  );
};

export default JobDetails;
