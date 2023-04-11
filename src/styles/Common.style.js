import { StyleSheet } from "react-native";
import { COLORS, TYPOGRAPHY } from '../constants';

export default StyleSheet.create ({
    MainContainer: {
        //backgroundColor: 'grey',
        marginHorizontal: 25,
        marginTop: 25,
        marginBottom: 70+25,
        height: 90
    },
    tile: {
        width: '100%',
        height: 90,
    },
    textInput: {
        height: 50,
        width: '70%',
        margin: 10,
        borderWidth: 0,
        borderRadius: 10,
        backgroundColor: COLORS.Champagne,
        textAlign: 'center',
        fontFamily: TYPOGRAPHY.FONT_FAMILY_MEDIUM,
    }
});