import React from 'react';
import CustomButton from "../CustomButton";

const SocialSignInButtons = () => {
    const onSignInWithFacebook = () => {
        console.warn("facebook");
    }
    const onSignInWithGoogle = () => {
        console.warn("google");
    }
    const onSignInWithApple = () => {
        console.warn("apple");
    }

    return (
        <>
            <CustomButton
                text={"Sign In with Facebook"}
                onPress={onSignInWithFacebook}
                bgColor={"#e7eaf4"}
                fgColor={"#4765a9"}
            />

            <CustomButton
                text={"Sign In with Google"}
                onPress={onSignInWithGoogle}
                bgColor={"#fae9ea"}
                fgColor={"#dd4d44"}
            />

            <CustomButton
                text={"Sign In with Apple"}
                onPress={onSignInWithApple}
                bgColor={"#e3e3e3"}
                fgColor={"#363636"}
            />
        </>
    )
}

export default SocialSignInButtons;