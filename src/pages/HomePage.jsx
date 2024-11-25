import Hero from "../components/Hero";
import JobListings from "../components/JobListings";
import ViewAllJobs from "../components/ViewAllJobs";
import Cards from "../components/Cards";
const HomePage = () => {
  return (
    <div>
      <Hero />
      <Cards />
      <JobListings />
      <ViewAllJobs />
    </div>
  );
};

export default HomePage;
