import {StyleSheet} from 'react-native';
import colors from '../../constants/Colors';
import dimens from '../../constants/Dimens';
export default StyleSheet.create({
  container: {
    height: dimens.paymentCard_height,
    margin: dimens.paymentCard_margin,
    marginTop: dimens.paymentCard_marginTop,
    backgroundColor: colors.colorWhite,
    borderRadius: dimens.paymentCard_radius,
  },
  viewContent: {
    flex: 3.5,
    paddingLeft: dimens.paymentCard_content_paddingLeft,
    paddingTop: dimens.paymentCard_content_paddingTop,
  },
  viewButton: {
    flex: 1.3,
    backgroundColor: colors.loginButton,
    justifyContent: 'center',
    alignContent: 'center',
  },
  textTopic: {
    fontSize: dimens.textMediumSize,
    paddingBottom: dimens.paymentCard_topic_paddingBottom,
    fontWeight: 'bold',
    borderBottomColor: 'black',
  },
  textContent: {
    fontSize: dimens.textSize,
  },

  textButton: {
    color: colors.colorWhite,
    fontSize: dimens.textSize,
    marginLeft: dimens.payment_button_marginLeft,
    fontWeight: 'bold',
  },
});
