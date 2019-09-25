import { StyleSheet } from 'react-native'
import colors from '../../constants/Colors'

export default StyleSheet.create({
    container:{
        flex: 1,
        borderWidth: 2,
        borderColor: colors.colorPage,
    },
    textName: {
        flex: 2,
        fontWeight: 'bold',
    },
    textValue: {
        flex: 4,
    },
})