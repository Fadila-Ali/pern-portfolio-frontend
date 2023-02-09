import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Item from "./Item";

const API = process.env.REACT_APP_API_URL;

export default function Items() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/items`)
      .then((res) => {
        console.log(res.data);
        setItems(res.data);
      })
      .catch((c) => console.warn("catch, c"));
  }, []);
  return (
    <div>
      <article className="sm:flex flex-wrap">
        {items.map((item) => {
          return <Item key={item.id} item={item} />;
        })}
      </article>
    </div>
  );
}
