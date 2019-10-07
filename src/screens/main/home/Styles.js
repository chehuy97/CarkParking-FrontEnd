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
    borderRadius: dimens.home_parkingDetail_dimenstion,
  },
  detailName: {
    fontSize: dimens.textMediumSize,
    fontWeight: 'bold',
    marginHorizontal: 30,
  },
});
