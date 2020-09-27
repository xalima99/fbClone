import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import db from "../redux/firebase/firebase";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SinglePost = ({ post }) => {
  // const [fetchedImg, setfetchedImg] = useState("");
  const [infosLoading, setinfosLoading] = useState(false);
  const userImg = useSelector((state) => state.auth.userImg);
  const uid = useSelector((state) => state.auth.uid);
  const {id} = useParams()
  // useEffect(() => {
  //   db.collection("profilImgs")
  //     .doc(post.uid)
  //     .get()
  //     .then((snap) => {
  //       setfetchedImg(snap?.data()?.profileImg);
  //     });
  // }, [post.uid]);


  const deletePost = (id) => {
    db.collection('allposts').doc(id).delete()
    .then(() => {
      
      toast.success("Post successfully deleted");
      if(id){
        window.location.reload()
      }
    })
  }

  return (
    <div className="recentcontainer">
    <ToastContainer />
      {infosLoading ? (
        <div className="spinner">
          <svg
            className="spinner"
            width="65px"
            height="65px"
            viewBox="0 0 66 66"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              className="path"
              fill="none"
              strokeWidth="6"
              strokeLinecap="round"
              cx="33"
              cy="33"
              r="30"
            ></circle>
          </svg>
        </div>
      ) : (
        <>
          <div className="newpostheader">
            <Link to={`/homepage/user/${post.uid}`}>
              <img
                alt="helloword"
                src={
                  post.userImg
                }
                style={{ ObjectFit: "cover", objectPosition: "center" }}
              />
              <span className="name">
                {post.FirstName
                  ? `${post.FirstName} ${post.LastName}`
                  : post.username}
              </span>
            </Link>
            <p>
              <Link className="date" to="#">
                Published at {new Date(post?.timestamp?.toDate()).toUTCString()}
              </Link>
              <Link to="#">
                <i className="fa fa-globe" />
              </Link>
            </p>
            {uid === post.uid ? (
              <div className="rightsideofpost">
                <Link className="follow" to="#" onClick={() => deletePost(post.postId)}>
                  <i className="fas fa-trash"></i>
                </Link>
                <Link className="personpostmenu" to="#">
                  <i className="fa fa-caret-down" />
                </Link>
              </div>
            ) : null}
            <p />
          </div>
          <div className="newpost">
            <div className="postcontent">
              {post.caption}
              <div className="tc">
                {post.imageUrl ? (
                  <img
                    alt="helloword"
                    src={post.imageUrl}
                    style={{
                      width: "100%",
                      objectFit: "cover",
                      objectPosition: "center",
                      border: "none",
                      overflow: "hidden",
                    }}
                    scrolling="no"
                    frameBorder={0}
                  />
                ) : null}
              </div>
            </div>
          </div>
          <ul className="newpostfooter nav nav-tabs nav-justified">
            <li>
              <Link to="#">
                <i className="fa fa-thumbs-up" />
                <span>Like</span>
              </Link>
            </li>
            <li>
              <Link to="#" title="Leave a comment">
                <i className="fa fa-comment-o" />
                <span>Comment</span>
              </Link>
            </li>
            <li>
              <Link
                to="#"
                title="Send this to friends or post it to your timeline"
              >
                <i className="fa fa-share" />
                <span>Share</span>
              </Link>
            </li>
          </ul>
          <ul className="community-counter nav nav-tabs nav-justified">
            <li>
              <Link to="#">
                <i className="fa fa-thumbs-up" />
                <span>1</span>
              </Link>
            </li>
            <li>
              <Link to="#">
                <i className="fa fa-comment-o" />
                <span>3</span>
              </Link>
            </li>
            <li>
              <Link to="#">
                <i className="fa fa-share" />
                <span>4</span>
              </Link>
            </li>
          </ul>
          <div className="commentpost">
            <div className="input-group">
              <Link to="#">
                <img alt="helloword" src={userImg ? userImg : 'https://pbs.twimg.com/profile_images/831173492968140804/43M7c5j_.jpg'} />
              </Link>
              <textarea
                className="form-control"
                placeholder="Write a comment..."
                defaultValue={""}
              />
              <div className="input-group-btn">
                <Link className="btn btn-default" to="#">
                  <i className="fa fa-smile-o" />
                </Link>
                <Link className="btn btn-default" to="#">
                  <i className="fa fa-picture-o" />
                </Link>
                <Link className="btn btn-default" to="#">
                  <i className="fa fa-gift" />
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default SinglePost;
