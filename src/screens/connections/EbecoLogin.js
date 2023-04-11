import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, View, TextInput, Image } from "react-native";
import { SpButton } from '../../components';
import { ROUTES } from '../../constants';

import STYLE from './EbecoLogin.style';

export default function EbecoLogin(){

    const [email, onChangeEmail] = React.useState('');
    const [password, onChangePassword] = React.useState('');

    const navigation = useNavigation();

    return (
        <View style={STYLE.EbecoLogin.container}>
            <Image style={STYLE.EbecoLogin.Image} source={require('../../assets/icons/ebeco-banner.png')}/>
            <Text style={STYLE.EbecoLogin.Text}>Skriv inn ditt ebeco brukernavn og passord {'\n'} for å logge inn</Text>
            <TextInput
                style={STYLE.Common.textInput}
                onChangeText={onChangeEmail}
                value={email}
                placeholder='ebeco epost'
            />
            <TextInput
                style={STYLE.Common.textInput}
                onChangeText={onChangePassword}
                value={password}
                placeholder='ebeco passord'
            />
            <SpButton onPress={() => navigation.navigate(ROUTES.EBECO_DEVICES)}>logg inn</SpButton>
        </View>
    )
}