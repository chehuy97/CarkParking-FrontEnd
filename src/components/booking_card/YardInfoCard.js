import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {CardItem} from 'native-base';
import {Icon} from 'react-native-elements';
import colors from '../../constants/Colors';
import styles from './Styles';

export default class YardInfoCard extends Component {
  render() {
    return (
      <CardItem style={styles.container}>
        <Icon
          name={this.props.iconName}
          size={23}
          style={styles.icon}
          color={colors.colorGray}
          type="evilicon"
        />
        <Text style={styles.textName}>{this.props.name}</Text>
        <Text style={styles.textValue}>{this.props.value}</Text>
      </CardItem>
    );
  }
}
