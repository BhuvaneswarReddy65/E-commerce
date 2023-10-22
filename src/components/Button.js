import React from "react";

function Button({ text, onClick }) {
  return (
    <button className="m-2 bg-blue-500 text-white p-2 rounded-md">
      {text}
    </button>
  );
}

export default Button;
