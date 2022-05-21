import React from "react";

const ManageDoctor = ({ doctor, index, setDltDoctor }) => {
  const { img, name, specialty } = doctor;

  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <div class="avatar">
          <div class="w-20 rounded-full">
            <img src={img} alt="Tailwind-CSS-Avatar-component" />
          </div>
        </div>
      </td>
      <td>{name}</td>
      <td>{specialty}</td>

      <td>
        <label
          onClick={() => setDltDoctor(doctor)}
          for="delete-confirm-modal"
          class="btn btn-outline btn-danger"
        >
          DELETE
        </label>
      </td>
    </tr>
  );
};

export default ManageDoctor;
