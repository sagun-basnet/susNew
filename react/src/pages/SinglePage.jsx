import React from "react";
import { useParams } from "react-router-dom";

const SinglePage = () => {
  const {id} = useParams();
  console.log(parseInt(id));

  return <div>SinglePage</div>;
};

export default SinglePage;
