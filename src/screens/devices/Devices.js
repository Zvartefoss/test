import React from 'react';
import { Text, View, SafeAreaView, SectionList } from "react-native";
import { SpButton, SpButtonTile, SpStatusIcon } from '../../components';
import STYLE from './Devices.style';
import { useNavigation } from '@react-navigation/native';
import { ROUTES } from '../../constants';

export default function Devices(){


const iconMap = {"on": require('../../assets/icons/lightning-on.png'), "off": require('../../assets/icons/lightning-off.png')};

let thermostats = [
    {
        "displayName": "Ovn",
        "powerOn": true,
        "temperatureSet": 19.0,
        "temperatureRoom": 14.0,
        "relayOn": true,
        "installedEffect": 800,
        "id": 11247
    },
    {
        "displayName": "Dummy",
        "powerOn": true,
        "temperatureSet": 21.0,
        "temperatureRoom": 20.0,
        "relayOn": true,
        "installedEffect": 800,
        "id": 11248
    }
]

let DATA = [
    {
        title: 'Termostater',
        data: thermostats,
    }
]

    return (
        <SafeAreaView style={STYLE.Devices.container}>
                <SectionList
                sections={DATA}
                renderItem={({item}) => (
                    <SpButtonTile style={STYLE.Devices.tiles} Margin={0}>
                        <View style={STYLE.Devices.tileContent}>
                            <View style={STYLE.Devices.contentLeft}>
                                <View style={STYLE.Devices.SpIcon}>
                                    <SpStatusIcon activeIcon={'on'} containerWidth={25} iconWidth={50} iconMap={iconMap}/>
                                </View>
                                <View>
                                    <Text>{item.displayName}</Text>
                                    <Text>{item.temperatureRoom}°</Text>
                                </View>
                            </View>
                            <View style={STYLE.Devices.contentRightFull}>
                                <View style={STYLE.Devices.contentRight}>
                                    <View style={STYLE.Devices.SpIcon}>
                                        <SpStatusIcon activeIcon={'on'} containerWidth={30} iconWidth={30} iconMap={{'on': require('../../assets/icons/sun-on.png')}}/>
                                    </View>
                                    <Text>{item.temperatureSet}°</Text>
                                </View>
                                <View style={STYLE.Devices.contentRight}>
                                    <View style={STYLE.Devices.SpIcon}>
                                        <SpStatusIcon activeIcon={'on'} containerWidth={30} iconWidth={25} iconMap={{'on': require('../../assets/icons/moon-off.png')}}/>
                                    </View>
                                    <Text>tidspunkt + temperatur°</Text>
                                </View>
                            </View>
                        </View>
                    </SpButtonTile>
                )}
                renderSectionHeader={({section: {title}}) => (
                    <Text style={STYLE.Devices.title}>{title}</Text>
                )}
                style={STYLE.Devices.list}
                />
                <SpButton style={STYLE.Devices.button}>Legg til enheter</SpButton>
        </SafeAreaView>
    )
}