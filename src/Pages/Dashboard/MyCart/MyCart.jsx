import React from "react";
import { Helmet } from "react-helmet-async";
// import useCart from "../../../Hook/useCart";
// import { FaDelicious } from "react-icons/fa";
import Swal from "sweetalert2";
import useCart from "../../../Hook/useCart";

const MyCart = () => {
  const [cart, refetch] = useCart();
  console.log(cart);
  const total = cart.reduce((sum, item) => item.price + sum, 0);
  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/carts/${item._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };
  return (
    <div className="py-5 w-full">
      <Helmet>
        <title>Bistro Boss | My Cart</title>
      </Helmet>

      <div className="uppercase flex justify-evenly h-[60px] items-center">
        <h3 className="px-3">
          Total Item <span className="font-bold">{cart.length}</span>
        </h3>
        <h3 className="px-3">Total Price ${total}</h3>
        <button className="btn btn-sm btn-primary">PAY</button>
      </div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Food</th>
              <th>Item Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={item.image}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </td>
                <td className="font-semibold">{item.name}</td>
                <td>${item.price}</td>
                <th>
                  <button
                    onClick={() => handleDelete(item)}
                    className="btn btn-outline btn-secondary btn-xs"
                  >
                    Delete
                  </button>
                </th>
              </tr>
            ))}
            {/* row 1 */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyCart;
