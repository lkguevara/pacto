import React, { useState } from "react";
import { useEffect } from "react";
import io from "socket.io-client";

export default function chat() {
  const [message, setMessage] = useState("");
  const socket = io("http://localhost:3001");

  useEffect(() => {
    const receiveMessage = (message) => {
      console.log(message);
    };

    socket.on("message", receiveMessage);

    return () => {
      socket.off("message", receiveMessage );
    };
  }, []);

  const handleOnSubmit = (event) => {
    event.preventDefault();
    socket.emit("message", message);
    setMessage("");
  };

  const handleOnChange = (event) => {
    const { value } = event.target;
    setMessage(value);
  };

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <input type="textarea" onChange={handleOnChange} value={message} />
        <button>Enviar</button>
      </form>
    </div>
  );
}
