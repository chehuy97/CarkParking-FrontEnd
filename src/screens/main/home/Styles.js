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
  detailView: {
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
    marginLeft: dimens.home_detailTimeIcon_marginLeft,
  },
  detailTime: {
    marginLeft: dimens.home_detailTime_marginLeft,
  },
  detailButton: {
    marginRight: dimens.home_detailButton_marginRight,
    marginLeft: dimens.home_detailButton_marginLeft,
    width: (dimens.DEVICE_WIDTH - 80) / 2,
    backgroundColor: colors.loginButton,
    borderRadius: dimens.home_detailButton_radius,
  },
  searchView: {
    position: 'absolute',
    height: 80,
    backgroundColor: 'rgba(255, 255, 255, 0)',
    width: dimens.DEVICE_WIDTH,
    top: 0,
  },
  searchInput: {
    backgroundColor: 'white',
    borderRadius: 10,
    width: dimens.DEVICE_WIDTH - 60,
    marginLeft: 30,
    height: 50,
    marginTop: 15,
  },
});
