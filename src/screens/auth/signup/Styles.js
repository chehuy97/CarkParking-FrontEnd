import React from 'react';
import colors from '../../../constants/Colors';
import dimens from '../../../constants/Dimens';
import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.appColor,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerForm: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerLogo: {
    flexGrow: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  logoText: {
    marginVertical: 15,
    fontSize: dimens.textLogo,
    color: colors.colorTextWhite,
    fontWeight: 'bold',
  },
  signupTextCont: {
    flexGrow: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingVertical: 16,
    flexDirection: 'row',
  },
  signupText: {
    color: colors.loginSignupQuestionText,
    fontSize: dimens.textSize,
  },
  signupButton: {
    color: colors.colorTextWhite,
    fontSize: dimens.textSize,
    fontWeight: 'bold',
    marginLeft: 4,
  },
  inputBox: {
    width: Dimensions.get('window').width - 50,
    backgroundColor: colors.loginInputBox,
    borderRadius: 25,
    paddingHorizontal: 16,
    fontSize: dimens.textSize,
    color: colors.colorTextWhite,
    marginVertical: 10,
  },
  button: {
    backgroundColor: colors.loginButton,
    width: Dimensions.get('window').width - 50,
    borderRadius: 25,
    marginVertical: 10,
    paddingVertical: 13,
  },
  buttonText: {
    fontSize: dimens.textSize,
    fontWeight: 'bold',
    color: colors.colorTextWhite,
    textAlign: 'center',
  },
});
