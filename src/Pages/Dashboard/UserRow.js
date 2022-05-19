import React from "react";
import { toast } from "react-toastify";

const UserRow = ({ user, index, refetch }) => {
  const { email, role } = user;
  const makeAdmin = () => {
    fetch(`http://localhost:5000/user/admin/${email}`, {
      method: "Put",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 403) {
          toast.error("Failed to make a admin");
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        console.log(data.result.modifiedCount);
        if (data.result.modifiedCount > 0) {
          toast.success("Successfully made an admin");
          refetch();
        }
      });
  };
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{email}</td>
      <td>
        {role !== "admin" && (
          <button class="btn btn-sm" onClick={makeAdmin}>
            Make Admin
          </button>
        )}
      </td>
      <td>
        <button class="btn btn-sm">Remove Admin</button>
      </td>
    </tr>
  );
};

export default UserRow;
