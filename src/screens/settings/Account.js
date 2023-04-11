import React from 'react';
import { Text, View, SafeAreaView, Image, StyleSheet } from "react-native";
import { SpButtonTile } from '../../components';
import { useNavigation } from '@react-navigation/core';

export default function Account(){

    const navigation = useNavigation();

    const style = StyleSheet.create({
        container: {
            width: '100%',
            height: '90%',
            marginTop: 100,
            alignItems: 'center',
        },
        tiles: {
            width: '90%', 
            marginBottom: 10
        },
        text: {
            justifyContent: 'center',
            height: '100%',
            opacity: 0.4
        },
        test: {
            
        },
    })    

    return (
        <SafeAreaView style={style.container}>
            <SpButtonTile Text={'Epost'} style={style.tiles}>
                <View style={style.text}>
                    <Text>dinepost@epost.com</Text>
                </View>
            </SpButtonTile>
            <SpButtonTile Text={'Endre Passord'} style={style.tiles}>
                <Image source={require('../../assets/icons/more-than.png')} style={{height: 30, width: 30}} />
            </SpButtonTile>
        </SafeAreaView>
    )
}