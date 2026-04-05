import axios from "axios";
import React, { useEffect } from "react";

const FetchNode = () => {
  const token = localStorage.getItem("token");
  const fetchData = async () => {
    axios
      .get("http://localhost:5555/select-user", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <div>FetchNode</div>;
};

export default FetchNode;
