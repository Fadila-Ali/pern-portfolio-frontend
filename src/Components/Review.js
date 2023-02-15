import { useState } from "react";
import ReviewForm from "./ReviewForm";

export default function Review({ review, handleDelete, handleSubmit }) {
  const [viewEditForm, toggleEditForm] = useState(false);

  const toggleView = () => {
    toggleEditForm(!viewEditForm);
  };

  const { title, rating, reviewer, content, id } = review;


  return (
    <div class="flex flex-col justify-center items-center">
      {viewEditForm ? (
        <ReviewForm
          reviewDetails={review}
          handleSubmit={handleSubmit}
          toggleView={toggleView}
        />
      ) : (
        <div class="bg-[#ffffffed] dark:bg-[#00000032] shadow-lg w-[60%] flex flex-col justify-center p-4 m-4 rounded">
          <div className="flex justify-between">
            <h2 className="text-2xl font-bold">
              {reviewer} - <span className="text-xl">{title}</span>
            </h2>
            <span className="font-bold">Ratings: {rating}</span>
          </div>
          <p className="p-2">{content}</p>
          <div class="p-2 flex justify-end">
            <button
              class="bg-gray-400 font-bold px-4 py-1 rounded m-1 hover:bg-pink-500"
              onClick={toggleView}
            >
              Edit
            </button>
            <button
              class="bg-gray-400 font-bold px-2 py-1 rounded m-1 hover:bg-pink-500"
              onClick={() => handleDelete(id)}
            >
              Delete
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
