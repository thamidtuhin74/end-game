import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Admission = () => {
  const [collegesName, setCollegesName] = useState([]);
  console.log(collegesName);

  useEffect(() => {
    fetch("https://campus-reserved-server-main.vercel.app/collegeName")
      .then((res) => res.json())
      .then((data) => {
        setCollegesName(data);
        // console.log(data);
      });
  }, []);

  return (
    <div className="md:mx-24 lg:mx-32 mt-12">
      <h1 className="text-center md:mb-8 lg:mb-12 font-bold md:text-2xl lg:text-3xl text-blue-900">
        Choose Your college
      </h1>
      <h1>
        {collegesName?.map((name, index) => (
          <div key={index}>
            <Link
              to={{
                pathname: `/admission/admissionForm/${name._id}`,
              }}
              className="font-bold md:text-2xl lg:text-2xl text-blue-400 hover:text-blue-600">
              {name.collegeName}
            </Link>
          </div>
        ))}
      </h1>
    </div>
  );
};

export default Admission;
