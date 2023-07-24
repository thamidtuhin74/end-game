import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CollegeDetails = () => {
  const { id } = useParams();
  //   console.log("id", id);

  const [singleData, setSingleData] = useState({});
  //   console.log(singleData);

  useEffect(() => {
    fetch(`https://campus-reserved-server-main.vercel.app/collegeDetails/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setSingleData(data);
        // console.log(data);
      });
  }, [id]);

  const collegeEvents = singleData?.events;
  //   console.log(collegeEvents);
  const collegeSports = singleData?.sports;

  return (
    <>
      <div className="flex md:gap-8 lg:gap-12 md:mt-10 lg:mt-16 md:mx-16 lg:mx-20">
        <div className="w-1/2">
          <img className="rounded" src={singleData.collegeImage} alt="" />
        </div>
        <div className="">
          <h2 className="card-title font-bold text-3xl mb-2">
            {singleData.collegeName}
          </h2>
          <p>Admission Date: {singleData.admissionDate}</p>
          <p>College Rating: {singleData.collegeRating}</p>
          <p>Number Of The Research: {singleData.numberOfTheResearch}</p>
          <h2 className="font-bold text-3xl mt-5 mb-4">Events</h2>
          {collegeEvents?.map((CollegeEvent, index) => (
            <div key={index}>
              <p>
                <span className="font-bold">Name</span>: {CollegeEvent.name}
              </p>
              <p>
                <span className="font-bold text-orange-400">Details</span>:{" "}
                {CollegeEvent.details}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="md:mx-16 lg:mx-20">
        <h2 className="font-bold md:text-2xl lg:text-3xl mt-5 mb-4">Sports</h2>
        {collegeSports?.map((CollegeSport, index) => (
          <div key={index}>
            <p>
              <span className="font-bold">Name</span> : {CollegeSport.name}
            </p>
            <p>
              <span className="font-bold text-orange-400">Details</span> :{" "}
              {CollegeSport.details}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default CollegeDetails;
