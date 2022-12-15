import { useEffect, useState } from 'react';
import { auth } from '../firebase.js';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { doc, getDoc, setDoc, collection, getDocs, query, where } from 'firebase/firestore';
import { useNavigate } from "react-router-dom";

const signed = async (auth, username, email, password, db, changeState) => {
    try {
        if (username) {
            const q = query(collection(db, "users"), where("username", "==", username));
            const docSnap = await getDocs(q);

            if (docSnap.empty) {
                await createUserWithEmailAndPassword(auth, email, password);
                setDoc(doc(db, "users", auth.currentUser.uid), { username: username }).catch(e => console.log(e));
                changeState("SignIn");
            }
            else {
                console.log("Username is already in use.");
            }
        }
        else {
            console.log("Username not entered");
        }
    }
    catch (e) {
        console.log(e);
    }
}

const logged = async (auth, email, password, db, changeAuth) => {
    if (email && password) {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            if (auth) {
                const user = (await getDoc(doc(db, "users", auth.currentUser.uid))).data();
                changeAuth(true);
            }
        }
        catch (e) {
            console.log(e);
        }
    }
    else {
        console.log("Enter email and password");
    }
}

const StartPage = (props) => {
    const [state, changeState] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        changeState(false);
    }, [props.signInShow])

    return (
        <div id="centerDiv1">
            {!state &&
                <div className="signDiv">
                    <input type="checkbox" checked={props.signInShow} id="my-modal" className="modal-toggle" />
                    <div className="modal">
                        <div className="modal-box relative">
                            <h2 className="absolute right-7 top-5 cursor-pointer" onClick={() => props.setSignInShow(false)}>X</h2>
                            <img className="w-50" src={"https://firebasestorage.googleapis.com/v0/b/digit-2022.appspot.com/o/sweetster.png?alt=media&token=6dba84bb-73dc-44d5-b9e6-b4dc676ea93f"} alt="logo"></img>
                            <div className="flex gap-3 justify-center">
                                <button className="btn" onClick={() => changeState('SignIn')}>Sign In</button>
                                <button className="btn" onClick={() => changeState('SignUp')}>Sign Up</button>
                            </div>
                        </div>
                    </div>
                </div>
            }
            {(state === 'SignIn') &&
                <div className="signDiv">
                    <input type="checkbox" checked={props.signInShow} id="my-modal" className="modal-toggle" />
                    <div className="modal">
                        <div className="modal-box">
                            <h2 className="absolute left-8 top-4 cursor-pointer" onClick={() => changeState(false)}>&lt;</h2>
                            <h2 className="absolute right-8 top-4 cursor-pointer" onClick={() => props.setSignInShow(false)}>X</h2>
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
                                <button className="btn" onClick={() => {
                                    logged(auth, document.getElementById("emailInput").value, document.getElementById("passwordInput").value, props.db, props.changeAuth);
                                    props.setSignInShow(false);
                                }
                                }>Sign In</button>
                            </div>
                        </div>
                    </div>
                </div>
            }
            {(state === "SignUp") &&
                <div className="signDiv">
                    <input type="checkbox" checked={props.signInShow} id="my-modal" className="modal-toggle" />
                    <div className="modal">
                        <div className="modal-box">
                            <h2 className="absolute left-8 top-3 cursor-pointer" onClick={() => changeState(false)}>&lt;</h2>
                            <h2 className="absolute right-8 top-3 cursor-pointer" onClick={() => props.setSignInShow(false)}>X</h2>
                            <div className="flex flex-col gap-2 mt-5">
                                <div className="flex gap-2">
                                    <input
                                        type="text"
                                        placeholder="Name"
                                        className="input input-bordered w-full max-w-xs"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Surname"
                                        className="input input-bordered w-full max-w-xs"
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
                                <button className="btn" onClick={() => {
                                    signed(auth, document.getElementById("usernameInput").value, document.getElementById("emailInput").value,
                                        document.getElementById("passwordInput").value, props.db, changeState)
                                }}>Sign Up</button>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default StartPage;