import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Colleges = () => {
  const [colleges, setColleges] = useState([]);

  useEffect(() => {
    fetch("https://campus-reserved-server-main.vercel.app/collagesRoutes")
      .then((res) => res.json())
      .then((data) => {
        setColleges(data);
        // console.log(data);
      });
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-2 md:mx-4 lg:mx-8 gap-4">
        {colleges.map((college) => (
          <div key={college._id} className="card w-full bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src={college.collegeImage}
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{college.collegeName}</h2>
              <p>Admission Date: {college.admissionDate}</p>
              <p>College Rating: {college.collegeRating}</p>
              <p>Number Of The Research: {college.numberOfTheResearch}</p>
              <div className="card-actions">
                <Link
                  to={{
                    pathname: `/colleges/CollegeDetails/${college._id}`,
                  }}>
                  <button className="btn btn-primary">Details</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Colleges;
