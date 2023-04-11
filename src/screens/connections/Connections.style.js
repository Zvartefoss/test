import { StyleSheet } from "react-native"
import COMMON from '../../styles/Common.style'

export default {
    Common: COMMON,
    Connections: StyleSheet.create({
        item: {
            paddingBottom: 10,
            width: '100%',
            height: 100,
        },
        title: {
            fontSize: 20,
            paddingTop: 20,
            paddingBottom: 5,
        },
        container: {
            marginHorizontal: 30,
            marginTop: 30,
            marginBottom: 70,
        }
    })
}