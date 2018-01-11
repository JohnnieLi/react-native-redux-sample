import React, { Component } from 'react';
import {
 Platform,
 AppRegistry
} from 'react-native';
import {createStore, applyMiddleware, combineReducers} from "redux";
import {Provider} from "react-redux";
import { Navigation } from 'react-native-navigation';
import registerScreens from './components/screens/screens.js';
import * as reducers from "./reducers/index";
import * as appActions from "./reducers/app/actions";
import thunk from "redux-thunk";
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);

registerScreens(store, Provider);

export default class  App extends Component {

  constructor(props) {
    super(props);
    store.subscribe(this.onStoreUpdate.bind(this));
    store.dispatch(appActions.appInitialized());
  }
 
  onStoreUpdate() {

      console.log("onStoreUpdate", store.getState().app);
      let {root} = store.getState().app;

      // handle a root change
      // if your app doesn't change roots in runtime, you can remove onStoreUpdate() altogether
      if (this.currentRoot != root) {
          this.currentRoot = root;
          this.startApp(root);
      }
    }
    
  startApp2(root) {
      console.log('startApp',root);
    switch (root) {
        case 'login':
          Navigation.startSingleScreenApp({
                    screen: {
                    screen: 'ReactNativeReduxExample.Login', // unique ID registered with Navigation.registerScreen
                    title: 'Welcome', // title of the screen as appears in the nav bar (optional)
                    navigatorStyle: {}, // override the navigator style for the screen, see "Styling the navigator" below (optional)
                    navigatorButtons: {} // override the nav buttons for the screen, see "Adding buttons to the navigator" below (optional)
                    },
                });
                return;
              
        case 'after-login':
            Navigation.startTabBasedApp({
                tabs: [
                {
                    label: 'Home',
                    screen: 'ReactNativeReduxExample.HomeTab',
                    icon: require('./img/checkmark.png'),
                    selectedIcon: require('./img/checkmark.png'),
                    title: 'Hey',
                    overrideBackPress: true,
                    navigatorStyle: {}
                },

                {
                    label: 'Search',
                    screen: 'ReactNativeReduxExample.SearchTab',
                    icon: require('./img/checkmark.png'),
                    selectedIcon: require('./img/checkmark.png'),
                    title: 'Hey',
                    navigatorStyle: {}

                    
                }
               
                ],
            });
            return;
        case 'skipLogIn':
            Navigation.startTabBasedApp({
                tabs: [
                    {
                        label: 'Home',
                        screen: 'ReactNativeReduxExample.HomeTab',
                        icon: require('./img/checkmark.png'),
                        selectedIcon: require('./img/checkmark.png'),
                        title: 'Hey',
                        overrideBackPress: false,
                        navigatorStyle: {}
                    },

                    {
                        label: 'Search',
                        screen: 'ReactNativeReduxExample.SearchTab',
                        icon: require('./img/checkmark.png'),
                        selectedIcon: require('./img/checkmark.png'),
                        title: 'Hey',
                        navigatorStyle: {}


                    }

                ],
            });
            return;
          default: 
            console.log("Not Root Found");
        }
    }

