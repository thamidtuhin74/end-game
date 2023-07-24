import { useEffect, useState } from "react";
import { FcSearch } from "react-icons/fc";
import { Link } from "react-router-dom";

const Search = () => {
  const [myCollege, setMyCollege] = useState([]);
  const [searchCollege, setSearchCollege] = useState("");
  console.log(searchCollege);

  console.log(myCollege);

  useEffect(() => {
    fetch(`http://localhost:5000/collagesRoutes`)
      .then((res) => res.json())
      .then((data) => {
        setMyCollege(data);
      });
  }, []);

  const handleSearch = (e) => {
    setSearchCollege(e.target.value);
  };

  useEffect(() => {
    // Fetch search results only if the searchCollege has a value
    if (searchCollege.trim() !== "") {
      fetch(`http://localhost:5000/search-colleges?q=${searchCollege}`)
        .then((res) => res.json())
        .then((data) => {
          setMyCollege(data);
        });
    }
  }, [searchCollege]);

  return (
    <>
      <div className="flex gap-0 mx-2 md:mx-24 lg:mx-24 md:mt-12 lg:mt-16 md:mb-12 lg:mb-16">
        <div className="border-[12px] border-slate-300 w-full">
          <input
            className="w-full p-1"
            type="search"
            value={searchCollege}
            onChange={handleSearch}
            name=""
            id=""
            placeholder="Search Here by College Name"
          />
        </div>
        <div className="flex font-bold items-center bg-slate-200 rounded">
          <FcSearch className="font-bold text-5xl"></FcSearch>
        </div>
      </div>

      {searchCollege.trim() !== "" && (
        <div className="grid grid-cols-1 md:gid-cols-1 lg:grid-cols-1 mx-2 md:mx-4 lg:mx-8 gap-4">
          {myCollege?.map((college, index) => (
            <div key={index} className="card flex flex-row w-full bg-base-100 shadow-xl">
              <figure className="px-10 pt-10 w-[200px] h-[200px]">
                <img
                  src={college.collegeImage}
                  alt="Shoes"
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body flex flex-row items-center text-center">
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
      )}
    </>
  );
};

export default Search;
