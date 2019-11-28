import {StyleSheet} from 'react-native';
import colors from '../../../constants/Colors';
import dimens from '../../../constants/Dimens';

export default StyleSheet.create({
  viewTitle: {
    width: dimens.DEVICE_WIDTH,
    height: 50,
    flexDirection: 'row',
  },
  viewInfo: {
    flex: 1,
    backgroundColor: colors.colorPage,
    paddingHorizontal: 7,
    paddingTop: 5,
  },
  container: {
    flexDirection: 'row',
    backgroundColor: colors.colorWhite,
    borderRadius: 7,
    marginVertical: 5,
    height: 90,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 5,
  },
  textBold: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.colorGray,
  },
  textNormal: {
    color: colors.colorGray,
  },
  imageCard: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  viewCard: {
    flex: 5,
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewTime: {
    flex: 2.3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewButton: {
    flex: 1.2,
    marginLeft: 5,
    borderRadius: 10,
  },
  imageButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  // viewInfo: {flex: 3},
  // viewTime: {flex: 1},
  // viewPrice: {flex: 2},
  // textTitle: {
  //   fontSize: 18,
  //   fontWeight: 'bold',
  // },
});
