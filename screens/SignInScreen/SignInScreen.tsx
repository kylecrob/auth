import React, {useState} from 'react';
import {View, Image, StyleSheet, useWindowDimensions, ScrollView} from 'react-native';
import Logo from "../../assets/logo.png";
import CustomInput from "../../components/CustomInput/CustomInput";
import CustomButton from "../../components/CustomButton/CustomButton";
import SocialSignInButtons from "../../components/SocialSignInButtons";
import {useNavigation} from "@react-navigation/native";

const SignInScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const {height} = useWindowDimensions();
    const navigation = useNavigation();
    const onSignInPressed = () => {
        // TODO: Validate user

        navigation.navigate('Home');
    }
    const onForgotPasswordPressed = () => {
        navigation.navigate('ForgotPassword')
    }

    const onSignUpPressed = () => {
        navigation.navigate('SignUp');
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Image
                    source={Logo}
                    style={[styles.logo, {height: height * 0.2}]}
                    resizeMode={"contain"}
                />

                <CustomInput
                    placeholder={"Username"}
                    value={username}
                    setValue={setUsername}
                    secureTextEntry={false}
                />
                <CustomInput
                    placeholder={"Password"}
                    value={password}
                    setValue={setPassword}
                    secureTextEntry={true}
                />

                <CustomButton
                    text={"Sign In"}
                    onPress={onSignInPressed}
                />

                <CustomButton
                    text={"Forgot Password?"}
                    onPress={onForgotPasswordPressed}
                    type={"TERTIARY"}
                />

                <SocialSignInButtons/>

                <CustomButton
                    text={"Don't have an account? Create one"}
                    onPress={onSignUpPressed}
                    type={"TERTIARY"}
                />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20
    },
    logo: {
        maxWidth: 300,
        maxHeight: 200
    }
});

export default SignInScreen;