import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CollegeCard = () => {
  const [myCollege, setMyCollege] = useState([]);
  console.log(myCollege);

  useEffect(() => {
    fetch(`https://campus-reserved-server-main.vercel.app/collagesRoutes`)
      .then((res) => res.json())
      .then((data) => {
        setMyCollege(data);
      });
  }, []);
  return (
    <>
      <div className="mt-4 md:mt-12 lg:mt-16">
        <h1 className="font-bold text-center text-lime-800 md:mb-12 lg:mb-12 mb-2">
          Top Colleges Here
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-2 md:mx-4 lg:mx-8 gap-4">
          {myCollege?.slice(0, 3).map((college, index) => (
            <div key={index} className="card w-full bg-base-100 shadow-xl">
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
      </div>
    </>
  );
};

export default CollegeCard;
