import { useLoaderData } from "react-router-dom";

const JobCategories = () => {
  const categories = useLoaderData();
  return (
    <section className="lg:py-20 py-8">
      <header className="text-center">
        <h3 className="lg:text-4xl text-2xl font-bold pb-4">
          Job Category List
        </h3>
        <p className="lg:font-bold lg:text-lg text-[14px]">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </header>
      <div className="lg:flex justify-between lg:pt-20 pt-10 mx-auto gap-10">
        {categories.map((category) => (
          <div
            key={category.id}
            className="bg-gradient-to-br from-bgPrimary to-bgSecondary  text-center lg:w-[250px] w-full lg:mb-0 mb-4 p-4 rounded-lg shadow-lg"
          >
            <img
              className="w-20 mx-auto pb-4"
              src={category.logo}
              alt="category logo"
            />
            <h3 className="font-bold text-xl">{category.name}</h3>
            <p>{category.job_count} job available.</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default JobCategories;
