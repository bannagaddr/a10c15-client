import React, { useEffect, useState, useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../datacontrols/contexts/Context";

const MyPost = () => {
  const { user, loading } = useContext(AuthContext);

  const [posts, setPosts] = useState([]);
  const [editData, setEditData] = useState(null);
  const [loadingData, setLoadingData] = useState(true);

  useEffect(() => {
    if (!user) return;

    fetch(`http://localhost:3000/my-posts/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setLoadingData(false);
      });
  }, [user]);

  if (loading || loadingData) {
    return (
      <div className="flex justify-center items-center h-screen bg-white">
        <span className="loading loading-dots loading-xl text-green-600"></span>
      </div>
    );
  }

  const openEdit = (post) => {
    setEditData(post);
  };

  const closeEdit = () => {
    setEditData(null);
  };

  const handleChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    setEditData({ ...editData, [field]: value });
  };

  const submitUpdate = (e) => {
    e.preventDefault();

    fetch(`http://localhost:3000/crops/${editData._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(editData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          const updatedList = posts.map((p) =>
            p._id === editData._id ? editData : p
          );
          setPosts(updatedList);

          Swal.fire("Updated!", "Crop updated successfully.", "success");
          closeEdit();
        }
      });
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This crop will be deleted",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/crops/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.success) {
              setPosts(posts.filter((p) => p._id !== id));
              Swal.fire("Deleted!", "Crop deleted successfully.", "success");
            }
          });
      }
    });
  };

  return (
    <div className="min-h-screen p-6 sm:p-10 bg-gray-50">
      <div className="max-w-5xl mx-auto bg-white p-6 rounded shadow">
        <h2 className="text-2xl font-bold mb-4 text-center">My Posts</h2>

        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr className="text-center">
                <th>SL</th>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {posts.length === 0 && (
                <tr>
                  <td className="text-center p-6" colSpan="6">
                    No posts found
                  </td>
                </tr>
              )}

              {posts.map((post, index) => (
                <tr key={post._id} className="text-center">
                  <td>{index + 1}</td>
                  <td className="sm:flex sm:justify-center sm:items-center">
                    <img
                      src={post.image}
                      className="w-20 h-14 object-cover rounded"
                    />
                  </td>
                  <td>{post.name}</td>
                  <td>{post.pricePerUnit}</td>
                  <td>{post.quantity}</td>
                  <td className="space-y-3 sm:space-y-0 items-center justify-center sm:flex-row sm:space-x-2.5">
                    <button
                      onClick={() => openEdit(post)}
                      className="btn btn-sm btn-outline btn-success px-4.5"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => handleDelete(post._id)}
                      className="btn btn-sm btn-error"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {editData && (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center p-4">
          <div className="bg-white p-6 rounded shadow w-full max-w-2xl">
            <h3 className="text-xl font-bold mb-4">Edit Crop</h3>

            <form
              onSubmit={submitUpdate}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              <input
                name="name"
                defaultValue={editData.name}
                onChange={handleChange}
                className="input w-full"
              />

              <input
                name="type"
                defaultValue={editData.type}
                onChange={handleChange}
                className="input w-full"
              />

              <input
                name="pricePerUnit"
                defaultValue={editData.pricePerUnit}
                onChange={handleChange}
                className="input w-full"
              />

              <input
                name="unit"
                defaultValue={editData.unit}
                onChange={handleChange}
                className="input w-full"
              />

              <input
                name="quantity"
                defaultValue={editData.quantity}
                onChange={handleChange}
                className="input w-full"
              />

              <input
                name="location"
                defaultValue={editData.location}
                onChange={handleChange}
                className="input w-full"
              />

              <input
                name="image"
                defaultValue={editData.image}
                onChange={handleChange}
                className="input md:col-span-2 w-full"
              />

              <textarea
                name="description"
                defaultValue={editData.description}
                onChange={handleChange}
                className="textarea md:col-span-2 w-full"
              />

              <div className="md:col-span-2 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={closeEdit}
                  className="btn btn-outline"
                >
                  Cancel
                </button>

                <button type="submit" className="btn btn-success">
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyPost;
