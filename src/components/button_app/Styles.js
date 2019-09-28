import { StyleSheet, Dimensions } from 'react-native'
import dimens from '../../constants/Dimens'
import colors from '../../constants/Colors'

export default StyleSheet.create({
    container: {
        flex: 1,
        // paddingHorizontal: 20,
    },
    Button: {
        backgroundColor: colors.loginButton,
        flex: 1,
        width: Dimensions.get("window").width-20 ,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        // // marginLeft: 20,
        // marginRight: 20,
    },
    textButton: {
        color: colors.colorWhite,
        fontSize: dimens.textSize

    }
})