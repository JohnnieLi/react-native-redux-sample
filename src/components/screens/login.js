import React, {Component} from 'react';
import {Button, Text, TextInput, View,
    KeyboardAvoidingView, TouchableOpacity,AsyncStorage,StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import * as  appActions from '../../reducers/app/actions';
import {Navigation} from "react-native-navigation";

export class Login extends Component {

    constructor(props) {

        super(props);
        console.log('Login screen', this.props.root);
        this.state = {
            username: '',
            password: ''
        };

        // this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }

    // componentDidMount(){
    //     this._loadInitalState().done();
    // }
    //
    // _loadInitalState = async() => {
    //     var value = await AsyncStorage.getItem('user');
    //     if(value!=null){
    //         this.props.navigation.navigate('home');
    //     }
    // }

    render() {
        return (
                <KeyboardAvoidingView behavior="padding" style={style.wrapper}>
                    <View style={style.container}>

                        <Text style={style.header}> - LOGIN -</Text>

                        <TextInput
                            style={style.textInput} placeholder='Username'
                            onChangeText={ (username) => this.setState({username:username})}
                            underlineColorAndroid='transparent'
                        />

                        <TextInput
                            style={style.textInput} placeholder='Password'
                            onChangeText={ (password) => this.setState({password:password})}
                            underlineColorAndroid='transparent'
                        />

                        <TouchableOpacity
                            style={style.btn}
                            onPress={this.onLoginPress.bind(this)}>
                            <Text>Log in</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={this.skip}>
                            <Text>Skip Login</Text>
                        </TouchableOpacity>

                    </View>
                </KeyboardAvoidingView>
        );
    }

    login = () =>{
        this.props.dispatch(appActions.userNameChange('Johnnie'));
        this.props.dispatch(appActions.login());
        // this.props.navigator.push({
        //     screen: 'example.HomeTab',
        //     title: 'Pushed Screen!',
        //     name:'test name',
        //     passProps: {
        //         str: 'This is a prop passed in \'startSingleScreenApp()\'!',
        //         obj: {
        //             str: 'This is a prop passed in an object!',
        //             arr: [
        //                 {
        //                     str: 'This is a prop in an object in an array in an object!'
        //                 }
        //             ],
        //             arr2: [
        //                 [
        //                     'array of strings',
        //                     'with two strings'
        //                 ],
        //                 [
        //                     1, 2, 3
        //                 ]
        //             ]
        //         },
        //         num: 1234,
        //         fn: function () {
        //             return 'Hello from a function!';
        //         }
        //     }
        // });
    }

    skip = () =>{
        //alert('skip')
        this.props.dispatch(appActions.login());
        //this.props.dispatch(appActions.skipLogIn());
    }

    /*
    onLoginPress:
      Changes the root value of the app to be 'after-login', changing it to tab view
    */
    onLoginPress(){
        this.props.dispatch(appActions.userNameChange(this.state.username));
        this.props.dispatch(appActions.login());
    }
}

const style = StyleSheet.create({
    wrapper : {
        flex: 1,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#2896',
        paddingLeft: 40,
        paddingRight: 40,
    },
    header: {
        fontSize: 24,
        marginBottom: 60,
        color: '#fff',
        fontWeight: 'bold',
    },
    textInput: {
        alignSelf: 'stretch',
        padding: 16,
        marginBottom: 20,
        backgroundColor: '#fff',
    },
    btn: {
        alignSelf: 'stretch',
        padding: 20,
        alignItems: 'center',
        backgroundColor: '#01c999',
    },
})

const mapStateToProps = state => {
    return {
        root: state.root
    }
}

export default connect(mapStateToProps,null)(Login);