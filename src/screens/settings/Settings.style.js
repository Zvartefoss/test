import { StyleSheet } from "react-native"
import { COLORS, TYPOGRAPHY } from '../../constants';
import COMMON from '../../styles/Common.style'

export default {
    Common: COMMON,
    Settings: StyleSheet.create({
        container: {
            flex: 1,
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-start',
            gap: 20,
        },
        pinkbox: {
            width: '100%',
            height: 100,
            backgroundColor: 'pink'
        },
        bluebox: {
            width: '100%',
            height: 100,
            backgroundColor: 'lightblue'
        },
        magentabox: {
            width: '100%',
            height: 100,
            backgroundColor: 'magenta'
        },
        greenbox: {
            width: '100%',
            height: 100,
            backgroundColor: 'lightgreen'
        },
        crimsonbox: {
            width: '100%',
            height: 200,
            backgroundColor: 'crimson',
        },
    })
}