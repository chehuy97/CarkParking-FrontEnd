import {StyleSheet} from 'react-native';
import colors from '../../../constants/Colors';
import dimens from '../../../constants/Dimens';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.colorPage,
    flex: 1,
  },
  viewImage: {
    flex: 4,
    backgroundColor: colors.colorWhite,
    justifyContent: 'center',
    alignItems: 'center',
    margin: dimens.account_viewImage_margin,
    marginBottom: dimens.account_viewImage_marginBottom,
    borderRadius: dimens.account_borderRadius,
  },
  viewInfo: {
    flex: 7,
    marginHorizontal: dimens.account_viewInfo_marginHorizontal,
    marginVertical: dimens.account_viewInfo_marginVertical,
    borderRadius: dimens.account_borderRadius,
  },
  viewButton: {
    flex: 1,
    marginTop: dimens.account_viewButton_marginTop,
    marginBottom: dimens.account_viewButton_marginBottom,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: dimens.account_image,
    height: dimens.account_image,
    borderRadius: dimens.account_image_radius,
  },
  textImage: {
    fontSize: dimens.textBigSize,
    marginTop: 10,
  },
  button: {
    width: dimens.DEVICE_WIDTH - 20,
    marginHorizontal: 10,
    height: 50,
    backgroundColor: colors.loginButton,
  },
  containerCard: {
    flex: 1,
    borderWidth: dimens.accountCard_boderWidth,
    borderColor: colors.colorPage,
    borderRadius: dimens.account_borderRadius,
  },
  textName: {
    width: 90,
    fontWeight: 'bold',
  },
  textValue: {
    width: 250,
    marginLeft: 10,
  },
  //car
});
