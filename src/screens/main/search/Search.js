import React from 'react';
import {Text, View, Button} from 'react-native';
import axios from 'axios';

export default class FetchExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: false,
      dataSource: [],
      account: {
        account_id: 7,
        username: 'account6',
        password: '123456',
        name: 'PJ tucker',
        age: 34,
      },
    };
  }
  postAccount = () => {
    axios
      .post('http://192.168.21.90:3000/accounts', {
        account_id: this.state.account.account_id,
        username: this.state.account.username,
        password: this.state.account.password,
        name: this.state.account.name,
        age: this.state.account.age,
      })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  };
  getAccount = () => {
    axios
      .get(`http://192.168.21.90:3000/accounts`)
      .then(res => {
        this.setState({dataSource: res.data});
      })
      .catch(error => console.log(error));
  };
  deleteAccount = () => {
    axios
      .delete(
        `http://192.168.21.90:3000/accounts/` + this.state.account.account_id,
      )
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  };
  editAccount = () => {
    axios
      .put(
        'http://192.168.21.90:3000/accounts/' + this.state.account.account_id,
        {
          username: this.state.account.username,
          password: this.state.account.password,
          name: 'Chris Paul',
          age: this.state.account.age,
        },
      )
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  };
  render() {
    return (
      <View style={{flex: 1, paddingTop: 20}}>
        <Button
          title="get"
          onPress={() => {
            this.setState({status: true});
            this.getAccount();
          }}
        />
        {this.state.status
          ? this.state.dataSource.map(dataSource => (
              <Text>{dataSource.name}</Text>
            ))
          : null}
        <Button title="post" onPress={() => this.postAccount()} />
        <Button title="delete" onPress={() => this.deleteAccount()} />
        <Button title="edit" onPress={() => this.editAccount()} />
      </View>
    );
  }
}
