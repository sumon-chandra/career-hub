import React from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

// Layouts
import RootLayout from "./layouts/RootLayout";

// Pages
import Home from "./pages/Home";
import Statistics from "./pages/Statistics";
import AppliedJobs from "./pages/AppliedJobs";
import Blogs from "./pages/Blogs";
import JobDetails from "./pages/JobDetails";
import ErrorPage from "./pages/ErrorPage";

// Loaders
import JobCategoryLoader from "./loader/JobCategoryLoader";
import JobsLoader from "./loader/JobsLoader";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} loader={JobCategoryLoader} />
        <Route path="job/:id" element={<JobDetails />} />
        <Route path="statistics" element={<Statistics />} />
        <Route
          path="applied-job"
          element={<AppliedJobs />}
          loader={JobsLoader}
        />
        <Route path="blogs" element={<Blogs />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
