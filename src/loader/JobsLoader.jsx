const JobsLoader = async () => {
  const res = await fetch("/jobs.json");
  return res.json();
};

export default JobsLoader;
