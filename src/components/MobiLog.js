import React, { useState, useEffect } from "react";
import { logIn } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MobiLog = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, seterror] = useState(false);
  const [displayError, setdisplayError] = useState("");
  const errorMessage = useSelector((state) => state.auth.loginErr);

  const onLogIn = (e) => {
    e.preventDefault();
    dispatch(logIn({ email: email, password: password }));
  };

  useEffect(() => {
    if (errorMessage) {
      seterror(true);
      setdisplayError(
        errorMessage.message ? errorMessage.message : errorMessage
      );
    }
  }, [errorMessage]);

  useEffect(() => {
    if (error) {
      toast.error(displayError, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    setPassword("");
  }, [error]);
  return (
    <div className="mobmaindiv">
      <form onSubmit={onLogIn}>
        <div id="mobtextdiv">
          <input
            className="logintext loginfield"
            type="email"
            name="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="logintext loginrowgap loginfield"
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mobloginbuttondiv">
          <input
            type="submit"
            className="mobloginbutton"
            defaultValue="Log In"
          />
        </div>
      </form>
      <div id="ordiv">
        <span id="or">or</span>
      </div>
      <div id="mobcreatediv">
        <button id="mobcreate">Create New Account</button>
      </div>
      <div className="mobforgotpw">
        <a href="#">Forgotten password?</a>
        <span>·</span>
        <a href="#">Help Center</a>
      </div>
      <ToastContainer />
    </div>
  );
};

export default MobiLog;
