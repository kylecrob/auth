import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

interface CustomInputProps {
    value: string;
    setValue: (text: string) => void;
    placeholder: string;
    secureTextEntry: boolean;
}

const CustomInput: React.FC<CustomInputProps> = ({value, setValue, placeholder, secureTextEntry}) => {
    return (
        <View style={styles.container}>
            <TextInput
                value={value}
                onChangeText={setValue}
                placeholder={placeholder}
                style={styles.input}
                secureTextEntry={secureTextEntry}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: 300,
        height: 50,
        borderColor: '#e8e8e8',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginVertical: 5
    },
    input: {}
})

export default CustomInput;