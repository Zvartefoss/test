import React, { useEffect, useState } from 'react'
import { Text, Button, View, TouchableOpacity, StyleSheet, TouchableWithoutFeedback, Animated, LayoutAnimation, Platform, UIManager } from 'react-native';
import SpStatusIcon from './SpStatusIcon';
import { COLORS, TYPOGRAPHY } from '../constants';

const SpSwitch = ({
  children,
  disabled,
  startOff,
  switchWidth,
  buttonWidth,
  buttonPadding,
  switchBackgroundColor,
  animationSpeed,
  iconWidth,
  onIcon,
  offIcon,
  onSwitch,
  offSwitch,
}) => {

  const [isRight, setIsRight] = useState(startOff === true ? false : true);
  const iconMap = {"on": onIcon, "off": offIcon};

  const toggle = () => {
    if (isRight && onSwitch){
      onSwitch();
    } else if (!isRight && offSwitch){
      offSwitch();
    }
    setIsRight(!isRight);
  }

  const defaultVal = {
    switch: {
      size: {
        width: 100,
      },
      color: {
        backgroundColor: COLORS.BondiBlue,
      }
    },
    animationSpeed: 150
  }

  const buttonStyle = {
    height: buttonWidth,
    width: buttonWidth,
    left: isRight
      ? (switchWidth-((buttonPadding ? buttonPadding : defaultVal.button.padding)*2)-buttonWidth)
      : 0,
  }

  const switchStyle = {
    backgroundColor: switchBackgroundColor ? switchBackgroundColor : defaultVal.switch.color.backgroundColor,
    width: switchWidth
        ? switchWidth
        : defaultVal.switch.size.width,
    padding: buttonPadding ? buttonPadding : defaultVal.button.padding,
    borderRadius: 25,
    /*alignItems: isRight
      ? 'flex-end'
      : 'flex-start',*/
  }

  return (
      <TouchableWithoutFeedback onPress={() => {
        !disabled ? (
          toggle()
        ) : null
      }}>
        <Animated.View style={switchStyle}>
          <View style={[buttonStyle]}>
            <SpStatusIcon activeIcon={isRight ? "on" : "off"} containerWidth={buttonWidth} iconWidth={iconWidth} iconMap={iconMap} />
          </View>
        </Animated.View>

      </TouchableWithoutFeedback>
  )
}

export default SpSwitch;