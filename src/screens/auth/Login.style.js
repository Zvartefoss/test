import { StyleSheet } from "react-native"
import { COLORS, TYPOGRAPHY } from '../../constants';
import COMMON from '../../styles/Common.style'

export default {
    Common: COMMON,
    Login: StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        },
    })
}