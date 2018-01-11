import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {Navigation} from 'react-native-navigation';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import * as  appActions from '../../reducers/app/actions';


export  class Hometab4 extends Component {

  constructor(props){
      super(props)
      console.log(this.props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
            {this.props.app.username}
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

export default connect(mapStateToProps,null)(Hometab4);

