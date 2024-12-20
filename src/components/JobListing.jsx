import PropTypes from "prop-types";
import { FaMapMarker } from "react-icons/fa";
import { useState } from "react";

const JobListing = ({ job }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  let description = job.description;

  if (!showFullDescription) {
    description = description.substring(0, 90) + "...";
  }

  return (
    <div className="bg-white rounded-xl shadow-md relative">
      <div className="p-4">
        <div className="mb-6">
          <div className="text-gray-600 my-2">{job.type}</div>
          <h3 className="text-xl font-bold">{job.title}</h3>
        </div>

        <div className="mb-5">{description}</div>

        <button
          className="mb-2 text-indigo-500 rounded-md hover:text-indigo-800"
          onClick={() => setShowFullDescription((prevState) => !prevState)}
        >
          {!showFullDescription ? "See More" : "See Less"}
        </button>

        <h3 className="text-indigo-500 mb-2">{job.salary}</h3>

        <div className="border border-gray-100 mb-5"></div>

        <div className="flex flex-col lg:flex-row justify-between mb-4">
          <div className="text-orange-700 mb-3">
            <FaMapMarker className="inline mr-1 text-lg mb-4" />
            {job.location}
          </div>
          <a
            href="job.html"
            className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

JobListing.propTypes = {
  job: PropTypes.shape({
    type: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    salary: PropTypes.string,
    location: PropTypes.string,
  }).isRequired,
};

export default JobListing;
