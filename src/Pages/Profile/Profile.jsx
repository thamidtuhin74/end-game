import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { useEffect, useState } from "react";

const Profile = () => {
  const { user } = useAuth();
  const [profileUsers, setProfileUsers] = useState([]);
  console.log(profileUsers?._id);

  useEffect(() => {
    fetch(`http://localhost:5000/users/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setProfileUsers(data);
        // console.log(data);
      });
  }, [user]);

  return (
    <div className="md:mx-64 lg:mx-72 bg-green-100 md:p-10 lg:p-20 p-3">
      <h1>
        <span className="font-bold">Name</span>: {profileUsers?.name}
      </h1>
      <h1>
        <span className="font-bold">Email</span>: {user?.email}
      </h1>
      <h1>
        <span className="font-bold">University</span>:{" "}
        {profileUsers?.university}
      </h1>
      <h1>
        <span className="font-bold">Address</span>: {profileUsers?.address}
      </h1>

      <Link
        to={{
          pathname: `/editProfile/${profileUsers?._id}`,
        }}>
        <button className="btn btn-primary mt-4">Edit</button>
      </Link>
    </div>
  );
};

export default Profile;
