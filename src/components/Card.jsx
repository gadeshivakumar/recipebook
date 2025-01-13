import React from "react";
import { useNavigate } from "react-router-dom";
import "./Card.css";

function Card(props) {
  const navigate = useNavigate();

  function handleClick(e) {
    e.preventDefault();

    navigate("/process", {
      state: { url: props.url, name: props.name },
    });
  }

  return (
    <>
      <div className="con">
        <div
          className="i"
          style={{ backgroundImage: `url(${props.url})` }}
        ></div>
        <div className="dis">
          <h1>{props.name}</h1>
          <p>{props.desc}</p>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={handleClick}
          >
            Recipe
          </button>
        </div>
      </div>
    </>
  );
}

export default Card;
