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
    flex: 3.2,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 5,
    marginTop: 5,
  },
  textBookedShedule: {
    fontWeight: 'bold',
    marginTop: 10,
    //fontSize: 18,
  },
  viewBookTime: {
    flex: 3.3,
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
    marginHorizontal: 20,
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
    height: 15,
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lineTimeNone: {
    width: 40,
    height: 15,
    backgroundColor: colors.colorWhite,
  },
  lineTimeNoBook: {
    width: 40,
    height: 15,
    backgroundColor: '#88d8b0',
  },
  lineTimeBooked: {
    width: 40,
    height: 15,
    backgroundColor: '#ff1654',
  },
  dialogConfirm: {
    backgroundColor: colors.colorWhite,
    height: 160,
    borderWidth: 1,
    borderColor: colors.colorPage,
  },
  viewContentConfirm: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: colors.colorPage,
  },
  ViewConfirm: {
    flex: 1,
    flexDirection: 'row',
  },
  textConfirm: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.colorGray,
  },
  confirmYesNo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: colors.colorPage,
    borderWidth: 1,
  },
});
