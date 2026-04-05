import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SinglePage = () => {
  const { id } = useParams();
  const [data, setData] = useState({});

  // console.log(parseInt(id));

  const fetchData = async () => {
    await axios
      .get(`https://fakestoreapi.com/products/${parseInt(id)}`)
      .then((res) => {
        console.log(res);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="border-2">
      <img className="h-20 w-20" src={data.image} alt="" />
      <h1>{data.title}</h1>
      <p>{data.description}</p>
      <span>{data.price}</span>
      <h2>{data.category}</h2>
    </div>
  );
};

export default SinglePage;
