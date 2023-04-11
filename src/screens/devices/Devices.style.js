import { StyleSheet } from "react-native"
import COMMON from '../../styles/Common.style'

export default{
    Common: COMMON,
    Devices: StyleSheet.create({
        container: {
            alignItems: 'center',
            height: '90%',
        },
        SpIcon: {
            padding: 5,
        },
        title: {
            fontSize: 20,
            marginTop: 75,
            marginBottom: 5,
        },
        list: {
            width: '90%',
            flexGrow: 0,
            flexShrink: 1,
        },
        contentLeft: {
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
        },
        contentRight: {
            flexDirection: 'row-reverse',
            alignItems: 'center',
        },
        contentRightFull: {
            flex: 2,
            maxWidth: '60%',
        },
        tiles: {
            height: 90,
            marginBottom: 5,
            width: '100%',
        },
        button: {
            marginTop: 'auto',
            marginBottom: 10,
        },
        tileContent: {
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            paddingHorizontal: 5,
            height: '100%',
            width: '100%',
        },
    })
}