import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";
import axios from "axios";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { BsTrash } from "react-icons/bs";

const API = process.env.REACT_APP_API_URL;

export default function ShoppingCart() {
  const [shoppingCart, setShoppingCart] = useState([]);
  const [modal, setModal] = useState(false);

  const { id } = useParams();
  let total;

  const removeFromCart = () => {
    axios
      .get(`${API}/items/${id}`)
      .then((res) => {
        const removed = res.data.id;
        const filtered = setShoppingCart(res.data);
      })
      .catch((c) => console.warn("catch, c"));
  };

  useEffect(() => {
    axios
      .get(`${API}/items`)
      .then((res) => {
        setShoppingCart(res.data);
      })
      .catch((c) => console.warn("catch, c"));
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold">Total: ${total}</h2>
      <div className="flex justify-center">
        {modal ? (
          <div className="flex flex-col w-72 text-center p-4 bg-[#ffffff] dark:bg-[#000000] shadow-xl z-10 rounded absolute">
            <h2 className="text-2xl text-pink-500">
              Thank You for checkout my App!
            </h2>
            <h3>
              None of these items are for sale. The only purpose of this App is
              to show case my coding skills.
            </h3>
            <h3 className="font-bold text-lg">
              Keep exploring and have fun!{" "}
              <span className="text-pink-500">&#9786;</span>
            </h3>
            <button
              onClick={() => setModal(false)}
              className="m-2 inline border hover:bg-pink-500 hover:border-pink-500 text-slace-900 uppercase text-lg p-2 rounded"
            >
              Okay
            </button>
          </div>
        ) : (
          <button
            onClick={() => setModal(true)}
            className="m-2 block bg-pink-300 hover:bg-pink-500 text-slace-900 uppercase text-lg p-2 rounded"
          >
            Checkout
          </button>
        )}
        <Link to={`/items`}>
          <button className="m-2 block border hover:bg-pink-500 hover:border-pink-500 text-slace-900 uppercase text-lg p-2 rounded">
            Keep Shopping
          </button>
        </Link>
      </div>
      <div className="flex flex-wrap justify-center gap-2 min-h-[80vh]">
        {shoppingCart
          .filter((item) => item.cart)
          .map((item) => (
            <section
              key={item.id}
              className="bg-[#ffffff32] dark:bg-[#00000032] w-80 h-72 shadow-md rounded-md p-2 my-2  text-slate-700"
            >
              <div className="flex justify-center items-center">
                <Link to={`/items/${item.id}`}>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="object-cover h-48 w-42 rounded-lg"
                  ></img>
                </Link>
              </div>
              <div className="flex flex-col font-bold">
                <Link to={`/items/${item.id}`}>
                  <h2 className="text-slate-900 dark:text-white break-normal truncate w-64">
                    {item.name}
                  </h2>
                </Link>
                <div className=" rounded text-sm">
                  <Link>
                    <h5 className="dark:text-slate-100  m-1 font-bold">
                      ${item.price}
                    </h5>
                  </Link>
                  <div className="flex justify-between mb-1">
                    <h6 className="bg-gray-200 dark:bg-slate-900 dark:text-slate-300 p-1 inline font-bold rounded">
                      {item.in_stock < 5 ? (
                        <span className="text-sm">
                          Only {item.in_stock} left
                        </span>
                      ) : (
                        <span className="text-sm">
                          {item.in_stock} in-stock
                        </span>
                      )}
                    </h6>
                    {item.is_favorite ? (
                      <FaHeart className="inline text-2xl m-1 text-red-500" />
                    ) : (
                      <FaRegHeart className="inline text-2xl m-1 text-red-500" />
                    )}
                    <button className="dark:text-slate-300">
                      <BsTrash size={20} onClick={removeFromCart} />
                    </button>
                  </div>
                </div>
              </div>
            </section>
          ))}
      </div>
    </div>
  );
}
