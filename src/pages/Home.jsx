import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import JobCategories from "../components/JobCategories";
import Jobs from "../components/jobs/Jobs";

const Home = () => {
  return (
    <>
      <Banner />
      <JobCategories />
      <Jobs />
    </>
  );
};

export default Home;
