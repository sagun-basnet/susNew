import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";
import { FaUserEdit } from "react-icons/fa";
import { toast } from "react-toastify";

const Table = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    await axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  console.log(data);

  useEffect(() => {
    getData();
  }, []);

  const handleDelete = async (id) => {
    await axios
      .delete(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        console.log(res);
        toast.success("Product deleted successfully.");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Error while deleting product");
      });
  };

  return (
    <div className="relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base border border-default">
      <table className="w-full text-sm text-left rtl:text-right text-body">
        <thead className="text-sm text-body bg-neutral-secondary-medium border-b border-default-medium">
          <tr>
            <th scope="col" className="px-6 py-3 font-medium">
              Image
            </th>
            <th scope="col" className="px-6 py-3 font-medium">
              Product name
            </th>
            <th scope="col" className="px-6 py-3 font-medium">
              Description
            </th>
            <th scope="col" className="px-6 py-3 font-medium">
              Category
            </th>
            <th scope="col" className="px-6 py-3 font-medium">
              {"Price(Rs.)"}
            </th>
            <th scope="col" className="px-6 py-3 font-medium">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item, index) => {
            return (
              <tr
                key={index}
                className="bg-neutral-primary-soft border-b border-default hover:bg-neutral-secondary-medium"
              >
                <td className="px-6 py-4">
                  <img className="h-10 w-10" src={item.image} alt="" />
                </td>
                <th scope="row" className="px-6 py-4">
                  {item.title}
                </th>
                <td className="px-6 py-4">
                  {item.description.slice(0, 100)}...
                </td>
                <td className="px-6 py-4">{item.category}</td>
                <td className="px-6 py-4">{item.price}</td>
                <td className="px-6 py-4 text-right flex gap-4">
                  <button
                    onClick={() => {
                      handleDelete(item.id);
                    }}
                    className="p-2 px-4 rounded-md bg-black text-red-500 cursor-pointer"
                  >
                    <FaTrash />
                  </button>
                  <button className="p-2 px-4 rounded-md bg-black text-blue-500 cursor-pointer">
                    <FaUserEdit />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
