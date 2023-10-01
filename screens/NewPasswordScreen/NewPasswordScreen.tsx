import React, {useState} from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import CustomInput from "../../components/CustomInput/CustomInput";
import CustomButton from "../../components/CustomButton/CustomButton";
import {useNavigation} from "@react-navigation/native";

const NewPasswordScreen = () => {
    const [code, setCode] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const navigation = useNavigation();

    const onSubmitPressed = () => {
        navigation.navigate("Home");
    }

    const onSignInPressed = () => {
        navigation.navigate("SignIn");
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Text style={styles.title}>Reset your password</Text>

                <CustomInput
                    placeholder={"Code"}
                    value={code}
                    setValue={setCode}
                    secureTextEntry={false}
                />

                <CustomInput
                    placeholder={"Enter your new password"}
                    value={newPassword}
                    setValue={setNewPassword}
                    secureTextEntry={false}
                />

                <CustomButton
                    text={"Submit"}
                    onPress={onSubmitPressed}
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

export default NewPasswordScreen;