  startApp(root) {
        switch (root) {
            case 'login':
                if (Platform.OS === 'ios') {
                    Navigation.startSingleScreenApp({
                        screen: {
                            screen: 'example.Login',
                            title: 'Login',
                            navigatorStyle: {}
                        },
                        passProps: {
                            str: 'This is a prop passed in \'startSingleScreenApp()\'!',
                            obj: {
                                str: 'This is a prop passed in an object!',
                                arr: [
                                    {
                                        str: 'This is a prop in an object in an array in an object!'
                                    }
                                ],
                                arr2: [
                                    [
                                        'array of strings',
                                        'with two strings'
                                    ],
                                    [
                                        1, 2, 3
                                    ]
                                ]
                            },
                            num: 1234,
                            fn: function () {
                                return 'Hello from a function!';
                            }
                        }
                    });
                } else {
                    Navigation.startSingleScreenApp({
                        screen: {
                            screen: 'example.Login',
                            title: 'Login',
                            navigatorStyle: {}
                        },
                        passProps: {
                            str: 'This is a prop passed in \'startSingleScreenApp()\'!',
                            obj: {
                                str: 'This is a prop passed in an object!',
                                arr: [
                                    {
                                        str: 'This is a prop in an object in an array in an object!'
                                    }
                                ],
                                arr2: [
                                    [
                                        'array of strings',
                                        'with two strings'
                                    ],
                                    [
                                        1, 2, 3
                                    ]
                                ]
                            },
                            num: 1234,
                            fn: function () {
                                return 'Hello from a function!';
                            }
                        }
                    });
                    // Navigation.startSingleScreenApp({
                    //   screen: {
                    //     title: 'Example',
                    //     screen: 'example.TopTabsScreen',
                    //     topTabs: [
                    //       {
                    //         screenId: 'example.FirstTabScreen',
                    //         title: 'Tab1',
                    //         passProps: {
                    //           str: 'This is a prop passed to Tab1',
                    //           fn: () => 'Hello from a function passed as passProps!'
                    //         }
                    //       },
                    //       {
                    //         screenId: 'example.PushedScreen',
                    //         title: 'Tab2',
                    //         passProps: {
                    //           str: 'This is a prop passed to Tab2'
                    //         }
                    //       },
                    //       {
                    //         screenId: 'example.ListScreen',
                    //         title: 'Tab3',
                    //         passProps: {
                    //           str: 'This is a prop passed to Tab3'
                    //         }
                    //       }
                    //     ],
                    //     navigatorStyle: {}
                    //   },
                    //   drawer: { // optional, add this if you want a side menu drawer in your app
                    //     left: { // optional, define if you want a drawer from the left
                    //       screen: 'example.SideMenu' // unique ID registered with Navigation.registerScreen
                    //     },
                    //     disableOpenGesture: false // optional, can the drawer be opened with a swipe instead of button
                    //   }
                    // });
                }
                return;
            case 'after-login':
                Navigation.startTabBasedApp({
                    tabs: [
                        {
                            label: 'One',
                            screen: 'example.HomeTab',
                            icon: require('./img/checkmark.png'),
                            selectedIcon: require('./img/checkmark.png'),
                            title: 'Screen One',
                            overrideBackPress: false,
                            navigatorStyle: {},
                        },
                        {
                            label: 'Two',
                            screen: 'example.HomeTab2',
                            icon: require('./img/checkmark.png'),
                            selectedIcon: require('./img/checkmark.png'),
                            title: 'Screen Two',
                            overrideBackPress: false,
                            navigatorStyle: {}
                        },
                        {
                            label: 'Three',
                            screen: 'example.HomeTab3',
                            icon: require('./img/checkmark.png'),
                            selectedIcon: require('./img/checkmark.png'),
                            title: 'Screen Three',
                            overrideBackPress: false,
                            navigatorStyle: {}
                        },
                        {
                            label: 'Four',
                            screen: 'example.HomeTab4',
                            icon: require('./img/checkmark.png'),
                            selectedIcon: require('./img/checkmark.png'),
                            title: 'Screen Four',
                            overrideBackPress: false,
                            navigatorStyle: {}
                        },
                        {
                            label: 'Five',
                            screen: 'example.SearchTab',
                            icon: require('./img/checkmark.png'),
                            selectedIcon: require('./img/checkmark.png'),
                            title: 'Screen Five',
                            navigatorStyle: {}
                        }
                    ],
                    passProps: {
                        str: 'This is a prop passed in \'startTabBasedApp\'!',
                        obj: {
                            str: 'This is a prop passed in an object!',
                            arr: [
                                {
                                    str: 'This is a prop in an object in an array in an object!'
                                }
                            ]
                        },
                        num: 1234
                    },
                    animationType: 'slide-down',
                    title: 'Redux Example',
                    drawer: { // optional, add this if you want a side menu drawer in your app
                        left: { // optional, define if you want a drawer from the left
                            screen: 'example.SideMenu' // unique ID registered with Navigation.registerScreen
                        },
                        disableOpenGesture: false, // optional, can the drawer be opened with a swipe instead of button
                        passProps: {
                            title: 'Hello from SideMenu'
                        }
                    },
                    appStyle: {
                        bottomTabBadgeTextColor: '#ffffff',
                        bottomTabBadgeBackgroundColor: '#ff0000'
                    }
                });
                return;
            default:
                console.error('Unknown app root');
        }
    }
}
