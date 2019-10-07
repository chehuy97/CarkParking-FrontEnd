import {StyleSheet} from 'react-native';
import dimens from '../../../constants/Dimens';

export default StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  map: {
    flex: 1,
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
  buttonImage: {
    width: dimens.home_buttonsize,
    height: dimens.home_buttonsize,
  },
});
