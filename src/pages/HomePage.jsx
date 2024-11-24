import Hero from "../components/Hero";
import JobListings from "../components/JobListings";
import ViewAllJobs from "../components/ViewAllJobs";
const HomePage = () => {
  return (
    <div>
      <Hero />
      <JobListings />
      <ViewAllJobs />
    </div>
  );
};

export default HomePage;
