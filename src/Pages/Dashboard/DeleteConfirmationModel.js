import React from "react";
import { toast } from "react-toastify";

const DeleteConfirmationModel = ({ dltDoctor, refetch, setDltDoctor }) => {
  const { name, email } = dltDoctor;
  const deleteDoctor = (email) => {
    fetch(`http://localhost:5000/doctor/${email}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount) {
          toast.success(`Doctor ${name} successfully Deleted`);
          refetch();
          setDltDoctor(null);
        }
      });
  };
  return (
    <div>
      {/* <!-- The button to open modal --> */}

      {/* <!-- Put this part before </body> tag --> */}
      <input type="checkbox" id="delete-confirm-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <h3 class="font-bold text-lg">
            Are you sure you want to delete Dr. {name}
          </h3>
          <p class="py-4">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
          <div class="modal-action">
            <button
              onClick={() => deleteDoctor(email)}
              class="btn btn-outline btn-danger"
            >
              DELETE
            </button>
            <label for="delete-confirm-modal" class=" btn  btn-danger">
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmationModel;
