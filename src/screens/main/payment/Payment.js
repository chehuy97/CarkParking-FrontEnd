import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import PaymentCard from '../../../components/payment_card/PaymentCard';
import Styles from './Styles';
import Strings from '../../../constants/Strings';

export default class Payment extends Component {
  render() {
    return (
      <View style={Styles.container}>
        <PaymentCard
          textTopic={Strings.paymentActive}
          textContent={Strings.paymentActiveContent}
          buttonName="Active"
        />
        <PaymentCard
          textTopic={Strings.paymentPay}
          textContent={Strings.paymentPaycontent}
          buttonName="Manage Card"
        />
      </View>
    );
  }
}
