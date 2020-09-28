import React from "react";
import { Link } from "react-router-dom";
import { timestamp } from "../redux/firebase/firebase";

const Comment = ({ comment }) => {
  return (
    <li
      style={{
        display: "flex",
        flexDirection:"column",
        borderBottom: "1px solid #80808069",
        width: "90%",
      }}
    >
      <Link to="#" style={{ display: "flex", alignItems: "center" }}>
        <div className="">
          <img
            className="commentImg"
            src={comment.authorImg ? comment.authorImg : null}
            alt=""
          />
          <p className="mt-1 pt-3" style={{ display: "inline-block" }}>
            <strong>{comment.author ? comment.author : null}</strong>
          </p>
          <span style={{ fontSize: "12px", color: "#4b4f56", margin:"0 4px" }}>
            {comment.timestamp
              ? new Date(comment.timestamp.toDate()).toUTCString()
              : null}
          </span>
        </div>
      </Link>
      <p style={{marginLeft: "3px" }}>
        {comment.commentText ? comment.commentText : null}
      </p>
    </li>
  );
};

export default Comment;
