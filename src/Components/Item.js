import React from "react";
import { Link } from "react-router-dom";

export default function Item({ item }) {
  return (
    <section className="bg-[#ffffff32] dark:bg-[#00000032] w-96 h-72 shadow-md rounded-md p-2 m-4 text-slate-700">
      <div className="flex justify-center items-center">
        <Link to={`/items/${item.id}`}>
          <img
            src={item.image}
            alt={item.name}
            className="object-cover h-48 w-58 rounded-lg"
          ></img>
        </Link>
      </div>
      <div className="flex justify-between font-bold">
        <Link to={`/items/${item.id}`}>
          <h2 className="text-slate-900 dark:text-white break-normal truncate w-64">
            {item.name}
          </h2>
          <h5 className="dark:text-slate-100 font-bold">${item.price}</h5>
        </Link>
        <div className=" rounded text-sm">
          <h6 className="bg-gray-200 dark:bg-slate-900 dark:text-slate-300 p-1 mt-3 font-bold rounded">
            {item.in_stock < 5 ? (
              <span>Only {item.in_stock} left</span>
            ) : (
              <span>{item.in_stock} in-stock</span>
            )}
          </h6>
        </div>
      </div>
    </section>
  );
}
