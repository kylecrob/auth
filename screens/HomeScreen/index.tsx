import React from 'react';
import {View, Text} from 'react-native';
import {useSelector} from 'react-redux';

const Index = () => {
    const username = useSelector((state: { username: string; }) => state.username);
    const email = useSelector((state: { email: string; }) => state.email);
    const password = useSelector((state: { password: string; }) => state.password);

    return (
        <View>
            <Text style={{
                fontSize: 24,
                alignSelf: 'center',
            }}>Home</Text>

            <Text style={{
                fontSize: 18,
                alignSelf: 'center',
            }}>Username: {username}</Text>

            <Text style={{
                fontSize: 18,
                alignSelf: 'center',
            }}>Email: {email}</Text>

            <Text style={{
                fontSize: 18,
                alignSelf: 'center',
            }}>Password: {password}</Text>
        </View>
    )
}

export default Index;