import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { FcLike, FcLikePlaceholder} from "react-icons/fc"
import { BsTrash } from "react-icons/bs";

const API = process.env.REACT_APP_API_URL;

export default function WishList() {
    const [wishList, setWishList] = useState([])

     useEffect(() => {
       axios
         .get(`${API}/items`)
         .then((res) => {
           setWishList(res.data)
         })
         .catch((c) => console.warn("catch, c"));
     }, []);

  return (
    <div className="flex flex-wrap justify-center gap-2 min-h-[80vh]">
      {wishList
        .filter((item) => item.save_for_later)
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
                      <span className="text-sm">Only {item.in_stock} left</span>
                    ) : (
                      <span className="text-sm">{item.in_stock} in-stock</span>
                    )}
                  </h6>
                  {item.is_favorite ? (
                    <FcLike className="inline text-2xl m-1" />
                  ) : (
                    <FcLikePlaceholder className="inline text-2xl m-1" />
                  )}
                  <button className="dark:text-slate-300">
                    <BsTrash size={20} />
                  </button>
                </div>
              </div>
            </div>
          </section>
        ))}
    </div>
  );
}
