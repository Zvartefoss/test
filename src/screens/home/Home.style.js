import { StyleSheet } from "react-native"
import { COLORS } from '../../constants';
import COMMON from '../../styles/Common.style'

export default {
    Common: COMMON,
    Home: StyleSheet.create({
        container: {
            flex: 1,
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-start',
            gap: 20,
        },
        statsTile: {
            textAlign: 'center',
            width: '100%',
            height: 200,
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            borderRadius: 10,
            backgroundColor: COLORS.Champagne,
            justifyContent: 'center', 
        },
        statsRow: {
            flexBasis: '50%',
            height: 100,
            TextSize: 20,
            SubtextSize: 8,
        },
        statsBottom: {
            flexBasis: '33%',
            flexGrow: 1,
        }
    })
}