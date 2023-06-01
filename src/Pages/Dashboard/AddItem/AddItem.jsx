import React from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
const AddItem = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

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
