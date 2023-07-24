import { useEffect, useState } from "react";
// import useAuth from "../../Hooks/useAuth";

const MyCollege = () => {
  const [myCollege, setMyCollege] = useState([]);
  //   console.log(myCollege);

  const [collegeData, setCollegeData] = useState([]);
  console.log("college data", collegeData);

  //   const collegeDataDetails = collegeData?.[0] || {};

  //   const { user } = useAuth();

  useEffect(() => {
    fetch(`https://campus-reserved-server-main.vercel.app/my-college`)
      .then((res) => res.json())
      .then((data) => {
        setMyCollege(data);
        console.log(data);
      });
  }, []);

  useEffect(() => {
    const fetchCollegeDetails = async () => {
      const collegeDetailsPromises = myCollege.map((college) =>
        fetch(
          `https://campus-reserved-server-main.vercel.app/my-college-details/${college.collegeId}`
        ).then((res) => res.json())
      );

      const collegeDetailsData = await Promise.all(collegeDetailsPromises);

      setCollegeData(collegeDetailsData);
    };

    fetchCollegeDetails();
  }, [myCollege]);

  //   useEffect(() => {
  //     fetch(`https://campus-reserved-server-main.vercel.app/my-college-details/${myCollege.collegeId}`)
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setCollegeData(data);
  //         // console.log(data);
  //       });
  //   }, []);

  return (
    <>
      {myCollege?.map((college, index) => (
        <div key={index}>
          <div className="md:mx-24 lg:mx-32 md:flex lg:flex ps-2 md:gap-8 lg:gap-10 bg-green-300 rounded">
            <div>
              <img src={college.candidateURL} alt="" />
            </div>
            <div className="md:mx-12 md:my-16 lg:mx-16 lg:my-20">
              <h1 className="font-bold md:text-2xl lg:text-2xl mb-3">
                Name: {college.candidateName}
              </h1>
              <h1 className="mb-2">
                <span className="font-bold text-orange-800">Subject</span>:{" "}
                {college.subjects}
              </h1>
              <h1 className="mb-2">
                {" "}
                <span className="font-bold text-orange-800">Email</span>:{" "}
                {college.candidateEmail}
              </h1>
              <h1 className="mb-2">
                <span className="font-bold text-orange-800">Number</span>Phone :{" "}
                {college.phoneNumber}
              </h1>
              <h1 className="mb-2">
                <span className="font-bold text-orange-800">Date Of Birth</span>
                : {college.dateOfBirth}
              </h1>
              <h1>
                <span className="font-bold text-orange-800">Address</span>:{" "}
                {college.address}
              </h1>
            </div>
          </div>
        </div>
      ))}

      <div className="md:mt-16 lg:mt-20 mt-12 ">
        {collegeData.map((collegeDataDetails, index) => (
          <div key={index}>
            <div className="md:flex lg:flex ps-8 md:gap-8 lg:gap-12 md:mt-10 lg:mt-16 md:mx-16 lg:mx-20">
              <div className="w-1/2">
                <img
                  className="rounded"
                  src={collegeDataDetails.collegeImage}
                  alt=""
                />
              </div>
              <div className="">
                <h2 className="card-title font-bold text-3xl mb-2">
                  {collegeDataDetails.collegeName}
                </h2>
                <p>Admission Date: {collegeDataDetails.admissionDate}</p>
                <p>College Rating: {collegeDataDetails.collegeRating}</p>
                <p>
                  Number Of The Research:{" "}
                  {collegeDataDetails.numberOfTheResearch}
                </p>
                <h2 className="font-bold text-3xl mt-5 mb-4">Events</h2>
                {collegeDataDetails?.events?.map((CollegeEvent, index) => (
                  <div key={index}>
                    <p>
                      <span className="font-bold">Name</span>:{" "}
                      {CollegeEvent.name}
                    </p>
                    <p>
                      <span className="font-bold text-orange-400">Details</span>
                      : {CollegeEvent.details}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="md:mx-16 lg:mx-20 ps-8">
              <h2 className="font-bold md:text-2xl lg:text-3xl mt-5 mb-4">
                Sports
              </h2>
              {collegeDataDetails?.sports?.map((CollegeSport, index) => (
                <div key={index}>
                  <p>
                    <span className="font-bold">Name</span> :{" "}
                    {CollegeSport.name}
                  </p>
                  <p>
                    <span className="font-bold text-orange-400">Details</span> :{" "}
                    {CollegeSport.details}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default MyCollege;
