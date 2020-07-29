import React from "react";
import { Link } from "react-router-dom";

function Photo(props) {
  const post = props.post;
  return (
    <figure className="figure">
      <Link to={`/single/${props.post.id}`}>
        <img
          className="photo"
          src={props.post.imageLink}
          alt={props.post.description}
        />
      </Link>
      <figcaption>
        <p>{props.post.description}</p>
        <div className="button-container">
          <button
            className="remove-button"
            onClick={() => {
              props.startRemovingPost(props.index, post.id);
              props.history.push("/");
            }}
          >
            Remove
          </button>
          <Link className="button" to={`/single/${props.post.id}`}>
            <div className="comment-count">
              <div className="speech-bubble"></div>
              {props.comments[post.id] ? props.comments[post.id].length : 0}
            </div>
          </Link>
        </div>
      </figcaption>
    </figure>
  );
}

export default Photo;
