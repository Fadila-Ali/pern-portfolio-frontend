import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

export default function EditItem() {
  const [viewModal, setViewModal] = useState(false);

  let { id } = useParams();
  let navigate = useNavigate();

  const [item, setItem] = useState({
    name: "",
    image: "",
    description: "",
    category: "",
    price: "",
    in_stock: "",
    is_favorite: false,
    save_for_later: false,
  });

  const updateItems = (updatedItem, id) => {
    axios
      .put(`${API}/items/${id}`, updatedItem)
      .then(
        () => {
          navigate(`/items/${id}`);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  const handleTextChange = (event) => {
    setItem({ ...item, [event.target.id]: event.target.value });
  };

  const handleIsFavorite = () => {
    setItem({ ...item, is_favorite: !item.is_favorite });
  };

  const handleSaveForLater = () => {
    setItem({ ...item, save_for_later: !item.save_for_later });
  };

  useEffect(() => {
    axios.get(`${API}/items/${id}`).then(
      (response) => setItem(response.data),
      (error) => navigate(`/not-found`)
    );
  }, [id, navigate]);

  const handleSubmit = (event) => {
    event.preventDefault();

    updateItems(item, id);
    setViewModal(false);
  };

  return (
    <div>
      {viewModal ? (
        <div className="flex flex-col">
          <button
            className="inline text-lg font-bold p-2 "
            onClick={() => setViewModal(true)}
          >
            Your are Editing this item
          </button>
          <div className="sm:w-full lg:w-2/5 m-auto">
            <form
              className="bg-white text-slate-800 dark:text-slate-100 dark:bg-slate-900 shadow-md rounded px-10 pt-6 pb-8 mb-4"
              onSubmit={handleSubmit}
            >
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2" htmlFor="name">
                  Name:
                </label>
                <input
                  className="shadow bg-transparent appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  value={item.name}
                  type="text"
                  onChange={handleTextChange}
                  placeholder="Item"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  className="block  text-sm font-bold mb-2"
                  htmlFor="image"
                >
                  Image:
                </label>
                <input
                  className="shadow bg-transparent appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                  id="image"
                  value={item.image}
                  pattern="http[s]*://.+"
                  onChange={handleTextChange}
                  placeholder="http[s]..."
                />
              </div>
              <div className="mb-4">
                <label
                  className="block  text-sm font-bold mb-2"
                  htmlFor="description"
                >
                  Description:
                </label>
                <input
                  className="shadow bg-transparent appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                  id="description"
                  type="text"
                  name="description"
                  value={item.description}
                  placeholder="description"
                  onChange={handleTextChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  className="block  text-sm font-bold mb-2"
                  htmlFor="category"
                >
                  Category:
                </label>
                <input
                  className="shadow bg-transparent appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="category"
                  type="text"
                  name="category"
                  value={item.category}
                  placeholder="category"
                  onChange={handleTextChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  className="block  text-sm font-bold mb-2"
                  htmlFor="price"
                >
                  Price:
                </label>
                <input
                  className="shadow bg-transparent appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                  id="price"
                  type="number"
                  name="price"
                  value={item.price}
                  placeholder="$"
                  onChange={handleTextChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  className="block  text-sm font-bold mb-2"
                  htmlFor="in_stock"
                >
                  In Stock:
                </label>
                <input
                  className="shadow bg-transparent appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                  id="in_stock"
                  type="number"
                  name="in_stock"
                  value={item.in_stock}
                  placeholder="in stock"
                  onChange={handleTextChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  className="mb-2 mr-1 font-bold text-lg"
                  htmlFor="is_favorite"
                >
                  Favorite:
                </label>
                <input
                  id="is_favorite"
                  type="checkbox"
                  onChange={handleIsFavorite}
                  checked={item.is_favorite}
                />
              </div>
              <div className="mb-4">
                <label
                  className="mb-2 mr-1 font-bold text-lg text-grey-darkest"
                  htmlFor="save_for_later"
                >
                  Save For Later:
                </label>
                <input
                  id="save_for_later"
                  type="checkbox"
                  onChange={handleSaveForLater}
                  checked={item.save_for_later}
                />
              </div>
              <div className="flex justify-around">
                <button
                  className="block border hover:bg-pink-500 hover:border-none text-slace-900 uppercase text-lg p-2 rounded"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
                <button
                  className="block border hover:bg-pink-500 hover:border-none text-slace-900 uppercase text-lg p-2 rounded"
                  onClick={() => setViewModal(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <button
          className="text-lg font-bold border p-2 "
          onClick={() => setViewModal(true)}
        >
          Edit This Item
        </button>
      )}
    </div>
  );
}
