import React from "react";
import { Link } from "react-router-dom";

export default function Item({ item }) {
  return (
    <section className="bg-[#ffffff] shadow-2xl rounded-lg w-68 h-54 p-2 m-2 text-slate-700">
      <div>
        <Link to={`/items/${item.id}`}>
          <img
            src={item.image}
            alt={item.name}
            className="object-contain h-48 w-52 rounded-lg"
          ></img>
        </Link>
      </div>
      <div className="flex justify-between font-bold">
        <Link to={`/items/${item.id}`}>
          <h2 className="text-pink-500 break-normal truncate w-52">{item.name}</h2>
        </Link>
        <div>
          <h5>${item.price}</h5>
          <h5 className="bg-gray-200 p-1 rounded text-sm">
            {item.in_stock < 5 ? (
              <span>Only {item.in_stock} left</span>
            ) : (
              <span>{item.in_stock} in-stock</span>
            )}
          </h5>
        </div>
      </div>
    </section>
  );
}
