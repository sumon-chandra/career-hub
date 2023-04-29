import { GrLocation } from "react-icons/gr";
import { AiOutlineDollar } from "react-icons/ai";
import { Link } from "react-router-dom";

const Job = ({ job }) => {
  const {
    job_title,
    company_logo,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
  } = job;
  return (
    <div className="card border-2 border-gray-100 p-4 mb-4 lg:mb-0 shadow-lg">
      <img className="w-28 h-28" src={company_logo} alt="Company logo" />
      <h2 className="text-2xl font-semibold pt-8">{job_title}</h2>
      <p className="font-semibold">{company_name}</p>
      <div className="py-2">
        <button className=" bg-bgPrimary text-gray-700 normal-case mr-8 px-4 py-2 border2 border-gray-700 rounded-lg shadow-lg">
          {remote_or_onsite}
        </button>
        <button className=" bg-bgPrimary text-gray-700 normal-case mr-8 px-4 py-2 border2 border-gray-700 rounded-lg shadow-lg">
          {job_type}
        </button>
      </div>
      <div className="flex justify-between font-semibold">
        <p>
          <GrLocation className="inline" /> {location}
        </p>
        <p>
          <AiOutlineDollar className="inline" /> {salary}
        </p>
      </div>
      <Link
        to={`/job/${job.id}`}
        className="btn lg:mt-7 mt-2 border-none lg:btn-md btn-sm lg:text-lg text-sm bg-gradient-to-br from-bgPrimary to-bgSecondary border-0 normal-case text-gray-700 shadow-xl hover:shadow-md hover:bg-gradient-to-tl"
      >
        See details
      </Link>
    </div>
  );
};

export default Job;
