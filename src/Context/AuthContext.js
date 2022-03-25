import React, { useContext, useState, useEffect } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { useHistory } from "react-router-dom";

const AuthContext = React.createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {

    const auth = firebase.auth();

    const [isNewUser,setIsNewUser] = useState(false);
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true)
    const history = useHistory();

    function loginWithGoogle() {

    // ! Using a popup.
    var provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('profile');
    provider.addScope('email');
    firebase.auth().signInWithPopup(provider).then(function(result) {
        // ! This gives you a Google Access Token.
        var token = result.credential.accessToken;

        // ! Checking wheather new user to create intial documents
        setIsNewUser(result.additionalUserInfo.isNewUser)

        console.log("Check " + result.additionalUserInfo.isNewUser);
        console.log("Authenticated");
        var user = result.user;
        if(user){
        history.push("/");
        }
        });
    }


    function signup(email, password) {
        auth.createUserWithEmailAndPassword(email, password)
        .then(function(result){
        console.log(result.additionalUserInfo.isNewUser);
        history.push("/");
        })
    }

    function login(email, password) {
        return auth.signInWithEmailAndPassword(email, password)
    }

    function logout() {
        return auth.signOut()
    }

    function resetPassword(email) {
        return auth.sendPasswordResetEmail(email);
    }

    function updateEmail(email) {
        return currentUser.updateEmail(email);
    }

    function updatePassword(password) {
        return currentUser.updatePassword(password);
    }




    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
        setCurrentUser(user);
        setLoading(false);
        })
        return unsubscribe;
    }, [currentUser,history])

    const value = {
        isNewUser,
        currentUser,
        loginWithGoogle,
        signup,
        login,
        logout,
        resetPassword,
        updateEmail,
        updatePassword
    }

    return (
        <AuthContext.Provider value={value}>
        { !loading && children }
        </AuthContext.Provider>
    )
}