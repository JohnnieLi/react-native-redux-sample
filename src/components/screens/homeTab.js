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
import CardViewComponent from '../cardView.component';
import ProgressBar from '../progressBar.component';

export  class Hometab extends Component {

  constructor(props){
      super(props)
      this.state = {
          isLoading: true,
      }
      console.log(this.state.isLoading);
  }


    componentDidMount() {
        var self = this;
        setTimeout(function () {
            self.setState({ isLoading: false });
        }, 3000);
    }


  render() {
    return (
        this.state.isLoading ? <View style={styles.progressBar}><ProgressBar/></View> :
            (
                <View style={styles.container}>
                    <Text style={styles.welcome}>
                        {this.props.app.username}
                    </Text>
                    <CardViewComponent />
                </View>
            )
    );
  }
}

const styles = StyleSheet.create({
    progressBar: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
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

export default connect(mapStateToProps,null)(Hometab);

