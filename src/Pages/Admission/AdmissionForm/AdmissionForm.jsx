import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

const AdmissionForm = () => {
  const { id } = useParams();
  //   console.log("id", id);
  const {
    register,
    handleSubmit,
    // reset,
    formState: { errors },
  } = useForm();

  const handleSubmitForm = (data) => {
    console.log(data);
    const admissionForm = {
      candidateName: data.candidateName,
      candidateEmail: data.candidateEmail,
      subjects: data.subjectsName,
      phoneNumber: data.phoneNumber,
      address: data.address,
      dateOfBirth: data.dateOfBirth,
      candidateURL: data.candidateURL,
      collegeId: id,
    };

    fetch("https://campus-reserved-server-main.vercel.app/add-admission", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(admissionForm),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          //   reset();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "submitted successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div>
      <h1 className="text-center font-bold md:text-2xl lg:text-2xl text-orange-900 mt-5">
        Fill the form for admission
      </h1>
      <div className="md:mt-8 lg:mt-10">
        <div>
          <div className="bg-slate-300 p-8">
            <form onSubmit={handleSubmit(handleSubmitForm)}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Candidate Name</span>
                  </label>
                  <input
                    {...register("candidateName", { required: true })}
                    type="text"
                    placeholder="Candidate Name"
                    className="input input-bordered"
                  />
                  {errors.candidateName && (
                    <span className="text-red-500">
                      Candidate Name is required
                    </span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Candidate Email</span>
                  </label>
                  <input
                    {...register("candidateEmail", { required: true })}
                    type="email"
                    placeholder="Candidate Email"
                    className="input input-bordered"
                  />
                  {errors.candidateEmail && (
                    <span className="text-red-500">
                      Candidate Email is required
                    </span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Subjects</span>
                  </label>
                  <select
                    {...register("subjectsName", { required: true })}
                    className="input input-bordered">
                    <option value="Bangla">Bangla</option>
                    <option value="English">English</option>
                    <option value="Mathematics">Mathematics</option>
                    <option value="Physics">Physics</option>
                    <option value="Chemistry">Chemistry</option>
                    <option value="Biology">Biology</option>
                    <option value="Finance">Finance</option>
                  </select>
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Phone Number</span>
                  </label>
                  <input
                    {...register("phoneNumber", { required: true })}
                    type="text"
                    placeholder="Phone Number"
                    className="input input-bordered"
                  />
                  {errors.phoneNumber && (
                    <span className="text-red-500">
                      Phone Number is required
                    </span>
                  )}
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Address</span>
                  </label>
                  <input
                    {...register("address", { required: true })}
                    type="text"
                    placeholder="Address"
                    className="input input-bordered"
                  />
                  {errors.address && (
                    <span className="text-red-500">
                      {" "}
                      Candidate Address is required
                    </span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Date Of Birth</span>
                  </label>
                  <input
                    {...register("dateOfBirth", { required: true })}
                    type="date"
                    placeholder="Date Of Birth"
                    className="input input-bordered"
                  />
                  {errors.dateOfBirth && (
                    <span className="text-red-500">
                      {" "}
                      Date Of Birth is required
                    </span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Candidate Photo URL</span>
                  </label>
                  <input
                    {...register("candidateURL", { required: true })}
                    type="text"
                    placeholder="Candidate Photo URL"
                    className="input input-bordered"
                  />
                  {errors.candidateURL && (
                    <span className="text-red-500">
                      {" "}
                      Candidate Photo URL is required
                    </span>
                  )}
                </div>
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn bg-red-200"
                  type="submit"
                  value="Submit"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdmissionForm;
