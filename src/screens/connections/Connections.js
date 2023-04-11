import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, View, Image} from "react-native";
import { SectionList } from 'react-native';
import { SpButtonTile } from '../../components';
import { ROUTES } from '../../constants';
import STYLE from './Connections.style';

export default function Connections(){

    const navigation = useNavigation()

    const pulse = 'Tibber Pulse';
    const ebeco = 'Ebeco';
    const tøys = 'Tøys';

    let active = [tøys];
    let inactive = [ebeco, pulse];

    let connections = [
        {
            title: 'Aktivert',
            data: active,
        },
        {
            title: 'Tilgjengelig',
            data: inactive,
        },
    ];

    const getImage = (image) => {
        switch(image){
            case pulse: return require('../../assets/icons/tibber-pulse.png');
            case tøys: return require('../../assets/icons/lightning-on.png');
            case ebeco: return require('../../assets/icons/ebeco.png');
        }
    }

    return (
        <View style={STYLE.Connections.container}>
            <SectionList 
                sections={connections}
                renderItem={({item}) => (
                    <View style={STYLE.Connections.item}>
                        <SpButtonTile Text={item} ChildLeft={true} ChildWidth={55} 
                            {...(item==ebeco
                                ? {onPress: () => navigation.navigate(ROUTES.EBECO)}
                                : {}
                            )}
                        >
                            <Image style={{width: 55, height: 55, borderRadius: 10}} source={getImage(item)}/>
                        </SpButtonTile>
                    </View>
                )}
                renderSectionHeader={({section: {title}}) => (
                    <Text style={STYLE.Connections.title}>{title}</Text>
                )}
            />
        </View>
    );
}