import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import db, { timestamp } from "../redux/firebase/firebase";
import { useSelector, useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { showModal } from "../redux/actions";
import Comment from "./Comment";

const SinglePost = ({ post }) => {
  const postId = post.postId;
  const userImg = useSelector((state) => state.auth.userImg);
  const auth = useSelector((state) => state.auth);
  const uid = useSelector((state) => state.auth.uid);
  const { id } = useParams();
  const [opened, setOpened] = useState(false);
  const dispatch = useDispatch();
  const [comment, setcomment] = useState("");
  const [allcomments, setAllcomments] = useState([]);
  const [count, setcount] = useState(0);
  const [Likes, setLikes] = useState(10);
  const [liked, setLiked] = useState(null);
  const [postLikes, setpostLikes] = useState(post.Likes);
 
  let unsubscribe;
  let unsub;

  const deletePost = (id) => {
    db.collection("allposts")
      .doc(id)
      .delete()
      .then(() => {
        toast.success("Post successfully deleted");
        if (id) {
          window.location.reload();
        }
      });
  };

  useEffect(() => {
    if (post.postId) {
      setLiked(true);
      let docRef = db
        .collection("users")
        .doc(auth.uid)
        .collection("Liked")
        .where("postId", "==", postId);
      docRef
        .get()
        .then((doc) => {
          if (!doc.empty) {
            setLiked(true);

            //   db.collection('users').doc(auth.uid).collection('Liked').delete()
            // .then(() => setLiked(true))
          } else {
            setLiked(false);
          }
        })
        .catch((error) => {
          console.log("Error getting document:", error);
        });
    }
  }, []);

  const onDislike = () => {
    setpostLikes(prevprops => prevprops - 1)
    setLiked(false);
    db.collection("users")
      .doc(auth.uid)
      .collection("Liked")
      .where("postId", "==", postId)
      .get()
      .then((data) => {
        let like = data.docs[0]?.id;
        console.log(like);
        db.collection("users")
          .doc(auth?.uid)
          .collection("Liked")
          .doc(like)
          .delete()
          .then(() => {
            db.collection("allposts")
              .doc(post.postId)
              .get()
              .then((posti) => {
                let numberlikes = posti.data().Likes;
                db.collection("allposts")
                  .doc(post?.postId)
                  .update({
                    Likes: numberlikes - 1,
                  });
              });
          });
      }).catch( e => {
        setpostLikes(prevprops => prevprops + 1)
      })
  };

  const onLike = () => {
    setpostLikes(prevprops => prevprops + 1)
    setLiked(true);

    db.collection("users")
      .doc(auth.uid)
      .collection("Liked")
      .add({
        postId: postId,
      })
      .then(() => {
        db.collection("allposts")
          .doc(post.postId)
          .get()
          .then((posti) => {
            let numberlikes = posti.data().Likes;
            db.collection("allposts")
              .doc(post?.postId)
              .update({
                Likes: numberlikes + 1,
              });
          });
      }).catch(e => {
        setpostLikes(prevprops => prevprops - 1)
      })
  };

  const ShowHide = () => {
    if (opened === false) {
      setOpened(true);
    } else {
      setOpened(false);
    }
  };

  const showComments = () => {
    unsubscribe = db
      .collection("allposts")
      .doc(post.postId)
      .collection("comments")
      .orderBy("timestamp", "asc")
      .onSnapshot((snap) => {
        setAllcomments(snap.docs.map((comment) => comment.data()));
      });

    return unsubscribe;
  };

  const loadComments = () => {
    showComments();
    ShowHide();
  };

  useEffect(() => {
    return () => {
      if (unsubscribe) return unsubscribe();
      if(unsub) return () => unsub();
    };
  }, []);

  useEffect(() => {
    if (post.postId) {
      unsub = db
        .collection("allposts")
        .doc(post?.postId)
        .collection("comments")
        .onSnapshot((comments) => {
          if (comments && comments.size != count) {
            setcount(comments?.size);
          }
        });
    }
   
  }, []);

  const postComment = (e) => {
    e.preventDefault();
    db.collection("allposts")
      .doc(post.postId)
      .collection("comments")
      .add({
        author: `${auth.FirstName} ${auth.LastName}`,
        authorImg: userImg,
        commentText: comment,
        timestamp: timestamp,
      })
      .then((e) => {
        dispatch({ type: "COMMENT_POSTED" });
        setcomment("");
        showComments();
        setOpened(true);
      });
  };

  return (
    <div className="recentcontainer">
      <ToastContainer />
      <div className="newpostheader">
        <Link to={`/homepage/user/${post.uid}`}>
          <img
            alt="helloword"
            src={post.userImg}
            style={{ ObjectFit: "cover", objectPosition: "center" }}
          />
          <span className="name postnamee">
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
            <Link
              className="personpostmenu"
              to="#"
              onClick={() => dispatch(showModal(post.postId))}
            >
              <i
                style={{
                  color: "white",
                  padding: "5px",
                  backgroundColor: "#2d4a82",
                  borderRadius: "50px",
                }}
                className="fas fa-edit"
              ></i>
            </Link>
            <Link
              className="follow"
              to="#"
              onClick={() => deletePost(post.postId)}
              style={{
                color: "white",
                padding: "5px",
                backgroundColor: "#e32636",
                borderRadius: "50px",
              }}
            >
              <i className="fas fa-trash"></i>
            </Link>
          </div>
        ) : null}
        <p />
      </div>
      <div className="newpost">
        <div className="postcontent" style={{ fontSize: "18px" }}>
          {post.caption}
          <div className="tc" style={{ position: "relative" }}>
            {post.imageUrl ? (
              <img
                alt="helloword"
                src={post.imageUrl}
                className="postimge"
                scrolling="no"
                frameBorder={0}
              />
            ) : null}
          </div>
        </div>
      </div>
      <ul className="newpostfooter nav nav-tabs nav-justified">
        <li>
          <i className="fas fa-heart" style={{ color: "rgb(227, 38, 54)" }}></i>

          <span className="ml-2">{postLikes}</span>
        </li>
        <li>
          <span to="#" title="Leave a comment" >
            <i className="fas fa-comments mr-2" style={{color: '#3b5e95'}} />
            <span>{count} Comments</span>
          </span>
        </li>
      </ul>{" "}
      <ul className="newpostfooter nav nav-tabs nav-justified">
        {liked ? (
          <li style={{ cursor: "pointer" }} onClick={onDislike}>
            <>
              <i className="fas fa-thumbs-up" style={{ color: "#8c396e" }}></i>{" "}
              <span className="ml-2" style={{ color: "#8c396e" }}>
                Liked
              </span>
            </>
          </li>
        ) : (
          <li onClick={onLike} style={{ cursor: "pointer" }}>
            <i className="far fa-thumbs-up"></i>
            <span className="ml-2">Like</span>
          </li>
        )}
        <li>
          <span to="#" title="Leave a comment" onClick={loadComments} style={{ cursor: "pointer" }}>
            <span>{opened ? 'Hide Comments' : 'Show Comments'}</span>
          </span>
        </li>

      </ul>
      <ul className="commentlist">
        {/* <p className="commentsCounter" onClick={loadComments}>
          {opened ? "Hide Comments" : "Show Comments"}
        </p> */}
        <div className="" style={{ display: opened ? "block" : "none" }}>
          {allcomments.map((comment) => (
            <Comment comment={comment} key={Math.random()} />
          ))}
        </div>
      </ul>
      <div className="commentpost">
        <div className="input-group">
          <Link to="#">
            <img
              alt="helloword"
              src={
                userImg
                  ? userImg
                  : "https://pbs.twimg.com/profile_images/831173492968140804/43M7c5j_.jpg"
              }
            />
          </Link>

          <textarea
            className="form-control"
            placeholder="Write a comment..."
            value={comment}
            onChange={(e) => setcomment(e.target.value)}
          />

          <button onClick={postComment} className="postcomment">
            <i className="fas fa-paper-plane"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
