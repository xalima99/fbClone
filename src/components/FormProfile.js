import React, { useState } from "react";
import { useParams } from "react-router-dom";
import db, { storage } from "../redux/firebase/firebase";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FormProfile = ({ profileInfos }) => {
  const [image, setImage] = useState("");
  const [progress, setProgress] = useState(0);
  const [posting, setposting] = useState(false);
  const [firstName, setfirstName] = useState(profileInfos.FirstName);
  const [lastName, setlastName] = useState(profileInfos.LastName);
  const [touched, settouched] = useState(false);
  const { id } = useParams();
  const dispatch = useDispatch();

  const handleChangeprofile = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };


  const handleUploadprofile = (e) => {
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
                  userImg: url,
                  FirstName: firstName,
                  LastName: lastName,
                })
                .then(() => {
                  db.collection('profilImgs').doc(id).set({
                    profileImg: url
                  })
                  db.collection("allposts")
                    .where("uid", "==", id)
                    .get()
                    .then((snapshots) => {
                      if (snapshots.size > 0) {
                        snapshots.forEach((post) => {
                          db.collection("allposts").doc(post.id).update({
                            userImg: url,
                            FirstName: firstName,
                      LastName: lastName
                          });
                        });
                      }
                    });
                  dispatch({
                    type: "UPDATE",
                    payload: {
                      userImg: url,
                      FirstName: firstName,
                      LastName: lastName,
                    },
                  });
                  setProgress(0);
                });
              toast.success("Profile successfully updated");
            });
        }
      );
    } else {
        
              //Now we post img Url inside DB
              db.collection("users")
                .doc(id)
                .update({
                  FirstName: firstName,
                  LastName: lastName,
                })
                .then(() => {
                  db.collection("allposts")
                    .where("uid", "==", id)
                    .get()
                    .then((snapshots) => {
                      if (snapshots.size > 0) {
                        snapshots.forEach((post) => {
                          db.collection("allposts").doc(post.id).update({
                           FirstName: firstName,
                      LastName: lastName
                          });
                        });
                      }
                    });
                  dispatch({
                    type: "UPDATE_INFOS",
                    payload: {
                      FirstName: firstName,
                      LastName: lastName,
                    },
                  });
                });
              toast.success("Profile successfully updated");
            
        
    }
  };

  return (
    <div className="container">
      <ToastContainer />
      <div className="card bg-light">
        <article className="card-body mx-auto" style={{ maxWidth: "400px" }}>
          <h4 className="card-title mt-3 text-center">Update Your Account</h4>
          <p className="text-center text-muted">*Upload an profile image</p>

          <form className="px-4" onSubmit={handleUploadprofile}>
            <div className="form-group text-center">
              {image ? (
                <progress
                  className="imageupload__progress"
                  value={progress}
                  max="100"
                />
              ) : null}
              <label htmlFor="imageUpload2" className="btn1 btn-large1">
                Select Image
              </label>
              <input
                type="file"
                name="imageUpload2"
                id="imageUpload2"
                onChange={handleChangeprofile}
                className="hide"
              />
            </div>
            <label className="text-muted">Update Your Name</label>
            <div className="form-group input-group">
            
              <div className="input-group-prepend">
                <span className="input-group-text">
                  {" "}
                  <i className="fa fa-user" />{" "}
                </span>
              </div>
              <input
                className="form-control cla"
                type="text"
                value={firstName}
                onChange={(e) => setfirstName(e.target.value)}
              />
            </div>{" "}
            {/* form-group end.// */}
            <div className="form-group input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  {" "}
                  <i className="fa fa-user" />{" "}
                </span>
              </div>
              <input
                className="form-control cla"
                type="text"
                value={lastName}
                onChange={(e) => setlastName(e.target.value)}
              />
            </div>{" "}
            {/* form-group end.// */}
            {/* form-group// */}
            <div className="form-group">
              <button
                type="submit"
                className="btn btn-primary btn-block"
              >
                {" "}
                Update Profile
              </button>
            </div>{" "}
            {/* form-group// */}
          </form>
        </article>
      </div>
    </div>
  );
};

export default FormProfile;