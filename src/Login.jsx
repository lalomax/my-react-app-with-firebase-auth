import { useState } from "react";
import { auth } from "./firebase";
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [notice, setNotice] = useState("");

  const loginWithUsernameAndPassword = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("./profile");
    } catch {
      setNotice("You entered a wrong username or password.");
    }
  };

  const googleProvider = new GoogleAuthProvider();

const handleLoginWithGoogle = async () => {
  try {
    await signInWithPopup(auth, googleProvider);
    navigate("./profile");
  } catch (e) {
    alert(e.message);
  }
};

  return (
    <div className="container">
      <div className="flex justify-center ">
        <form className="col-md-4 mt-3 pt-3 pb-3">
          {"" !== notice && (
            <div className="alert alert-warning" role="alert">
              {notice}
            </div>
          )}
          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>
          <div className="form-floating mb-3">
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </div>
          <div className="w-full">
            <button
              type="submit"
              className="text-white bg-violet-600 px-4 rounded-md"
              onClick={(e) => loginWithUsernameAndPassword(e)}
            >
              Submit
            </button>
            <button type="button" onClick={handleLoginWithGoogle} >
            
              Google
            </button>
          </div>
          <div className="mt-3 text-center">
            <span>
              Need to sign up for an account?{" "}
              <Link to="./signup">Click here.</Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
