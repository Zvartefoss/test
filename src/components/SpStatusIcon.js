import React, { useState } from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { COLORS, TYPOGRAPHY } from '../constants';

const SpStatusIcon = ({
    iconMap,
    activeIcon,
    containerWidth,
    iconWidth,
  }) => {

    const containerStyle = {
        width: containerWidth,
        height: containerWidth,
        backgroundColor: COLORS.White,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
    }

    const iconStyle = {
        width: iconWidth,
        height: iconWidth,
    }

    return (
        <View style={[containerStyle]}>
            <Image source={ iconMap[activeIcon] } style={[iconStyle]} />
        </View>
    )
}

export default SpStatusIcon;