import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    ListView,
    View
} from 'react-native';

import * as firebase from 'firebase';
import styles from './styles.js';
import StatusBar from './components/StatusBar.js';
import ListItem from './components/ListItem';

var config = {
    apiKey: "AIzaSyDCrSCnomhNrGVTfBtwXogPTqMD97I5-OE",
    authDomain: "testpproj.firebaseapp.com",
    databaseURL: "https://testpproj.firebaseio.com",
    storageBucket: "testpproj.appspot.com",
    messagingSenderId: "92827460453"
};
firebase.initializeApp(config);

const ref = firebase.database().ref('/users');

class GroceryApp extends Component {
    constructor() {
        super();
        var users = {};
        ref.on('value', (snap) => {
            var items = [];

            snap.forEach(item=>{
                if(item.val().email!== undefined)
                {
                    console.log(item.val().email)
                }
            });

            users.forEach((item) => {
                items.push(item.email);
                listenForItems(users)
            });
        });
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(['row 1', 'row 2'])
        };
    }

    listenForItems(users) {
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(users)
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar title="Grocery List"/>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) =>
                     <View style={styles.li}>
                         <Text style={styles.liText}>{rowData}</Text>
                     </View>}
                />
            </View>
        );
    }
}

AppRegistry.registerComponent('GroceryApp', () => GroceryApp);
