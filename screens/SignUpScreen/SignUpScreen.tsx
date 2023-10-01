import React, {useState} from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import CustomInput from "../../components/CustomInput/CustomInput";
import CustomButton from "../../components/CustomButton/CustomButton";
import SocialSignInButtons from "../../components/SocialSignInButtons/SocialSignInButtons";
import {useNavigation} from "@react-navigation/native";

const SignUpScreen = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');
    const navigation = useNavigation();
    const onRegisterPressed = () => {
        navigation.navigate("ConfirmEmail");
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

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Text style={styles.title}>Create an account</Text>

                <CustomInput
                    placeholder={"Username"}
                    value={username}
                    setValue={setUsername}
                    secureTextEntry={false}
                />

                <CustomInput
                    placeholder={"Email"}
                    value={email}
                    setValue={setEmail}
                    secureTextEntry={false}
                />

                <CustomInput
                    placeholder={"Password"}
                    value={password}
                    setValue={setPassword}
                    secureTextEntry={true}
                />

                <CustomInput
                    placeholder={"Repeat Password"}
                    value={passwordRepeat}
                    setValue={setPasswordRepeat}
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