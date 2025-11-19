import React, { useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import { AuthContext } from "./Context";

const Provider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Registration
  const registration = (name, email, photoURL, password) => {
    return createUserWithEmailAndPassword(auth, email, password).then(
      (userCredential) => {
        const currentUser = userCredential.user;
        return updateProfile(currentUser, { displayName: name, photoURL }).then(
          () => currentUser
        );
      }
    );
  };

  // Login
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Logout
  const logout = () => {
    return signOut(auth);
  };

  // Google Login
  const googleLogin = () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };

  // Forget Password
  const forgetPassword = (email) => {
    if (!email) return Promise.reject(new Error("Please enter your email"));
    return sendPasswordResetEmail(auth, email);
  };

  // Firebase auth observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const authData = {
    user,
    loading,
    registration,
    login,
    logout,
    googleLogin,
    forgetPassword,
  };

  return <AuthContext value={authData}>{children}</AuthContext>;
};

export default Provider;
