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
    height: dimens.DEVICE_HEIGHT,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    width: dimens.DEVICE_WIDTH,
    top: 0,
    flex: 1,
  },
  searchInput: {
    position: 'absolute',
    backgroundColor: 'white',
    borderRadius: 10,
    width: dimens.DEVICE_WIDTH - 60,
    top: 10,
    left: 30,
    borderWidth: 0.6,
  },
  viewHistory: {
    marginTop: 70,
    borderTopWidth: 10,
    borderTopColor: colors.colorPage,
    flex: 1,
  },
  historyLasttimeText: {
    fontSize: dimens.textLogo,
    margin: 10,
    fontWeight: 'bold',
  },
  viewImageHistoryCard: {
    backgroundColor: colors.colorPage,
    width: 40,
    height: 40,
    borderRadius: 32.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageHistoryCard: {
    width: 25,
    height: 25,
  },
  viewHistoryCardInfo: {
    marginLeft: 20,
    borderBottomWidth: 0.7,
    borderBottomColor: colors.colorPage,
    paddingVertical: 7,
    width: 300,
  },
  textNameHistoryCard: {
    fontSize: dimens.textSize,
    marginBottom: 4,
  },
  textAddressHistoryCard: {
    color: colors.colorGray,
  },
});
