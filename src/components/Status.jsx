import React from "react";
import { useState } from "react";

const Status = () => {
  const [message, setMessage] = useState("Select a track to play");

  return <h2>{message}</h2>;
};

export default Status;