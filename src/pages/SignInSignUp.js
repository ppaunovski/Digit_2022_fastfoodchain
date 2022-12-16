import { useContext, useEffect, useState } from "react";
import { auth } from "../firebase.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import {
  doc,
  getDoc,
  setDoc,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { signInShowContext } from "../App";
import "../styles/Buttons.css";

const signed = async (
  auth,
  name,
  surname,
  username,
  email,
  password,
  db,
  changeState
) => {
  try {
    if (username) {
      const q = query(
        collection(db, "users"),
        where("username", "==", username)
      );
      const docSnap = await getDocs(q);

      if (docSnap.empty) {
        await createUserWithEmailAndPassword(auth, email, password);
        setDoc(doc(db, "users", auth.currentUser.uid), {
          username: username,
          name: name,
          surname: surname,
        }).catch((e) => console.log(e));
        changeState("SignIn");
      } else {
        console.log("Username is already in use.");
      }
    } else {
      console.log("Username not entered");
    }
  } catch (e) {
    console.log(e);
  }
};

const logged = async (auth, email, password, db, changeAuth) => {
  if (email && password) {
    try {
      const userInfo = await signInWithEmailAndPassword(auth, email, password);
      //console.log(userInfo.user.uid);
      const document = await getDoc(doc(db, "users", userInfo.user.uid));
      console.log(document.data());
      window.localStorage.setItem("uid", userInfo.user.uid);
      window.localStorage.setItem("token", userInfo.user.accessToken);
      window.localStorage.setItem("name", document.data().name);
      window.localStorage.setItem("surname", document.data().surname);
      window.localStorage.setItem("username", document.data().username);
      //window.localStorage.setItem("username", userInfo.user.email);
      //console.log(window.localStorage.getItem("token"));
      if (auth) {
        const user = (
          await getDoc(doc(db, "users", auth.currentUser.uid))
        ).data();
        changeAuth(true);
      }
    } catch (e) {
      console.log(e);
    }
  } else {
    console.log("Enter email and password");
  }
};

const StartPage = (props) => {
  const [state, changeState] = useState(false);
  const navigate = useNavigate();
  const { signInShow, setSignInShow } = useContext(signInShowContext);
  if (window.localStorage.getItem("token")) {
    console.log("IMA USERRRRRRRRRRRRRRRR");
  }
  useEffect(() => {
    //console.log("TESTTTTTTTTTTTTTTT", signInShow);
    changeState(false);
  }, [signInShow]);

  return (
    <div id="centerDiv1" className="showOnTop">
      {!state && (
        <div className="signDiv">
          <input
            type="checkbox"
            checked={props.signInShow}
            id="my-modal"
            className="modal-toggle "
          />
          <div className="modal">
            <div className="modal-box relative">
              <h2
                className="absolute right-7 top-5 cursor-pointer"
                onClick={() => props.setSignInShow(false)}
              >
                X
              </h2>
              <img
                className="w-50"
                src={
                  "https://firebasestorage.googleapis.com/v0/b/digit-2022.appspot.com/o/sweetster.png?alt=media&token=6dba84bb-73dc-44d5-b9e6-b4dc676ea93f"
                }
                alt="logo"
              ></img>
              <div className="flex gap-3 justify-center">
                <button
                  className="btn pinkButton"
                  onClick={() => changeState("SignIn")}
                >
                  Sign In
                </button>
                <button
                  className="btn pinkButton"
                  onClick={() => changeState("SignUp")}
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {state === "SignIn" && (
        <div className="signDiv">
          <input
            type="checkbox"
            checked={props.signInShow}
            id="my-modal"
            className="modal-toggle"
          />
          <div className="modal">
            <div className="modal-box">
              <h2
                className="absolute left-8 top-4 cursor-pointer"
                onClick={() => changeState(false)}
              >
                &lt;
              </h2>
              <h2
                className="absolute right-8 top-4 cursor-pointer"
                onClick={() => props.setSignInShow(false)}
              >
                X
              </h2>
              <div className="flex flex-col gap-2 mt-7">
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Username"
                    className="input input-bordered w-full max-w-xs"
                    id="usernameInput"
                  />
                  <input
                    type="text"
                    placeholder="E-mail"
                    className="input input-bordered w-full max-w-xs"
                    id="emailInput"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Password"
                  className="input input-bordered w-full"
                  id="passwordInput"
                />
                <button
                  className="btn pinkButton"
                  onClick={() => {
                    logged(
                      auth,
                      document.getElementById("emailInput").value,
                      document.getElementById("passwordInput").value,
                      props.db,
                      props.changeAuth
                    );
                    props.setSignInShow(false);
                  }}
                >
                  Sign In
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {state === "SignUp" && (
        <div className="signDiv">
          <input
            type="checkbox"
            checked={props.signInShow}
            id="my-modal"
            className="modal-toggle"
          />
          <div className="modal">
            <div className="modal-box">
              <h2
                className="absolute left-8 top-3 cursor-pointer"
                onClick={() => changeState(false)}
              >
                &lt;
              </h2>
              <h2
                className="absolute right-8 top-3 cursor-pointer"
                onClick={() => props.setSignInShow(false)}
              >
                X
              </h2>
              <div className="flex flex-col gap-2 mt-5">
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Name"
                    className="input input-bordered w-full max-w-xs"
                    id="nameInput"
                  />
                  <input
                    type="text"
                    placeholder="Surname"
                    className="input input-bordered w-full max-w-xs"
                    id="surnameInput"
                  />
                </div>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Username"
                    className="input input-bordered w-full max-w-xs"
                    id="usernameInput"
                  />
                  <input
                    type="text"
                    placeholder="E-mail"
                    className="input input-bordered w-full max-w-xs"
                    id="emailInput"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Password"
                  className="input input-bordered w-full"
                  id="passwordInput"
                />
                <button
                  className="btn pinkButton"
                  onClick={() => {
                    signed(
                      auth,
                      document.getElementById("nameInput").value,
                      document.getElementById("surnameInput").value,
                      document.getElementById("usernameInput").value,
                      document.getElementById("emailInput").value,
                      document.getElementById("passwordInput").value,
                      props.db,
                      changeState
                    );
                  }}
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StartPage;
