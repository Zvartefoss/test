import React from 'react';
import { Text, TextInput, TouchableOpacity, View, SafeAreaView, StyleSheet } from "react-native";
import * as AUTH from '../../net/http/authentication';
import * as Storage from '../../services/storage';
import { ROUTES, COLORS, TYPOGRAPHY } from '../../constants';
import { useNavigation } from '@react-navigation/native';

import STYLE from './Register.style'
import { SpButton } from '../../components';

import WS from '../../net/websocket/websocket'

export default function Register(){

    const navigation = useNavigation();

    const [email, onChangeEmail] = React.useState('');
    const [password, onChangePassword] = React.useState('');
    const [confirmPassword, onChangeConfirmPassword] = React.useState('');

    const clickRegister = async () => {
        const response = await AUTH.register(email, password);
        const token = response.content;
        console.log("register response: ", response);
        
        switch(response.code){
            case 201: {
                if(!token) { console.log("Token not received"); return null; }
                Storage.storeToken(token);
                WS.open();
                navigation.navigate(ROUTES.HOME);
                break;
            }
            case 409: break;
            default: break;
        }
    }

    return(
        <SafeAreaView style={STYLE.Register.container}>
            <TextInput 
            style={STYLE.Common.textInput}
            onChangeText={onChangeEmail}
            value={email}
            placeholder="epost"
            />

            <TextInput 
            style={STYLE.Common.textInput}
            onChangeText={onChangePassword}
            value={password}
            placeholder="passord"
            />

            <TextInput 
            style={STYLE.Common.textInput}
            onChangeText={onChangeConfirmPassword}
            value={confirmPassword}
            placeholder="bekreft passord"
            />

            <SpButton onPress={clickRegister}>opprett konto</SpButton>
        </SafeAreaView>
    )
}