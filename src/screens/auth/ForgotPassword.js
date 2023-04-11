import React from 'react';
import { Text, TextInput, TouchableOpacity, View, SafeAreaView, StyleSheet } from "react-native";
import * as AUTH from '../../net/http/authentication';
import * as STORAGE from '../../services/storage';
import { ROUTES, COLORS, TYPOGRAPHY } from '../../constants';
import { SpButton } from '../../components';
import STYLE from './ForgotPassword.style'

export default function ForgotPassword() {

    const [email, onChangeEmail] = React.useState('');

    const clickSend = async () => {
        console.log("send instruksjoner");
    }

    return(
        <SafeAreaView style={STYLE.ForgotPassword.main}>
            <Text style={STYLE.ForgotPassword.paragraph}>Skriv inn eposten som er assosiert med din konto, så sender 
                vi en epost med instruksjoner for tilbakestilling av passord.
            </Text>

            <TextInput 
            style={STYLE.Common.textInput}
            onChangeText={onChangeEmail}
            value={email}
            placeholder="epost"
            />

            <SpButton onPress={clickSend}>send instruksjoner</SpButton>
        </SafeAreaView>
    )
}