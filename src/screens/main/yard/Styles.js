import {StyleSheet} from 'react-native';
import colors from '../../../constants/Colors';
import dimens from '../../../constants/Dimens';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.colorPage,
  },
  viewImage: {
    flex: 4.5,
    backgroundColor: colors.colorWhite,
    borderRadius: 5,
    alignItems: 'center',
  },
  viewBookedShedule: {
    flex: 3,
    backgroundColor: 'white',
    borderRadius: 5,
    marginTop: 5,
  },
  viewBookTime: {
    flex: 3.5,
    borderRadius: 5,
    marginVertical: 5,
    backgroundColor: colors.colorWhite,
  },
  viewButton: {
    flex: 1,
    flexDirection: 'row',
  },
  imageAddress: {
    width: dimens.DEVICE_WIDTH,
    height: (dimens.DEVICE_HEIGHT / 13) * 2.5,
  },
  bookingText: {
    fontWeight: 'bold',
    fontSize: dimens.textSize,
    color: colors.colorGray,
  },
  cardBooking: {
    height: 50,
    marginTop: 10,
  },
  pickerCarNumber: {
    width: 250,
    height: 34,
    marginLeft: 20,
    borderWidth: 1,
    borderColor: colors.colorGray,
    flexDirection: 'row',
  },
  downIcon: {
    justifyContent: 'center',
    alignContent: 'center',
    flex: 1,
  },
  textCarNumber: {
    flex: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dialogCarNumber: {
    backgroundColor: colors.colorWhite,
    borderRadius: 7,
    height: 240,
  },
  dialogCardCarNumber: {
    height: 60,
    borderBottomColor: colors.colorPage,
    borderBottomWidth: 1,
  },
  dialogTime: {
    backgroundColor: colors.colorWhite,
    borderRadius: 7,
    height: 300,
  },
  pickerTime: {
    width: 60,
    height: 34,
    marginHorizontal: 10,
    borderWidth: 1,
    borderColor: colors.colorGray,
    flexDirection: 'row',
  },
  textTime: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewPrice: {
    flex: 1,
    backgroundColor: colors.colorWhite,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewBtnBooking: {
    flex: 1,
    backgroundColor: colors.appColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textBooking: {
    color: colors.colorWhite,
    fontWeight: 'bold',
  },
  textPrice: {
    fontWeight: 'bold',
    fontSize: dimens.textSize,
    marginHorizontal: 5,
  },
  textPriceValue: {
    fontWeight: 'bold',
    color: '#b23a48',
    fontSize: dimens.textSize,
  },
  timeNumber: {
    width: 20,
    height: 20,
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lineTimeNone: {
    width: 40,
    height: 15,
    backgroundColor: '#88d8b0',
  },
  lineTimeBooked: {
    width: 40,
    height: 15,
    backgroundColor: '#ff1654',
  },
});
