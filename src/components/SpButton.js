import React from "react";
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { COLORS, TYPOGRAPHY } from '../constants';

export default class SpButton extends React.Component {
    render(){
        return(
            <TouchableOpacity style={[STYLE.button, this.props.style]} onPress={this.props.onPress}>
                <Text style={STYLE.buttonText}>{this.props.children}</Text>
            </TouchableOpacity>
        )
    }
}

const STYLE = StyleSheet.create({
    button: {
        width: '50%',
        height: 50,
        backgroundColor: COLORS.BondiBlue,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        borderRadius: 10,
    },
    buttonText: {
        fontFamily: TYPOGRAPHY.FONT_FAMILY_MEDIUM,
        fontSize: 18,
        color: COLORS.White,
    }
})