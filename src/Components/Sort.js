import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

export default function Sort() {
    const [items, setItems] = useState([])
    const [selectedItems, setSelectedItems] = useState([])

    let navigate = useNavigate()

    useEffect(() => {
      axios
        .get(`${API}/items`)
        .then((res) => {
          setItems(res.data);
        })
        .catch((c) => console.warn("catch, c"));
    }, []);

    const handleSelected = (e) => {
      if (e.target.value === "true" || e.target.value === "false") {
        const filter = items.filter((item) => {
          return item.is_favorite === e.target.value;
        });
        setSelectedItems(filter);
      } else {
        setItems(items);
        setSelectedItems(items);
      }

    };

  return <div>Sort</div>;
}
