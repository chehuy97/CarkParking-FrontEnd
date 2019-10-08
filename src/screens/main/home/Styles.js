import {StyleSheet} from 'react-native';
import dimens from '../../../constants/Dimens';
import colors from '../../../constants/Colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  map: {
    flex: 1,
    position: 'relative',
  },
  buttonShowGPS: {
    position: 'absolute',
    bottom: dimens.home_buttonShowGPS_bottom,
    right: dimens.home_button_right,
  },
  buttonGo: {
    position: 'absolute',
    bottom: dimens.home_buttonGo_bottom,
    right: dimens.home_button_right,
  },
  buttonShowGPSCard: {
    position: 'absolute',
    bottom: dimens.home_buttonShowGPSCard_bottom,
    right: dimens.home_button_right,
  },
  buttonGoCard: {
    position: 'absolute',
    bottom: dimens.home_buttonGoCard_bottom,
    right: dimens.home_button_right,
  },
  buttonImage: {
    width: dimens.home_buttonsize,
    height: dimens.home_buttonsize,
  },
  parkingDetail: {
    position: 'absolute',
    height: dimens.home_parkingDetail_height,
    bottom: dimens.home_parkingDetail_dimenstion,
    left: dimens.home_parkingDetail_dimenstion,
    width: dimens.DEVICE_WIDTH - dimens.home_parkingDetail_dimenstion * 2,
    backgroundColor: colors.colorWhite,
    borderRadius: dimens.home_parkingDetail_radius,
  },
  detailName: {
    fontSize: dimens.textLogo,
    fontWeight: 'bold',
    marginHorizontal: dimens.home_detailName_marginHorizontal,
    marginTop: dimens.home_detailName_marginTop,
  },
  detailAddressCard: {
    height: dimens.home_detailAddressCard_height,
  },
  detailAddress: {
    color: colors.colorGray,
  },
  detailTimeIcon: {
    marginLeft: 20,
  },
  detailTime: {
    marginLeft: 5,
  },
  detailButton: {
    marginRight: 20,
    marginLeft: 5,
    width: (dimens.DEVICE_WIDTH - 80) / 2,
    backgroundColor: colors.loginButton,
    borderRadius: 10,
  },
});
