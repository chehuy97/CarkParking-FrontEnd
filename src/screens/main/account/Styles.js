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
    margin: 10,
    marginBottom: 5,
    borderRadius: 7,
  },
  viewInfo: {
    flex: 7,
    marginHorizontal: 10,
    marginVertical: 5,
    borderRadius: 7,
  },
  viewButtonEdit: {
    flex: 1,
    marginTop: 5,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 130,
    height: 130,
  },
  text: {
    fontSize: dimens.textBigSize,
  },
});
