import React, { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import DeleteConfirmationModel from "./DeleteConfirmationModel";
import ManageDoctor from "./ManageDoctor";

const ManageDoctors = () => {
  const [dltDoctor, setDltDoctor] = useState(null);
  const {
    data: doctors,
    isLoading,
    refetch,
  } = useQuery("doctors", () =>
    fetch("http://localhost:5000/doctor", {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <h2 className="text-2xl my-3">Manage Doctor Info : {doctors.length}</h2>

      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th>index</th>
              <th></th>
              <th>Name</th>
              <th>specialty</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {doctors.map((doctor, index) => (
              <ManageDoctor
                index={index}
                key={doctor._id}
                doctor={doctor}
                setDltDoctor={setDltDoctor}
              ></ManageDoctor>
            ))}
          </tbody>
        </table>
      </div>
      {dltDoctor && (
        <DeleteConfirmationModel
          refetch={refetch}
          dltDoctor={dltDoctor}
          setDltDoctor={setDltDoctor}
        ></DeleteConfirmationModel>
      )}
    </div>
  );
};

export default ManageDoctors;
