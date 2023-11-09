import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import Navigation from "./navigation";
import {Provider} from 'react-redux';
import store from './store';

const App = () => {
    return (
        <Provider store={store}>
            <SafeAreaView style={styles.container}>
                <Navigation/>
            </SafeAreaView>
        </Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9fbfc',
    },
});

export default App;
