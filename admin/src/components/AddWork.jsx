import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AddWork = ({ url }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const isEdit = location.state?.mode === "edit";
  const editItem = location.state?.item;

  const [formData, setFormData] = useState({
    _id: "",
    itemName: "",
    category: "Work",
  });
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false); // <-- New state

  useEffect(() => {
    if (isEdit && editItem) {
      setFormData({
        _id: editItem._id,
        itemName: editItem.itemName,
        category: editItem.category,
      });
    }
  }, [isEdit, editItem]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading

    const data = new FormData();
    data.append("itemName", formData.itemName);
    data.append("category", formData.category);
    if (image) data.append("image", image);

    try {
      let response;

      if (isEdit) {
        data.append("_id", formData._id);
        response = await axios.post(`${url}/api/item/update`, data);

        if (response.data.success) {
          toast.success("Item updated successfully");
          navigate("/list");
        } else {
          toast.error("Update failed");
        }

      } else {
        response = await axios.post(`${url}/api/item/add`, data);

        if (response.data.success) {
          toast.success("Item added successfully");
          navigate("/list");
        } else {
          toast.error("Add failed");
        }
      }
    } catch (error) {
      console.error(error);
      toast.error(`Error: ${error.response?.data?.message || error.message}`);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div className="md:p-4 mt-12 flex-1 bg-white dark:bg-gray-900 text-black dark:text-white">
      <div className="max-w-md mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm shadow-black dark:shadow-white">
        <h2 className="text-2xl font-bold mb-6 text-black dark:text-white">
          {isEdit ? `Edit ${formData.itemName}` : "Add New Project"}
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col">
            <label
              htmlFor="itemName"
              className="mb-1 text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Project Name
            </label>
            <input
              name="itemName"
              type="text"
              placeholder="Enter Project Name"
              required
              value={formData.itemName}
              onChange={handleChange}
              className="p-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-600 dark:bg-gray-700 dark:text-white"
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="image"
              className="mb-1 text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Upload File
            </label>
            <input
              name="image"
              type="file"
              accept="image/*,video/*"
              onChange={handleImageChange}
              className="p-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none dark:bg-gray-700 dark:text-white"
            />
            {isEdit && !image && editItem?.image && (
              <span className="text-xs text-gray-500 mt-1">
                Current File: {editItem.image}
              </span>
            )}
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="category"
              className="mb-1 text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Category
            </label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="p-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-600 dark:bg-gray-700 dark:text-white"
            >
              <option value="Work">Work</option>
              <option value="Certificate">Certificate</option>
            </select>
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`mt-4 bg-pink-600 text-white py-2 px-4 rounded-md transition-colors ${
              loading ? "opacity-60 cursor-not-allowed" : "hover:bg-pink-700"
            }`}
          >
            {loading
              ? isEdit
                ? "Updating..."
                : "Adding..."
              : isEdit
              ? "Update Project"
              : "Add Project"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddWork;
