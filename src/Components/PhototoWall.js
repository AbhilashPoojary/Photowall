import React from "react";
import Photo from "./Photo";
import { Link } from "react-router-dom";

function PhototoWall(props) {
  return (
    <>
      <Link className="addIcon" to="/AddPhoto"></Link>
      {/* <button className="addIcon" onClick={onNavigate}></button> */}
      <div className="photoGrid">
        {props.posts
          .sort((x, y) => {
            return y.id - x.id;
          })
          .map((post, index) => {
            return <Photo key={post.id} post={post} {...props} index={index} />;
          })}
      </div>
    </>
  );
}

export default PhototoWall;
