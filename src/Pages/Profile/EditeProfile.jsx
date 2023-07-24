import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";

const EditeProfile = () => {
  const { register, handleSubmit } = useForm();
  const { id } = useParams();
  console.log(id);

  const { user } = useAuth();

  const handleUpdateProfile = (data) => {
    console.log(data);

    const updateProfile = {
      name: data.name,
      email: data.email,
      address: data.address,
      university: data.university,
    };
    console.log(updateProfile);

    fetch(`http://localhost:5000/users/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateProfile),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Sign Up successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div>
      <div className="bg-base-200 p-8">
        <h1 className="text-3xl font-bold text-center mb-8 mt-8">
          Update Your Profile
        </h1>
        <form onSubmit={handleSubmit(handleUpdateProfile)}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                defaultValue={user?.displayName}
                type="text"
                {...register("name")}
                placeholder="Name"
                className="input input-bordered"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                defaultValue={user?.email}
                type="email"
                {...register("email")}
                placeholder="Email"
                className="input input-bordered"
                readOnly
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">University</span>
              </label>
              <input
                type="text"
                {...register("university")}
                placeholder="University"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Address</span>
              </label>
              <input
                type="text"
                {...register("address")}
                placeholder="Address"
                className="input input-bordered"
              />
            </div>
          </div>
          <div className="form-control mt-6">
            <input
              className="btn btn-primary"
              type="submit"
              value="Updated your profile"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditeProfile;
