import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Cards from "./components/Cards";
import JobListings from "./components/JobListings";
const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Cards />
      <JobListings />

      <section className="m-auto max-w-lg my-10 px-6">
        <a
          href="jobs.html"
          className="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
        >
          View All Jobs
        </a>
      </section>

      <script src="js/main.js"></script>
    </div>
  );
};

export default App;
