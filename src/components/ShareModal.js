import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import db, { storage } from "../redux/firebase/firebase";
import { hideModal } from "../redux/actions";

const ModalEdit = () => {
  const modal = useSelector((state) => state.modal);
  const [image, setImage] = useState("");
  const [progress, setProgress] = useState(0);
  const [isImage, setisImage] = useState(true);
  const [postId, setpostId] = useState("");
  const [text, settext] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    settext(modal.post.caption);
    if (modal.post.imageUrl) {
      setisImage(true);
    }

    if (modal.post.postId) {
      setpostId(modal.post.postId);
    }

    return () => {
      settext("");
      setImage("");
      setisImage(false);
      setpostId("");
    };
  }, [modal]);

  const handleClose = () => {
    dispatch({ type: "HIDE" });
  };

  const handleChangeEdit = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleUpdate = (e) => {
    e.preventDefault();

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
          storage
            .ref("images")
            .child(image.name) //Now we go get the img url
            .getDownloadURL()
            .then((url) => {
              //Now we post img Url inside DB
              db.collection("allposts").doc(postId).update({
                caption: text,
                imageUrl: url,
              });

              dispatch({ type: "HIDE" });
            });

          //success upload funciton
        }
      );
    } else {
      db.collection("allposts").doc(postId).update({
        caption: text,
      });

      dispatch({ type: "HIDE" });
    }
  };

  return (
    <>
      <Modal show={modal.modal} onHide={handleClose}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleUpdate}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label className="text-muted">
                Modifiez le text de vitre post
              </Form.Label>
              <Form.Control
                className="font-weight-bold border"
                type="text"
                value={text}
                onChange={(e) => settext(e.target.value)}
                autoComplete="off"
                style={{ borderBottom: "1px solid gray" }}
              />
              {isImage ? (
                <div className="text-center">
                  <img className="modalimg m-2" src={modal.post.imageUrl} />
                </div>
              ) : null}
            </Form.Group>

            <div className="form-group text-center imga">
              {image ? (
                <progress
                  className="imageupload__progress"
                  value={progress}
                  max="100"
                />
              ) : null}
              <label htmlFor="imageUpload2" className="btn1 btn-large1">
                {isImage ? "Modify Image" : "Add image to your post"}
              </label>
              <input
                type="file"
                name="imageUpload2"
                id="imageUpload2"
                onChange={handleChangeEdit}
                className="hide"
              />
            </div>

            <div className="text-center">
              <Button variant="primary" type="submit">
                Modifier
              </Button>
              <Button
                variant="info"
                type="submit"
                className="ml-3"
                oncClick={() => dispatch({ type: "HIDE" })}
              >
                Annuler
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalEdit;
