import React from "react";
import Chart from "../components/Chart";

const Statistics = () => {
  return (
    <>
      <header className="pt-20 bg-no-repeat bg-center bg-cover lg:bg-[url('https://i.ibb.co/h2nX2DB/5570863.jpg')] border-b-2 border-gray-200 shadow-md rounded-b-lg">
        <h2 className="lg:text-5xl text-3xl font-bold text-gray-700 text-center lg:py-20 py-10">
          My Statistics
        </h2>
      </header>
      <section>
        <Chart />
      </section>
    </>
  );
};

export default Statistics;
