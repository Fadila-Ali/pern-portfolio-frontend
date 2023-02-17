import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { FcLikePlaceholder, FcLike } from "react-icons/fc";
import { RiShoppingBag3Line } from "react-icons/ri";
import { MdExposurePlus1 } from "react-icons/md";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { BiArrowBack } from "react-icons/bi";
import Reviews from "./Reviews";
import EditItem from "./EditItem";

const API = process.env.REACT_APP_API_URL;

export default function ItemDetails() {
  const [item, setItem] = useState({});
  const [related, setRelated] = useState([]);
  const [quantity, setQuantity] = useState(1);

  function Increment() {
    if (quantity > item.in_stock) {
      setQuantity(item.in_stock);
    } else {
      setQuantity(quantity + 1);
    }
  }

  function Decrement() {
    if (quantity <= 1) {
      setQuantity(1);
    } else {
      setQuantity(quantity - 1);
    }
  }

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${API}/items/${id}`)
      .then((res) => {
        setItem(res.data);
      })
      .catch((c) => {
        console.warn("catch", c);
      });
  }, [id]);

  useEffect(() => {
    axios
      .get(`${API}/items`)
      .then((res) => {
        setRelated(res.data);
      })
      .catch((c) => console.warn("catch, c"));
  }, []);

  return (
    <article className="sm:flex flex-col">
      <Link to={`/items`} className="hover:text-pink-500">
        <BiArrowBack size={25} />
      </Link>
      <div className="sm:flex">
        <div className="flex justify-start">
          <img
            src={item.image}
            alt={item.name}
            className="object-contain w-[600px] h-[350px] rounded"
          ></img>
        </div>
        <div className="p-4 ml-4">
          <h2 className="w-[80%] text-5xl text-pink-500">{item.name}</h2>
          <h4 className="text-2xl font-bold">
            Price: ${quantity ? item.price * quantity : item.price}
          </h4>
          <div className="w-[80%]">
            <p>
              <span className="font-bold">Description: </span>
              {item.description}
            </p>
            <p>
              <span className="font-bold">Category: </span>
              {item.category}
            </p>
          </div>
          <div>
            <h4 className="my-2 font-bold">Quantity</h4>
            <div className="inline font-bold border border-gray-500 px-6 py-2 my-4">
              <button onClick={Decrement}>
                <AiOutlineMinus />
              </button>
              <span className="p-6">{quantity}</span>
              <button onClick={Increment}>
                <AiOutlinePlus />
              </button>
            </div>
            <div className="inline m-3">
              <button className="border font-bold px-4 py-1.5 border-gray-500 hover:bg-pink-500 hover:border-none ">
                Add to cart
              </button>
            </div>
          </div>
          <div className="my-4">
            {item.is_favorite ? (
              <p className="">
                <span>Favorite</span>
                <FcLike className="inline text-5xl m-1" />
              </p>
            ) : (
              <p>
                <FcLikePlaceholder className="inline text-5xl m-1" />
                <span>click to make it a favorite!</span>
              </p>
            )}
          </div>
          <div className=" rounded text-sm my-4">
            <h6 className="inline font-bold bg-gray-200 dark:bg-slate-800 dark:text-slate-400 p-2 rounded">
              {item.in_stock < 5 ? (
                <span>Only {item.in_stock} left</span>
              ) : (
                <span>{item.in_stock} in-stock</span>
              )}
            </h6>
          </div>
          <div className="my-2">
            <h3 className="">
              {item.save_for_later ? (
                <p className="">
                  <span>
                    This item is in your wish list, you can click to remove it
                    from you wish list or buy while it's in stock!
                  </span>
                  <button>
                    <RiShoppingBag3Line className="" />
                    <MdExposurePlus1 />
                  </button>
                </p>
              ) : (
                <p>
                  <span>Click to add to wish list!</span>
                  <button>
                    <RiShoppingBag3Line className="inline p-1 text-3xl text-slate-700 dark:text-slate-200 mb-2" />
                  </button>
                </p>
              )}
            </h3>
          </div>
        </div>
      </div>
      <div className="ms-auto">
        <EditItem />
      </div>
      <br />
      <h2 className="text-2xl font-bold pl-2">You may also like these!</h2>
      <hr />
      <div className="flex flex-wrap justify-center gap-2">
        {related.map((el) => {
          if (el.category.includes(item.category) && el.id !== item.id) {
            return (
              <div key={el.id} className="p-2 w-50 h-50 my-2 mx-4">
                <Link to={`/items/${el.id}`}>
                  <img
                    src={el.image}
                    className="object-contain w-50 h-44"
                  ></img>
                </Link>
                <Link to={`/items/${el.id}`}>
                  <h2 className="w-40 break-normal truncate">{el.name}</h2>
                </Link>
                <div className="flex justify-between">
                  <p className="font-bold">${el.price}</p>
                  <p className="bg-gray-200 dark:bg-slate-900 dark:text-slate-300 font-bold p-1 rounded">
                    {item.in_stock < 5 ? (
                      <span>Only {item.in_stock} left</span>
                    ) : (
                      <span>{item.in_stock} in-stock</span>
                    )}
                  </p>
                </div>
              </div>
            );
          }
        })}
      </div>
      <br />
      <br />
      <hr />
      <Reviews />
    </article>
  );
}
