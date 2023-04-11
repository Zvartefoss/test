import { useNavigation } from "@react-navigation/native";
import { Image, Text, FlatList, View } from "react-native";
import { SpButton, SpButtonTile, SpCheckbox } from "../../components";
import { ROUTES } from "../../constants";
import STYLE from './EbecoDevices.style';



export default function EbecoDevices() {

    const navigation = useNavigation();

    let devices = ['Stue', 'Kjøkken', 'Bad'];

    return (
        <View style={STYLE.EbecoDevices.container}>
            <Image style={STYLE.EbecoDevices.Image} source={require('../../assets/icons/ebeco-banner.png')} />
            <FlatList
                data={devices}
                renderItem={({ item }) => (
                    <View style={STYLE.EbecoDevices.item}>
                        <SpButtonTile style={STYLE.EbecoDevices.tiles} Text={item} ChildLeft={true} ChildWidth={30}>
                            <SpCheckbox OnCheck={() => console.log(item + ": checked")} OnUncheck={() => console.log(item + ": unchecked")} BoxSize={30} TickSize={12} TickBorderRadius={3}></SpCheckbox>
                        </SpButtonTile>
                    </View>
                )}
                ListHeaderComponent={<Text style={STYLE.EbecoDevices.title}>Termostater</Text>}
                style={STYLE.EbecoDevices.flatlist}
            />
            <View><SpButton style={STYLE.EbecoDevices.button} onPress={() => navigation.navigate(ROUTES.CONNECTIONS)}>lagre</SpButton></View>
            <View style={STYLE.EbecoDevices.footer}><SpButton style={STYLE.EbecoDevices.dcButton}>koble fra tjeneste</SpButton></View>
        </View>
    );


}