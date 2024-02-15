import React, { useState } from "react";
import { toast } from "react-toastify";
import { useCartData } from "../../contexts/cartContext";
import { getImageUrl } from "../../utils/cine-utilities";
import MovieDetailsModal from "./MovieDetailsModal";
import Ratings from "./Ratings";

function MovieCard({ movie }) {
  const { cover, description, genre, id, price, rating, title } = movie;
  const image = getImageUrl(cover);
  const [showModal, setShowModal] = useState(false);
  const { cartData, dispatch } = useCartData();
  const [error, setError] = useState(false);

  const handleAddCart = (e, id) => {
    e.stopPropagation();
    const index = cartData.findIndex((c) => c.id === id);
    if (index < 0) {
      dispatch({
        type: "ADD_TO_CART",
        payload: { ...movie },
      });
      toast.success("Added Successfully!");
    } else {
      toast.error("Already Added");
    }
  };
  return (
    <>
      {showModal && (
        <MovieDetailsModal
          onCancel={() => setShowModal(false)}
          movie={movie}
          onAddCart={handleAddCart}
        />
      )}

      <div onClick={() => setShowModal(true)}>
        <figure
          key={id}
          className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl"
        >
          <img className="w-full object-cover" src={image} alt="" />
          <figcaption className="pt-4">
            <h3 className="text-xl mb-1">{title}</h3>
            <p className="text-[#575A6E] text-sm mb-2">{genre}</p>
            <Ratings value={rating} />
            <a
              className="bg-primary cursor-pointer rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
              onClick={(e) => handleAddCart(e, id)}
            >
              <img src="/tag.svg" alt="" />
              <span>${price} | Add to Cart</span>
            </a>
          </figcaption>
        </figure>
      </div>
    </>
  );
}

export default MovieCard;
