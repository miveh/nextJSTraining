import { Typography } from "@mui/material";
import React from "react";

const getData = async (url: string) => {
  const response = await fetch(url);
  return response.json();
};
const Todos = async () => {
  const data = await getData("https://jsonplaceholder.typicode.com/users");
  return (
    <>
      {data.map((item: any, index: number) => (
        <Typography key={index}>{item.name}</Typography>
      ))}
    </>
  );
};

export default Todos;
