import {StyleSheet} from 'react-native';
import colors from '../../constants/Colors';
import dimens from '../../constants/Dimens';

export default StyleSheet.create({
  container: {
    height: 70,
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
  textInput: {
    width: 270,
  },
});
