import React, {useState} from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import CustomInput from "../../components/CustomInput/CustomInput";
import CustomButton from "../../components/CustomButton/CustomButton";
import {useNavigation} from "@react-navigation/native";

const ConfirmEmailScreen = () => {
    const [code, setCode] = useState('');
    const navigation = useNavigation();

    const onConfirmPressed = () => {
        navigation.navigate("Home");
    }

    const onResendCodePressed = () => {
        console.warn("Resend code")
    }

    const onSignInPressed = () => {
        navigation.navigate("SignIn");
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Text style={styles.title}>Confirm your email</Text>

                <CustomInput
                    placeholder={"Enter your confirmation"}
                    value={code}
                    setValue={setCode}
                    secureTextEntry={false}
                />

                <CustomButton
                    text={"Confirm"}
                    onPress={onConfirmPressed}
                />

                <CustomButton
                    text={"Resend code"}
                    onPress={onResendCodePressed}
                    type={"SECONDARY"}
                />

                <CustomButton
                    text={"Back to Sign in"}
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

export default ConfirmEmailScreen;