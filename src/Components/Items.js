import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import { FcLikePlaceholder, FcLike } from "react-icons/fc";
import { BiSearch } from "react-icons/bi";
import Item from "./Item";

const API = process.env.REACT_APP_API_URL;

export default function Items() {
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(`${API}/items`)
      .then((res) => {
        setItems(res.data);
      })
      .catch((c) => console.warn("catch, c"));
  }, []);
  return (
    <div>
      <div className="flex justify-center">
        <input
          type="text"
          value={search}
          id="search"
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Enter name"
          className="shadow-2xl bg-white text-slate-900 text-lg rounded-md w-2/5 py-3 px-4 mb-3 leading-tight focus:outline-none focus:shadow-outline"
        />
        <button
          className="relative right-8 bottom-1 text-pink-500"
          type="submit"
        >
          <BiSearch size={25} />
        </button>
      </div>
      {search ? (
        <article className="sm:flex flex-wrap gap-2">
          {items
            .filter((item) => {
              if (search === "") {
                return "No item found!";
              } else if (
                item.name.toLowerCase().includes(search.toLowerCase())
              ) {
                return item;
              }
            })
            .map((item, index) => (
              <section className="bg-[#ffffff32] dark:bg-[#00000032] w-80 h-72 shadow-md rounded-md p-2 my-2  text-slate-700">
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
                        <FcLike className="inline text-2xl m-1" />
                      ) : (
                        <FcLikePlaceholder className="inline text-2xl m-1" />
                      )}
                    </div>
                  </div>
                </div>
              </section>
            ))}
        </article>
      ) : (
        <article className="sm:flex flex-wrap gap-2">
          {items.map((item) => {
            return <Item key={item.id} item={item} />;
          })}
        </article>
      )}
    </div>
  );
}
