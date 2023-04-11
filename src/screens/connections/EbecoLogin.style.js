import { StyleSheet } from "react-native"
import COMMON from '../../styles/Common.style'

export default {
    Common: COMMON,
    EbecoLogin: StyleSheet.create({
        container: {
            flex: 1,
            paddingTop: 100,
            alignItems: 'center',
        },
        Image: {
            height: 55,
            resizeMode: "contain"
        },
        Text: {
            textAlign: 'center',
            fontSize: 14,
            opacity: 0.4,
            paddingTop: 10,
            paddingBottom: 30,
        },
    })
}