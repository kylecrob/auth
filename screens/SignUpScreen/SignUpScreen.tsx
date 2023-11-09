import React, {useState} from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import CustomInput from "../../components/CustomInput/CustomInput";
import CustomButton from "../../components/CustomButton/CustomButton";
import SocialSignInButtons from "../../components/SocialSignInButtons/SocialSignInButtons";
import {useNavigation} from "@react-navigation/native";
import store from "../../store";
import {setUsername, setEmail, setPassword} from "../../actions";

const SignUpScreen = () => {
    const [username, setUsernameLocal] = useState('');
    const [email, setEmailLocal] = useState('');
    const [password, setPasswordLocal] = useState('');
    const [passwordRepeat, setPasswordRepeatLocal] = useState('');
    const navigation = useNavigation();
    const onRegisterPressed = () => {
        store.dispatch(setUsername(username));
        store.dispatch(setEmail(email));
        store.dispatch(setPassword(password));
        navigation.navigate("SignIn");
    }

    const onSignInPressed = () => {
        navigation.navigate("SignIn");
    }
    const onTermsOfUsePressed = () => {
        console.warn("Terms of Use")
    }
    const onPrivacyPolicyPressed = () => {
        console.warn("Privacy Policy")
    }

    const unsubscribe = store.subscribe(() => {
        console.log("Store changed!", store.getState());
    })

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Text style={styles.title}>Create an account</Text>

                <CustomInput
                    placeholder={"Username"}
                    value={username}
                    setValue={setUsernameLocal}
                    secureTextEntry={false}
                />

                <CustomInput
                    placeholder={"Email"}
                    value={email}
                    setValue={setEmailLocal}
                    secureTextEntry={false}
                />

                <CustomInput
                    placeholder={"Password"}
                    value={password}
                    setValue={setPasswordLocal}
                    secureTextEntry={true}
                />

                <CustomInput
                    placeholder={"Repeat Password"}
                    value={passwordRepeat}
                    setValue={setPasswordRepeatLocal}
                    secureTextEntry={true}
                />

                <CustomButton
                    text={"Register"}
                    onPress={onRegisterPressed}
                />

                <Text style={styles.text}>
                    By registering, you confirm that you accept our{' '}
                    <Text style={styles.link} onPress={onTermsOfUsePressed}>Terms of Use</Text> and{' '}
                    <Text style={styles.link} onPress={onPrivacyPolicyPressed}>Privacy Policy</Text>
                </Text>

                <SocialSignInButtons/>

                <CustomButton
                    text={"Have an account? Sign in"}
                    onPress={onSignInPressed}
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
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#051c60',
        margin: 10
    },
    text: {
        color: 'grey',
        marginVertical: 10,
    },
    link: {
        color: "#fd8075"
    }
});

export default SignUpScreen;