import {StyleSheet} from 'react-native';
import colors from '../../constants/Colors';
import dimens from '../../constants/Dimens';

export default StyleSheet.create({
  container: {
    height: dimens.DEVICE_HEIGHT / 12,
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
    width: (dimens.DEVICE_WIDTH / 3) * 2,
  },
  radioButton: {
    marginLeft: 25,
  },
  picker: {
    width: 90,
    height: 50,
  },
  textInputBirth: {
    width: 80,
    marginRight: 10,
  },
});
