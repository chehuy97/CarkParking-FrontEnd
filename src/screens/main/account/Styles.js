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
    marginHorizontal: 10,
    marginVertical: dimens.account_viewInfo_marginVertical,
    borderRadius: dimens.account_borderRadius,
  },
  viewButton: {
    flex: 1,
    // marginTop: dimens.account_viewButton_marginTop,
    // marginBottom: dimens.account_viewButton_marginBottom,
    flexDirection: 'row',
    paddingHorizontal: 5,
    //justifyContent: 'center',
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
    flex: 1,
    backgroundColor: colors.loginButton,
    color: colors.colorWhite,
    marginTop: 5,
    marginHorizontal: 5,
    marginBottom: 10,
    borderRadius: 7,
  },
  viewButtonText: {
    alignItems: 'center',
    justifyContent: 'center',
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
  viewCarCard: {
    height: dimens.DEVICE_HEIGHT / 5,
    width: (dimens.DEVICE_WIDTH / 20) * 19,
    marginLeft: dimens.DEVICE_WIDTH / 40,
    marginVertical: 10,
    borderRadius: 7,
    backgroundColor: colors.colorWhite,
  },
  viewCarTitle: {
    flex: 1,
    backgroundColor: colors.loginButton,
    justifyContent: 'center',
    padding: dimens.DEVICE_WIDTH / 40,
  },
  viewTextContent: {
    flexDirection: 'row',
    marginTop: dimens.DEVICE_HEIGHT / 200,
  },
  textCarTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    color: colors.colorWhite,
  },
  textCarNameContent: {
    fontSize: 17,
    width: dimens.DEVICE_WIDTH / 6,
    marginLeft: dimens.DEVICE_WIDTH / 30,
  },
  textCarValueContent: {
    fontSize: 17,
  },
  dialogConfirm: {
    backgroundColor: colors.colorWhite,
    height: 160,
    borderWidth: 1,
    borderColor: colors.colorPage,
  },
  viewContentConfirm: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: colors.colorPage,
  },
  ViewConfirm: {
    flex: 1,
    flexDirection: 'row',
  },
  textConfirm: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.colorGray,
  },
  confirmYesNo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: colors.colorPage,
    borderWidth: 1,
  },
});
