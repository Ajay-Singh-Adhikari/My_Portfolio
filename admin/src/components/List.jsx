import React, { useState, useEffect } from "react";
import axios from "axios";
import { FiTrash2, FiEdit2 } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const List = ({ url }) => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true); // <-- Added loading state
  const navigate = useNavigate();

  const fetchItem = async () => {
    try {
      const response = await axios.get(url + "/api/item/list");
      setList(response.data.data);
    } catch (error) {
      toast.error("Error fetching data");
      console.error(error);
    } finally {
      setLoading(false); // <-- Stop loading in both success/failure
    }
  };

  const handleDelete = async (id) => {
    const response = await axios.post(url + "/api/item/remove", { _id: id });
    if (response.data.success) {
      toast.success("Item deleted");
      setList((prev) => prev.filter((item) => item._id !== id));
    } else {
      toast.error("Unknown error occurred");
    }
  };

  const handleEdit = (item) => {
    navigate("/addWork", { state: { mode: "edit", item } });
  };

  useEffect(() => {
    fetchItem();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4 text-pink-600">List of Items</h2>

      {loading ? (
        <div className="text-center text-pink-600 font-semibold text-lg animate-pulse py-10">
          Fetching data...
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white dark:bg-gray-800 border">
            <thead>
              <tr className="dark:text-white border dark:border-white border-pink-700">
                <th className="py-2 px-4">Image</th>
                <th className="py-2 px-4">Name</th>
                <th className="py-2 px-4">Category</th>
                <th className="py-2 px-4">Remove</th>
                <th className="py-2 px-4">Edit</th>
              </tr>
            </thead>
            <tbody>
              {list.map((item, index) => (
                <tr key={index} className="text-center border-b">
                  <td className="py-2 px-4">
                    {item.category === "Certificate" ? (
                      <img
                        src={`${url}/images/${item.image}`}
                        alt={item.itemName}
                        className="w-20 h-20 object-cover rounded"
                      />
                    ) : (
                      <video
                        src={`${url}/images/${item.image}`}
                        className="w-20 h-20 object-cover rounded bg-pink-700"
                        autoPlay
                        loop
                        muted
                      />
                    )}
                  </td>
                  <td className="py-2 px-4 dark:text-white">{item.itemName}</td>
                  <td className="py-2 px-4 dark:text-white">{item.category}</td>
                  <td className="py-2 px-4">
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="text-red-600 hover:text-red-800 transition"
                    >
                      <FiTrash2 className="w-5 h-5" />
                    </button>
                  </td>
                  <td className="py-2 px-4">
                    <button
                      onClick={() => handleEdit(item)}
                      className="text-pink-600 hover:text-pink-800 transition"
                    >
                      <FiEdit2 className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))}
              {list.length === 0 && (
                <tr>
                  <td
                    colSpan="5"
                    className="py-4 text-center text-gray-500 dark:text-gray-400"
                  >
                    No items found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default List;
