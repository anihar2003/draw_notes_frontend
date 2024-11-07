// AuthButtons.js
import React from "react";
import { googleSignIn, signUpWithEmailPassword, loginWithEmailPassword } from "../../config/firebase.js";

const AuthButtons = () => {
    const handleGoogleSignIn = async () => {
        try {
            const result = await googleSignIn();
            console.log("Google User:", result.user);
        } catch (error) {
            console.error("Google Sign-In Error:", error);
        }
    };

    const handleEmailSignUp = async () => {
        try {
            const email = prompt("Enter your email:");
            const password = prompt("Enter your password:");
            const result = await signUpWithEmailPassword(email, password);
            console.log("Signed Up User:", result.user);
        } catch (error) {
            console.error("Email Signup Error:", error);
        }
    };

    const handleEmailLogin = async () => {
        try {
            const email = prompt("Enter your email:");
            const password = prompt("Enter your password:");
            const result = await loginWithEmailPassword(email, password);
            console.log("Logged In User:", result.user);
        } catch (error) {
            console.error("Email Login Error:", error);
        }
    };

    return (
        <div>
            <button onClick={handleGoogleSignIn}>Sign In with Google</button>
            <button onClick={handleEmailSignUp}>Sign Up with Email</button>
            <button onClick={handleEmailLogin}>Log In with Email</button>
        </div>
    );
};

export default AuthButtons;
