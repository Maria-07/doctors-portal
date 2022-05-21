import React from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import Loading from "./../Shared/Loading";

/*
>> 3 way to store images : 
 1. third party storage // free open public storage is ok for practice project
 2. my own storage in my server
 3. Database mongodb

 ** YUP : to file validation for react hook form
*/

const AddDoctor = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  let errorMessage;

  const imgStorageKey = "2b51a15c9d1ec1cecc091e49f7c253e1";

  const { data: services, isLoading } = useQuery("services", () =>
    fetch("http://localhost:5000/services").then((res) => res.json())
  );

  const onSubmit = async (data) => {
    // console.log(data.image[0]);
    const image = data.image[0];
    console.log("data", data.email);
    const url = `https://api.imgbb.com/1/upload?key=${imgStorageKey}`;
    const formData = new FormData();
    formData.append("image", image);

    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        console.log("imagebb", result);

        if (result.success) {
          const img = result.data.url;
          console.log(img);
          const doctor = {
            name: data.name,
            email: data.email,
            specialty: data.specialty,
            img: img,
          };
          //send to your database
          fetch("http://localhost:5000/doctor", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(doctor),
          })
            .then((res) => res.json())
            .then((inserted) => {
              console.log(inserted);
              if (inserted.insertedId) {
                toast.success("Doctor added successfully");
                reset();
              } else {
                toast.error("Failed to add the doctor");
              }
            });
        }
      });

    // reset();
  };

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <h2 className="text-2xl my-3">Add Doctor Please</h2>

      <div className=" my-10 shadow-lg p-5 max-w-xs">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Name  */}

          <h1 className="text-2xl">Doctor's Details</h1>

          <label className="label">
            <span className="label-text font-medium my-1">Name</span>
          </label>
          <input
            type="text"
            placeholder="Your Name"
            name="name"
            className="input input-bordered w-full max-w-xs"
            {...register("name", {
              required: {
                value: true,
                message: "Name is required",
              },
            })}
          />
          <label className="label">
            <span className="label-text-alt">
              {" "}
              {errors.name?.type === "required" && (
                <p className=" text-red-500">{errors.name.message}</p>
              )}
            </span>
          </label>

          {/* email  */}
          <label className="label">
            <span className="label-text font-medium my-1">Email</span>
          </label>
          <input
            type="email"
            placeholder="Your Email"
            name="email"
            className="input input-bordered w-full max-w-xs"
            {...register("email", {
              required: {
                value: true,
                message: "Email is required",
              },
              pattern: {
                value: /@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
                message: "Provide a valid Email", // JS only: <p>error message</p> TS only support string
              },
            })}
          />
          <label className="label">
            <span className="label-text-alt">
              {" "}
              {errors.email?.type === "required" && (
                <p className=" text-red-500">{errors.email.message}</p>
              )}
              {errors.email?.type === "pattern" && (
                <p className=" text-red-500">{errors.email.message}</p>
              )}
            </span>
          </label>

          {/*Specialty  */}
          <label className="label">
            <span className="label-text font-medium my-1">Specialty</span>
          </label>
          <select
            {...register("specialty")}
            class="select select-bordered w-full max-w-xs mb-4"
          >
            {services.map((service) => (
              <option key={service._id} value={service.name}>
                {service.name}
              </option>
            ))}
          </select>

          {/* //photo  */}

          <label className="label">
            <span className="label-text font-medium my-1">Name</span>
          </label>
          <input
            type="file"
            className="input w-full max-w-xs"
            {...register("image", {
              required: {
                value: true,
                message: "image is required",
              },
            })}
          />
          {/* <input type="file" {...register("file")} /> */}
          <label className="label">
            <span className="label-text-alt">
              {" "}
              {errors.image?.type === "required" && (
                <p className=" text-red-500">{errors.image.message}</p>
              )}
            </span>
          </label>

          {/* <input ref={register} type="file" name="image" /> */}

          {errorMessage}

          {/* submit  */}
          <input
            className="btn btn-primary bg-gradient-to-r from-secondary to-primary my-5 hover:to-secondary text-white max-w-xs  w-full"
            type="submit"
            value={"Add"}
          />
        </form>
      </div>
    </div>
  );
};

export default AddDoctor;
