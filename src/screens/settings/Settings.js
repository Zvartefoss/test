import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, Image, View, SafeAreaView, StyleSheet } from "react-native";

import { ROUTES, COLORS, TYPOGRAPHY } from '../../constants';
import { SpButtonTile } from '../../components';
import STYLE from './Settings.style'

export default function Settings(){

    const navigation = useNavigation();

    return (
        <SafeAreaView>
            <View style={[STYLE.Common.MainContainer, STYLE.Settings.container]}>
                <View style = {STYLE.Common.tile} />
                <View style = {STYLE.Common.tile} >
                    <SpButtonTile Text="Bruker" onPress={() => navigation.navigate(ROUTES.ACCOUNT)}>
                        <Image source={require('../../assets/icons/more-than.png')} style={{height: 30, width: 30}} />
                    </SpButtonTile>
                </View>
                <View style = {STYLE.Common.tile}>
                    <SpButtonTile Text="Strømsone" onPress={() => navigation.navigate(ROUTES.ENERGY_ZONE)}>
                        <Image source={require('../../assets/icons/more-than.png')} style={{height: 30, width: 30}} />
                    </SpButtonTile>
                </View>
            </View>
        </SafeAreaView>
    )
}