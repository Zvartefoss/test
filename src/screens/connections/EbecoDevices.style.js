import { StyleSheet } from "react-native"
import COMMON from '../../styles/Common.style'

export default {
    Common: COMMON,
    EbecoDevices: StyleSheet.create({
        container: {
            alignItems: 'center',
            height: '90%',
        },
        Image: {
            marginTop: 100,
            height: 55,
            resizeMode: "contain",
        },
        title: {
            textAlign: 'center',
            fontSize: 20,
            marginTop: 30,
        },
        item: {
            margin: 3,
        },
        tiles: {
            height: 55,
            width: 275,
        },
        button: {
            width: 150,
        },
        dcButton: {
            width: 200,
            height: 30,
        },
        flatlist: {
            flexGrow: 0,
            flexShrink: 1,
        },
        footer: {
            marginTop: 'auto',
        }
    })
}