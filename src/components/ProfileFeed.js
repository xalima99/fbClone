import React, { useState,useEffect } from "react";
import SinglePost from "./SinglePost";
import { Link } from "react-router-dom";
import db, { storage, timestamp } from "../redux/firebase/firebase";
import { useSelector, useDispatch } from "react-redux";

const ProfileFeed = ({posts}) => {
    const [image, setImage] = useState(null);
  const [caption, setCaption] = useState("");
  const [progress, setProgress] = useState(0);
  const [file, setfile] = useState(null);
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [posting, setposting] = useState(false);
  const [fetchedImg, setfetchedImg] = useState('');
  // const allposts = useSelector(state => state.allpost.allposts)
 

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
      setfile(URL.createObjectURL(e.target.files[0]));
    }
  };

  // useEffect(() => {
  //   db.collection('profilImgs').doc(auth.uid).get()
  //   .then(snap => {
  //     setfetchedImg(snap.data().profileImg)
  //   })
  // }, []);

  // const handleUpload = (e) => {
  //   e.preventDefault();
  //   setposting(true);
  //   if (image) {
  //     const uploadTask = storage.ref(`/images/${image.name}`).put(image);
  //     uploadTask.on(
  //       "state_changed",
  //       (snapchot) => {
  //         //takes a snap shot of the process as it is happening
  //         const progressbar = Math.round(
  //           (snapchot.bytesTransferred / snapchot.totalBytes) * 100
  //         );
  //         setProgress(progressbar);
  //       },
  //       //eroor function
  //       (e) => {
  //         alert(e.message);
  //       },
  //       () => {
  //         //success upload funciton
  //         storage
  //           .ref("images")
  //           .child(image.name) //Now we go get the img url
  //           .getDownloadURL()
  //           .then((url) => {
  //             //Now we post img Url inside DB
  //             db.collection("users")
  //               .doc(auth.uid)
  //               .collection("posts")
  //               .add({
  //                 timestamp: timestamp,
  //                 caption: caption,
  //                 imageUrl: url,
  //                 username: `${auth.FirstName} ${auth.LastName}`,
  //                 uid: auth.uid,
  //               })
  //               .then((post) => {
  //                 db.collection("allposts")
  //                   .doc(post.id)
  //                   .set({
  //                     timestamp: timestamp,
  //                     caption: caption,
  //                     imageUrl: url,
  //                     username: `${auth.FirstName} ${auth.LastName}`,
  //                     uid: auth.uid,
  //                     postId: post.id,
  //                   })
  //                   .then(() => {
  //                     dispatch({ type: "IMGPOSTED" });
  //                     setProgress(0);
  //                     setCaption("");
  //                     setImage(null);
  //                     setfile(null);
  //                     setposting(false);
  //                   });
  //               })
  //               .catch((e) => console.log(e));
  //           });
  //       }
  //     );
  //   } else {
  //     db.collection("users")
  //       .doc(auth.uid)
  //       .collection("posts")
  //       .add({
  //         timestamp: timestamp,
  //         caption: caption,
  //         username: `${auth.FirstName} ${auth.LastName}`,
  //         uid: auth.uid,
  //       })
  //       .then((post) => {
  //         db.collection("allposts")
  //           .doc(post.id)
  //           .set({
  //             timestamp: timestamp,
  //             caption: caption,
  //             username: `${auth.FirstName} ${auth.LastName}`,
  //             uid: auth.uid,
  //             postId: post.id,
  //           })
  //           .then(() => {
  //             dispatch({ type: "PLAINPOSTED" });
  //             setCaption("");
  //             setposting(false);
  //           })
  //           .catch((e) => dispatch({ type: "POSTERROR" }));
  //       })
  //       .catch((e) => console.log(e));
  //   }
  // };
  const handleUpload = (e) => {
    e.preventDefault();
    setposting(true);
    if (image) {
      const uploadTask = storage.ref(`/images/${image.name}`).put(image);
      uploadTask.on(
        "state_changed",
        (snapchot) => {
          //takes a snap shot of the process as it is happening
          const progressbar = Math.round(
            (snapchot.bytesTransferred / snapchot.totalBytes) * 100
          );
          setProgress(progressbar);
        },
        //eroor function
        (e) => {
          alert(e.message);
        },
        () => {
          db.collection("users")
            .doc(auth.uid)
            .get()
            .then((e) => {
              const hereitis = e.data().userImg;

              storage
                .ref("images")
                .child(image.name) //Now we go get the img url
                .getDownloadURL()
                .then((url) => {
                  //Now we post img Url inside DB
                  db.collection("allposts")
                    .add({
                      timestamp: timestamp,
                      caption: caption,
                      imageUrl: url,
                      username: `${auth.FirstName} ${auth.LastName}`,
                      uid: auth.uid,
                      userImg: hereitis,
                      Likes:0
                    })
                    .then((Current) => {
                      db.collection("allposts").doc(Current.id).update({
                        postId: Current.id,
                      });
                      dispatch({ type: "IMGPOSTED" });
                      setProgress(0);
                      setCaption("");
                      setImage(null);
                      setfile(null);
                      setposting(false);
                    });
                });
            });
          //success upload funciton
        }
      );
    } else {
      db.collection("users")
        .doc(auth.uid)
        .get()
        .then((e) => {
          const hereitis = e.data().userImg;

          db.collection("allposts")
            .add({
              timestamp: timestamp,
              caption: caption,
              username: `${auth.FirstName} ${auth.LastName}`,
              uid: auth.uid,
              userImg: hereitis,
              Likes:0
            })
            .then((ee) => {
              db.collection("allposts").doc(ee.id).update({
                postId: ee.id,
              });
              dispatch({ type: "IMGPOSTED" });
              setProgress(0);
              setCaption("");
              setImage(null);
              setfile(null);
              setposting(false);
            });
        });
    }
  };


  return (
    <div className="recentcontainer">
      <form onSubmit={handleUpload}>
        <ul className="newpostheader nav nav-tabs nav-justified">
          <li>
            <Link to="#">
              <i className="fa fa-pencil" />
              <span>Create a Post</span>
            </Link>
          </li>
          <li>
            <Link to="#">
              <i className="fa fa-book" />
              <span>Media Album</span>
            </Link>
          </li>
          <li>
            <Link to="#">
              <i className="fa fa-video-camera" />
              <span>Live Video</span>
            </Link>
          </li>
        </ul>
        <div className="newpost">
          <textarea
            className="yo"
            placeholder="Post Something..."
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
          />
        </div>
        <div className="">
          {file ? (
            <>
              <div className="previ" style={{ position: "relative" }}>
                <span onClick={() => setfile(null)}>x</span>
                <img alt={file} id="imgpreview" src={file} />
              </div>
              <progress
                className="imageupload__progress"
                value={progress}
                max="100"
              />
            </>
          ) : null}
        </div>
        <ul className="newpostfooter nav nav-tabs nav-justified">
          <li className="file_input_wrap">
            <label htmlFor="imageUpload1" className="btn1 btn-large1">
              Select file
            </label>
            <input
              type="file"
              name='"imageUpload"'
              id="imageUpload1"
              onChange={handleChange}
              className="hide"
            />
          </li>
          <li>
            <Link to="#">
              <i className="fa fa-smile-o" />
              <span>Feeling/Activity</span>
            </Link>
          </li>
          <li>
            {posting ? (
              <ul id="loading">
                <li className="loadbar"></li>
                <li className="loadbar"></li>
                <li className="loadbar"></li>
              </ul>
            ) : (
              <button type="submit" id="postIt">
                <i className="fas fa-paper-plane"></i>
              </button>
            )}
          </li>
        </ul>
      </form>
      {posts?.map((post) => {
        return <SinglePost key={post.postId} post={post} />;
      })}
    </div>
  );
};

export default ProfileFeed;
