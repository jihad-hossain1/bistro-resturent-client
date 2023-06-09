import React from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../Hook/useAxiosSecure";
// import SweetAlert2 from "react-sweetalert2";
import Swal from "sweetalert2";
const img_hosting_token = import.meta.env.VITE_BB_KEY;
const AddItem = () => {
  const [axiosSecure] = useAxiosSecure()
  // console.log(img_hosting_token);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;
  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);

    fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgResponse) => {
        // console.log(imgResponse);
        if (imgResponse.success) {
          const imgUrl = imgResponse.data.display_url;
          // console.log(imgUrl);
          const { name, price, category, recipe, quantiy } = data;
          const newItem = {
            name,
            price: parseFloat(price),
            category,
            recipe,
            image: imgUrl,
            quantiy: parseFloat(quantiy),
          };
          axiosSecure.post('/menus').then(data => {
            // console.log('after posting new menus items');
            if (data.data.insertedId) {
            //  toast.success("Successfully toasted!");
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your work has been saved",
                showConfirmButton: false,
                timer: 1500,
              });
           }
          })
          // console.log(newItem);
        }
      });
  };

  return (
    <>
      <div className="w-full">
        <SectionTitle
          subHeading={`What's new`}
          heading={`Add an item`}
        ></SectionTitle>
        <form
          onSubmit={handleSubmit(onSubmit)}
          //   className="px-10 md:w-2/4 mx-auto my-10"
        >
          <div className="mb-2 form-control w-full ">
            <label className="label">
              <span className="label-text">Recipe Name*</span>
            </label>
            <input
              {...register("name", { required: true, maxLength: 70 })}
              type="text"
              required
              placeholder=""
              className="input input-bordered input-success w-full max-w-xs"
            />
          </div>
          <div className="flex ">
            <div className="mb-2 form-control w-full ">
              <label className="label">
                <span className="label-text">Price*</span>
              </label>
              <input
                {...register("price", { required: true })}
                type="number"
                required
                placeholder=""
                className="input input-bordered input-success w-full max-w-xs"
              />
            </div>
            <div className="mb-2 form-control w-full ">
              <label className="label">
                <span className="label-text">Quantity*</span>
              </label>
              <input
                {...register("quantiy", { required: true })}
                type="number"
                required
                placeholder=""
                className="input input-bordered input-success w-full max-w-xs"
              />
            </div>
          </div>
          <div className="form-control w-full  my-2">
            <label className="label">
              <span className="label-text">Pick the an item*</span>
            </label>
            <select
              {...register("category", { required: true })}
              className="select select-bordered"
            >
              <option disabled selected>
                Pick one
              </option>
              <option>Pizza</option>
              <option>Soup</option>
              <option>Drinks</option>
              <option>Desert</option>
              <option>Salad</option>
            </select>
          </div>
          <div className="form-control w-full  my-2">
            <label className="label">
              <span className="label-text">Recipe Details*</span>
            </label>
            <textarea
              {...register("recipe", { required: true })}
              className="textarea textarea-bordered textarea-sm w-full "
            ></textarea>
          </div>
          <div className="form-control w-full  my-2">
            <input
              {...register("image", { required: true })}
              type="file"
              class="file-input file-input-bordered file-input-success w-full "
            />
          </div>
          <div className="form-control w-full  my-2">
            <input
              type="submit"
              value="Add item"
              className="btn btn-warning btn-sm min-w-full"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default AddItem;
