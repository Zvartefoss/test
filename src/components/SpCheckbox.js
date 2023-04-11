import React, { useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { COLORS } from '../constants';


export default function SpCheckbox({ BoxSize, TickSize, BoxBorderRadius, TickBorderRadius, TickColor, BoxColor, OnCheck, OnUncheck, Checked }) {

    const defaults = {
        box: {
            borderRadius: 5,
            color: COLORS.BondiBlue,
            size: 40,
            checked: false,
        },
        tick: {
            borderRadius: 3,
            color: COLORS.White,
            size: 16,
        }
    }

    const [isChecked, setIsChecked] = React.useState(Checked ? Checked : defaults.box.checked);

    const boxSize = (BoxSize ? BoxSize : defaults.box.size);
    const boxColor = (BoxColor ? BoxColor : defaults.box.color); 
    const boxBorderRadius = (BoxBorderRadius ? BoxBorderRadius : defaults.box.borderRadius);

    const tickSize = (TickSize ? TickSize : defaults.tick.size);
    const tickColor = (TickColor ? TickColor : defaults.tick.color);
    const tickBorderRadius = (TickBorderRadius ? TickBorderRadius : defaults.tick.borderRadius);

    const lineWidth = tickSize/3;
    const line1Height = tickSize/4*5;
    const line2Height = tickSize;

    const box = {
        borderRadius: boxBorderRadius,
        backgroundColor: boxColor,
        width: boxSize,
        height: boxSize,
        justifyContent: 'center',
        alignItems: 'center',
    }

    const checkmark = {
        marginTop: line2Height/2,
        transform: [{ rotate: '45deg' }],
    }

    const line1 = {
        backgroundColor: tickColor,
        height: line1Height,
        width: lineWidth,
        borderTopLeftRadius: tickBorderRadius,
        borderTopRightRadius: tickBorderRadius,
    }

    const line2 = {
        backgroundColor: tickColor,
        width: lineWidth,
        height: line2Height,
        transform: [{ rotate: '90deg' }],
        top: -line2Height/2+(lineWidth/2-1),
        left: -lineWidth,
        borderTopRightRadius: tickBorderRadius,
        borderBottomRightRadius: tickBorderRadius,
        borderBottomLeftRadius: tickBorderRadius,
    }

    const _press = () => {
        if(isChecked) {
            if(OnUncheck) OnUncheck();
        } else {
            if(OnCheck) OnCheck();
        }

        setIsChecked(!isChecked);
    }

    return (
        <TouchableOpacity style={[box]} onPress={_press}>
            { isChecked &&
            <View style={[checkmark]}>
                <View style={[line1]}></View>
                <View style={[line2]}></View>
            </View>
            }
        </TouchableOpacity>
    );
}