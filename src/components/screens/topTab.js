import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {Navigation} from 'react-native-navigation';
import {connect} from "react-redux";


export  class TopTab extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          TopTab!!! modified by John!!
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  
});

const mapStateToProps = state => {
    return {
        app: state.app
    }
}

export default connect(mapStateToProps,null)(TopTab);