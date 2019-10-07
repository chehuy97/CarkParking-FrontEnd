import { StyleSheet } from 'react-native'
import colors from '../../constants/Colors'
import dimens from '../../constants/Dimens'

export default StyleSheet.create({
    container:{
        flex: 1,
        borderWidth: dimens.accountCard_boderWidth,
        borderColor: colors.colorPage,
        borderRadius: dimens.account_borderRadius,
    },
    textName: {
        flex: 2,
        fontWeight: 'bold',
    },
    textValue: {
        flex: 4,
    },
})