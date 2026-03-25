import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const EditProduct = () => {
  const navigate = useNavigate();
  const init = {
    title: "",
    price: "",
    description: "",
    image: "",
    category: "",
  };
  const [formData, setFormData] = useState(init);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios
      .post("https://fakestoreapi.com/products", formData)
      .then((res) => {
        console.log(res);
        toast.success("Product added..");
        navigate("/table");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Error while adding product");
      });
  };
  return (
    <div className="grid place-items-center h-screen">
      <form
        onSubmit={handleSubmit}
        action=""
        className="w-[32rem] flex flex-col p-8 gap-6 shadow-2xl rounded-xl"
      >
        <h1 className="text-4xl font-bold">Edit Product</h1>
        <input
          onChange={handleChange}
          type="text"
          placeholder="Enter product title"
          className="p-2 rounded-md w-full"
          name="title"
          value={formData.title}
        />
        <input
          onChange={handleChange}
          type="text"
          placeholder="Enter product category"
          className="p-2 rounded-md w-full"
          name="category"
          value={formData.category}
        />
        <input
          onChange={handleChange}
          type="text"
          placeholder="Enter image url"
          className="p-2 rounded-md w-full"
          name="image"
          value={formData.image}
        />
        <input
          onChange={handleChange}
          type="number"
          placeholder="Enter Price"
          className="p-2 rounded-md w-full"
          name="price"
          value={formData.price}
        />
        <textarea
          onChange={handleChange}
          className="p-2 rounded-md w-full border-2"
          rows={10}
          placeholder="Enter product description"
          name="description"
          value={formData.description}
        ></textarea>

        <button
          type="submit"
          className="font-bold cursor-pointer text-white w-full p-2 rounded-md bg-blue-500"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default EditProduct;
