import {StyleSheet} from 'react-native';
import colors from '../../constants/Colors';
import dimens from '../../constants/Dimens';
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
  },
  viewImage: {
    backgroundColor: colors.colorPage,
    width: 40,
    height: 40,
    borderRadius: 32.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 25,
    height: 25,
  },
  viewHistoryInfo: {
    marginLeft: 20,
    borderBottomWidth: 0.7,
    borderBottomColor: colors.colorPage,
    paddingVertical: 7,
    width: 300,
  },
  textName: {
    fontSize: dimens.textSize,
    marginBottom: 4,
  },
  textAddress: {
    color: colors.colorGray,
  },
});
