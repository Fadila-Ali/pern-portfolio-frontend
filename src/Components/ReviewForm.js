import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ReviewForm(props) {
  let { id } = useParams();
  const { reviewDetails } = props;

  const [review, setReview] = useState({
    reviewer: "",
    title: "",
    content: "",
    rating: "",
    item_id: id,
  });

  const handleTextChange = (event) => {
    setReview({ ...review, [event.target.id]: event.target.value });
  };

  useEffect(() => {
    if (reviewDetails) {
      setReview(reviewDetails);
    }
  }, [id, reviewDetails, props]);

  const handleSubmit = (event) => {
    event.preventDefault();
    props.handleSubmit(review, id);
    if (reviewDetails) {
      props.toggleView();
    }
    setReview({
      reviewer: "",
      title: "",
      content: "",
      rating: "",
      item_id: id,
    });
  };
  return (
    <div class="w-full flex flex-col items-center justify-center">
      {props.children}
      <form class="px-10 pt-6 pb-8 mb-4 w-[80%]" onSubmit={handleSubmit}>
        <input
          class="inline bg-white dark:bg-black shadow-md appearance-none rounded w-full py-2 px-3 my-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="reviewer"
          value={review.reviewer}
          type="text"
          onChange={handleTextChange}
          placeholder="Your name"
          required
        />
        <input
          class="bg-white dark:bg-black shadow-md appearance-none rounded w-full py-2 px-3 my-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="title"
          type="text"
          required
          value={review.title}
          onChange={handleTextChange}
          placeholder="Title"
        />
        <input
          class=" bg-white dark:bg-black shadow-md appearance-none rounded w-full py-2 px-3 my-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="rating"
          type="number"
          name="rating"
          min="0"
          max="5"
          step="1"
          value={review.rating}
          onChange={handleTextChange}
          placeholder="Rating(1 to 5)"
        />
        <textarea
          class="bg-white dark:bg-black shadow-md appearance-none rounded w-full py-2 px-3 my-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="content"
          type="text"
          name="content"
          value={review.content}
          placeholder="What do you think..."
          onChange={handleTextChange}
        />
        <button
          class="block border border-gray-500 mx-auto font-bold hover:bg-pink-500 hover:border-none text-slace-900 py-2 px-4 rounded"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default ReviewForm;
