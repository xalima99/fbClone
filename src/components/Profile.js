import React, { useEffect, useState } from "react";
import Layout from "./Layout";
import { useParams } from "react-router-dom";
import db, { storage, timestamp } from "../redux/firebase/firebase";
import ProfileFeed from "./ProfileFeed";
import FormProfile from "./FormProfile";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addFriend, unfriend } from "../redux/actions";

const Profile = () => {
  const { id } = useParams();
  const [profileInfos, setprofileInfoss] = useState([]);
  const [infosLoading, setinfosLoading] = useState(true);
  const coverImg = useSelector((state) => state.auth.coverImg);
  const authuid = useSelector((state) => state.auth.uid);
  const auth = useSelector((state) => state.auth);
  const [ownPost, setownPost] = useState([]);
  const [image, setImage] = useState("");
  const [progress, setProgress] = useState(0);
  const dispatch = useDispatch();
  const [send, setsend] = useState(false);
  const [alreadyFriend, setalreadyFriend] = useState(null);

  const [cover, setcover] = useState(
    "https://tokystorage.s3.amazonaws.com/images/default-cover.png"
  );
  const own = [];

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleUpload = (e) => {
    e.preventDefault();

    if (image) {
      dispatch({ type: "COVERING_CHANGE" });
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
        (e) => {
          alert(e.message);
        },
        () => {
          //success upload funciton
          storage
            .ref("images")
            .child(image.name) //Now we go get the img url
            .getDownloadURL()
            .then((url) => {
              //Now we post img Url inside DB
              db.collection("users")
                .doc(id)
                .update({
                  coverImg: url,
                })
                .then(() => {
                  dispatch({
                    type: "UPDATE_COVER",
                    payload: {
                      coverImg: url,
                    },
                  });
                  // window.setTimeout(() => {
                  //   window.location.reload();
                  // }, 4000);
                });
              toast.success("Cover updated, page will reload in 5 seconds");
              setProgress(0);

              setImage(null);
            });
        }
      );
    }
  };

  useEffect(() => {
    db.collection("users")
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          setprofileInfoss(doc.data());
        }

        db.collection("allposts")
          .orderBy("timestamp", "desc")
          .get()
          .then((items) => {
            items.docs.map((item) => {
              let uid = item.data().uid;
              if (uid === id) {
                own.push(item.data());
              }
            });
            setownPost(own.map((el) => el));
          })
          .then(() => {
            if (id !== authuid) {
          
              db.collection("users")
                .doc(authuid)
                .collection("friends")
                .doc(id)
                .get()
                .then((item) => {
                  if (item.exists) {
                   
                    setalreadyFriend(true);
                  } else {
              
                    setalreadyFriend(false);
                  }
                 
                });
            }
          });
          setTimeout(() => {
            setinfosLoading(false)
          }, 800);
        
      });
  }, [id]);

  const addHim = () => {
    dispatch(
      addFriend({
        source: authuid,
        target: id,
        name: `${auth.FirstName} ${auth.LastName}`,
        userImg: auth.userImg,
      })
    );
    setsend(true);
  };

  const onUnfriend = () => {
    dispatch(
      unfriend({
        source: authuid,
        target: id
      })
    );
  }

  return (
    <div>
      <Layout>
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
            <div className="">
              <div
                className="jumbotron jumbotron-fluid"
                style={{
                  background: profileInfos.coverImg
                    ? `url(${profileInfos.coverImg}) center center fixed`
                    : `url(${cover})`,
                  backgroundSize: "cover",
                  objectFit: "cover",
                }}
              >
                <div className="container">
                  <img
                    src={
                      profileInfos.userImg
                        ? profileInfos.userImg
                        : "https://pbs.twimg.com/profile_images/831173492968140804/43M7c5j_.jpg"
                    }
                    className="mb-4"
                    style={{
                      width: "250px",
                      height: "250px",
                      objectFit: "cover",
                      objectPosition: "center",
                      border: "10px solid #fff",
                    }}
                  />
                  <h1 className="display-4 proInfos">{`${profileInfos?.FirstName} ${profileInfos?.LastName}`}</h1>
                  <p className="lead smInfos">
                    Member since :{" "}
                    {new Date(profileInfos.createdAt?.toDate()).toUTCString()}
                  </p>
                  {id !== authuid ? (
                    alreadyFriend ? (
                      <button style={{cursor:"pointer"}}
                        type="button"
                        className="btn btn-danger btn-sm mt-2"
                        onClick={onUnfriend}
                      >
                       Unfriend
                      </button>
                    ) : send ? (
                      <button
                        type="button"
                        className="btn btn-success btn-lg mt-2"
                        disabled
                      >
                        REQUEST SENT
                      </button>
                    ) : (
                      <button
                        type="button"
                        className="btn btn-success btn-lg mt-2"
                        onClick={addHim}
                      >
                        <i class="fas fa-user-plus"></i> ADD FRIEND
                      </button>
                    )
                  ) : null}
                </div>
                {authuid === id ? (
                  <form>
                    <div className="form-group text-center imga">
                      {image ? (
                        <progress
                          className="imageupload__progress"
                          value={progress}
                          max="100"
                        />
                      ) : null}
                      <label
                        htmlFor="imageUpload"
                        className="btn btn-info btn-large"
                      >
                        UPDATE COVER PICTURE
                      </label>
                      <input
                        type="file"
                        name='"imageUpload"'
                        id="imageUpload"
                        onChange={handleChange}
                        className="hide"
                      />
                      {image ? (
                        <div className="">
                          <button
                            className="btn btn-sm btn-success"
                            type="submit"
                            onClick={handleUpload}
                          >
                            ENVOYER
                          </button>
                        </div>
                      ) : null}
                    </div>
                  </form>
                ) : null}
              </div>
            </div>
            <div className="row">
              <div className="col-md-8">
                <h3>Posts Published by {profileInfos?.FirstName}</h3>
                <div className="feedprofile">
                  <ProfileFeed posts={ownPost} />
                </div>
              </div>
              <div className="col-md-4">
                {authuid === id ? (
                  <FormProfile profileInfos={profileInfos} />
                ) : null}
                <div className="jumbotron mx-3">
                  <div className="text-center mb-4 pb-4">
                    <h4>{profileInfos?.FirstName}'s Infos</h4>
                  </div>
                  <p>
                    <strong>Status :</strong>{" "}
                    {profileInfos?.isOnline ? (
                      <>
                        <i
                          class="fas fa-globe-europe"
                          style={{ color: "green" }}
                        ></i>{" "}
                        Online
                      </>
                    ) : (
                      <>
                        <i
                          class="fas fa-globe-europe"
                          style={{ color: "red" }}
                        ></i>{" "}
                        Offline
                      </>
                    )}
                  </p>
                  <p>
                    <strong>Email :</strong> {profileInfos?.email}
                  </p>
                  <p>
                    <strong>BirthDay :</strong> {profileInfos?.birthday}
                  </p>
                  <p>
                    <strong>Gender :</strong> {profileInfos?.Gender}
                  </p>
                </div>
              </div>
            </div>
          </>
        )}
      </Layout>
    </div>
  );
};

export default Profile;
