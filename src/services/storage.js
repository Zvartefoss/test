import AsyncStorage from '@react-native-async-storage/async-storage';

function storeToken(token) {
    return AsyncStorage.setItem('@token', token);
}

function retrieveToken() {
    return AsyncStorage.getItem('@token');
}

function removeToken() {
    return AsyncStorage.removeItem('@token');
}

export { storeToken, retrieveToken, removeToken }