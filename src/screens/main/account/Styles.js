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
    margin: dimens.account_viewImage_margin,
    marginBottom: dimens.account_viewImage_marginBottom,
    borderRadius: dimens.account_borderRadius,
  },
  viewInfo: {
    flex: 7,
    marginHorizontal: dimens.account_viewInfo_marginHorizontal,
    marginVertical: dimens.account_viewInfo_marginVertical,
    borderRadius: dimens.account_borderRadius,
  },
  viewButtonEdit: {
    flex: 1,
    marginTop: dimens.account_viewButton_marginTop,
    marginBottom: dimens.account_viewButton_marginBottom,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: dimens.account_image,
    height: dimens.account_image,
  },
  text: {
    fontSize: dimens.textBigSize,
  },
});
