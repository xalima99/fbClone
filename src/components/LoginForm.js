import React, { useState, useEffect } from "react";
import { logIn } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import fblogo from "../assets/imgs/homelogo.png";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const LoginForm = () => {
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
    if(error){
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
    setPassword('')
  }, [error]);

  return (
    <div>
    <ToastContainer/>
      <header id="yo">
        
        <div className="headersubdiv">
          <div className="loginform">
            {/* {error ? <ErrorAlert message={displayError} /> : null} */}
            <form onSubmit={onLogIn}>
              <table>
                <tbody>
                  <tr>
                    <td>
                      <input
                        className="logintext loginfield"
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </td>
                    <td>
                      <input
                        className="logintext loginrowgap loginfield"
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </td>
                    <td>
                      <button
                        type="submit"
                        className="loginrowgap"
                        id="loginbutton"
                      >
                        Se connecter
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td />
                    <td>
                      <a
                        href="#"
                        className="logintext loginrowgap"
                        id="forgotpw"
                      >
                        Forgotten account?
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </form>
          </div>
        </div>
      </header>
    </div>
  );
};

export default LoginForm;
