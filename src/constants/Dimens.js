import {Dimensions} from 'react-native';
export default {
  textBigSize: 30,
  textMediumSize: 24,
  textSize: 16,
  textLogo: 21,

  DEVICE_WIDTH: Dimensions.get('window').width,
  DEVICE_HEIGHT: Dimensions.get('window').height,

  delta: 0.01,
  largeDelta: 0.02,

  //login-signup//
  inputText_borderRadius: 25,
  inputText_marginVertical: 10,
  inputText_height: 48,
  logoText_marginVertical: 15,
  view_signup_paddingVertical: 15,
  //account//
  account_viewImage_margin: 10,
  account_viewImage_marginBottom: 5,
  account_borderRadius: 7,
  account_image: 130,
  account_viewInfo_marginHorizontal: 10,
  account_viewInfo_marginVertical: 5,
  account_viewButton_marginTop: 5,
  account_viewButton_marginBottom: 10,
  accountCard_boderWidth: 2,
  //payment//
  paymentCard_height: 160,
  paymentCard_margin: 15,
  paymentCard_marginTop: 10,
  paymentCard_radius: 10,
  paymentCard_content_paddingLeft: 20,
  paymentCard_content_paddingTop: 10,
  paymentCard_topic_paddingBottom: 5,
  payment_button_marginLeft: 25,
  //search//
  search_input_marginHorizontal: 20,
  search_leftIcon_marginRight: 10,
  //home//
  home_buttonShowGPS_bottom: 160,
  home_buttonGo_bottom: 100,
  home_buttonShowGPSCard_bottom: 250,
  home_buttonGoCard_bottom: 190,
  home_button_right: 40,
  home_buttonsize: 42,
  home_parkingDetail_height: 150,
  home_parkingDetail_dimenstion: 7,
};
