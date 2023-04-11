import { StyleSheet } from "react-native"
import { COLORS, TYPOGRAPHY } from '../../constants';
import COMMON from '../../styles/Common.style'

export default {
    Common: COMMON,
    ForgotPassword: StyleSheet.create({
        main: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        },
        paragraph: {
            fontSize: 14,
            fontFamily: TYPOGRAPHY.FONT_FAMILY_MEDIUM,
            marginHorizontal: 50, 
            textAlign: 'center',
            marginBottom: 15,
            color: COLORS.TaupeGray,
        }
    })
}