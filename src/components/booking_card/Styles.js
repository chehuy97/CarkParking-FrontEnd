import {StyleSheet} from 'react-native';
import dimens from '../../constants/Dimens';
import colors from '../../constants/Colors';

export default StyleSheet.create({
  container: {
    width: 400,
    height: 35,
  },
  textName: {
    fontSize: 18,
    marginHorizontal: 10,
    color: colors.colorGray,
  },
  textValue: {
    fontSize: 18,
    color: colors.colorGray,
  },
  icon: {
    marginRight: 10,
  },
});
