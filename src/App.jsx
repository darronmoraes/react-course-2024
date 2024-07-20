import React from "react";

// Import Layouts here
import MainLayout from "./layouts/MainLayout";

// Import Pages here
import HomePage from "./pages/HomePage";
import JobsPage from "./pages/JobsPage";
import NotFoundPage from "./pages/NotFoundPage";
import JobPage, { jobLoader } from "./pages/JobPage";

// React router
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  // example of routing #1
  // createRoutesFromElements(<Route index element={<HomePage />} />)

  // example of routing #2
  // if say suppose you want to show a path in route and redirect there
  // createRoutesFromElements(<Route path="/about" element={<h1>My App</h1>} />)

  // example of routing #3
  // Having parent route for layout and other routes
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      {/* Parent Route beings*/}
      <Route index element={<HomePage />} />
      <Route path="/jobs" element={<JobsPage />} />
      <Route path="/jobs/:id" element={<JobPage />} loader={jobLoader} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
      {/* <NavBar />
      <Hero />
      <HomeCards />
      <JobListings />
      <ViewAllJobs /> */}
    </>
  );
};

export default App;
