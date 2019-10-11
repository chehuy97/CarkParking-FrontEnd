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
    marginVertical: dimens.logoText_marginVertical,
    fontSize: dimens.textLogo,
    color: colors.colorTextWhite,
    fontWeight: 'bold',
  },
  signupTextCont: {
    flexGrow: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingVertical: dimens.view_signup_paddingVertical,
    flexDirection: 'row',
  },
  signupText: {
    color: colors.loginSignupQuestionText,
    fontSize: dimens.textSize,
  },
  signupButton: {
    color: colors.colorWhite,
    fontSize: dimens.textSize,
    fontWeight: 'bold',
    marginLeft: 4,
  },
  inputBox: {
    width: Dimensions.get('window').width - 60,
    backgroundColor: colors.loginInputBox,
    borderRadius: dimens.inputText_borderRadius,
    paddingHorizontal: 20,
    fontSize: dimens.textSize,
    color: colors.colorWhite,
    height: dimens.inputText_height,
    marginVertical: dimens.inputText_marginVertical,
  },
  inputIcon: {
    marginRight: 15,
  },
  button: {
    backgroundColor: colors.loginButton,
    width: Dimensions.get('window').width - 60,
    borderRadius: dimens.inputText_borderRadius,
    height: dimens.inputText_height,
    marginVertical: dimens.inputText_marginVertical,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: dimens.textSize,
    fontWeight: 'bold',
    color: colors.colorWhite,
    textAlign: 'center',
  },
});
