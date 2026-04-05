import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Api = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    // try {
    //   const res = await axios.get("https://fakestoreapi.com/products");
    //   console.log(res);
    //   setData(res.data);
    // } catch (res) {
    //   console.log(res);
    // }
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

  return (
    <>
      <div className="grid grid-cols-3 gap-2">
        {data.map((item, index) => {
          return (
            <Link to={`/products/${item.id}`}>
              <div key={index} className="border-2">
                <img className="h-20 w-20" src={item.image} alt="" />
                <h1>{item.title}</h1>
                <p>{item.description}</p>
                <span>{item.price}</span>
                <h2>{item.category}</h2>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Api;
