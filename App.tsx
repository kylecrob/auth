import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import Navigation from "./navigation";

const App = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Navigation/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9fbfc',
    },
});

export default App;
