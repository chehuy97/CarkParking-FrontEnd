import React, {Component} from 'react';
import AccountEditCard from '../../../components/account_card/AccountEditCard';
import AccountCard from '../../../components/account_card/AccountCard';
import styles from './Styles';
import {View} from 'react-native';
import {Image, Text, Button} from 'react-native-elements';
import RadioButton from 'radio-button-react-native';

export default class AccountEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
  }
  handleOnPress(value) {
    this.setState({value: value});
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.viewImage}>
          <Image
            source={require('../../../assets/images/userImage.png')}
            style={styles.image}
          />
          <Text style={styles.text}>Chehuy97</Text>
        </View>
        <View style={styles.viewInfo}>
          <AccountEditCard name="Name: " placeholder="write your name..." />
          <RadioButton
            currentValue={this.state.value}
            value={0}
            onPress={this.handleOnPress.bind(this)}>
            <Text>Male</Text>
          </RadioButton>
          <RadioButton
            currentValue={this.state.value}
            value={1}
            onPress={this.handleOnPress.bind(this)}>
            <Text>Fermale</Text>
          </RadioButton>
          <AccountEditCard name="Age: " placeholder="write your Age..." />
          <AccountEditCard
            name="Address: "
            placeholder="write your Address..."
          />
          <AccountEditCard name="Car:" placeholder="write your name..." />
          <AccountCard name="Balance" value="1,764,264 VND" />
        </View>
        <View style={styles.viewButton}>
          <Button
            title="Confirm"
            buttonStyle={styles.button}
            onPress={() => {
              this.props.navigation.navigate('Account');
            }}
          />
        </View>
      </View>
    );
  }
}
