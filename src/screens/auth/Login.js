import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, TextInput, SafeAreaView } from "react-native";
import * as AUTH from '../../net/http/authentication';
import * as Storage from '../../services/storage';
import { ROUTES } from '../../constants';
import { SpButton } from '../../components';
import STYLE from './Login.style'

import WS from '../../net/websocket/websocket'

export default function Login() {

    const navigation = useNavigation();

    const [email, onChangeEmail] = React.useState('');
    const [password, onChangePassword] = React.useState('');

    const clickLogin = async () => {
        const response = await AUTH.login(email, password);
        const token = response.content;
        console.log("login response: ", response);

        switch(response.code){
            case 200: {
                if(!token) { console.log("Token not received"); return null; }
                Storage.storeToken(token);
                WS.open();
                navigation.navigate(ROUTES.HOME);
                break;
            }
            case 404: break;
            default: break;
        }
    }

    const clickGlemt = async () => {
        navigation.navigate(ROUTES.FORGOT_PASSWORD);
    }

    return(
        <SafeAreaView style={STYLE.Login.container}>
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

            <SpButton onPress={clickLogin}>logg inn</SpButton>
            <SpButton onPress={clickGlemt}>glemt passord?</SpButton>
        </SafeAreaView>
    )
}