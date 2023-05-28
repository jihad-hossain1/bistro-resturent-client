import React, { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";

const FoodCard = ({ item }) => {
  const { name, image, price, recipe, _id } = item;
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleAddToCart = (item) => {
    console.log(item);
    if (user && user?.email) {
      const cartItem = {
        menuItemId: _id,
        name,
        image,
        price,
        email: user?.email,
      };
      fetch("http://localhost:5000/carts", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(cartItem),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.insertedId) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Food added on the cart",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      Swal.fire({
        title: "Please login to order the food",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Go to, LogIn",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
          // Swal.fire("Deleted!", "Your file has been deleted.", "success");
        }
      });
    }
  };
  return (
    <>
      <div className="card w-96 bg-base-100 shadow">
        <figure>
          <img className="rounded p-2" src={image} alt="Shoes" />
        </figure>
        <p className="absolute right-0 mr-4 mt-4 bg-slate-700 text-white px-4">
          ${price}{" "}
        </p>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>

          <p>{recipe}</p>
          <div className="card-actions justify-center">
            <button
              onClick={() => handleAddToCart(item)}
              className="btn btn-primary"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FoodCard;
