const JobCategoryLoader = async () => {
  const res = await fetch("/jobCategories.json");
  return res.json();
};

export default JobCategoryLoader;
