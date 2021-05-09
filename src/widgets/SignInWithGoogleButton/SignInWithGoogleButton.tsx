import RoundButton from "components/RoundButton";
import React, { useCallback } from "react";
import firebase from "firebase";

interface IProps {
  onSuccess?: (credential: firebase.auth.UserCredential) => void;
}

const SignInWithGoogleButton: React.FC<IProps> = ({ onSuccess = () => {} }) => {
  const onSignIn = useCallback(async () => {
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().languageCode = "en";
      const credential = await firebase.auth().signInWithPopup(provider);
      onSuccess(credential);
    } catch (e) {
      alert("Có lỗi xảy ra!");
    }
  }, [onSuccess]);

  return (
    <>
      <RoundButton onClick={onSignIn} variant="outlined" fullWidth>
        Sign in with Google
      </RoundButton>
    </>
  );
};

export default SignInWithGoogleButton;
