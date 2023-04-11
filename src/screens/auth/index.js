import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, TextInput, TouchableOpacity, View, SafeAreaView, StyleSheet } from "react-native";

import { ROUTES, COLORS, TYPOGRAPHY } from '../../constants';
import { SpButton } from '../../components';
import STYLE from './index.style'

export default function AuthIndex() {

    const navigation = useNavigation();

    return(
        <SafeAreaView style={STYLE.Index.container}>
            <SpButton onPress={() => navigation.navigate(ROUTES.LOGIN)}>logg inn</SpButton>
            <SpButton onPress={() => navigation.navigate(ROUTES.REGISTER)}>opprett konto</SpButton>
        </SafeAreaView>
    )
}