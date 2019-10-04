import { StyleSheet } from 'react-native'
import colors from '../../constants/Colors'
import dimens from '../../constants/Dimens'
export default StyleSheet.create({
    container: {
        height: 160,
        margin: 15,
        marginTop: 10,
        backgroundColor: colors.colorWhite,
        borderRadius: 10,
    },
    viewContent: {
        flex: 3.5,
        paddingLeft: 20,
        paddingTop: 10,
    },
    viewButton: {
        flex: 1.3,
        backgroundColor: colors.loginButton,
        justifyContent: 'center',
        alignContent: 'center',
    },
    textTopic:{
        fontSize: dimens.textMediumSize,
        paddingBottom: 5,
        fontWeight: 'bold',
        borderBottomColor: 'black'
    },
    textContent:{
        fontSize: dimens.textSize
    },

    textButton: {
        color: colors.colorWhite,
        fontSize: dimens.textSize,
        marginLeft: 20,
        fontWeight: 'bold',
    }

})