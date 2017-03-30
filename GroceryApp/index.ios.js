import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    ListView,
    View,
    Image,
} from 'react-native';
import {
    Button
} from 'react-native-elements';

import * as firebase from 'firebase';
import styles from './styles.js';
import StatusBar from './components/StatusBar.js';
import { List, ListItem } from 'react-native-elements'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyDyVQv8JFcDz2wyrsQt9xgip2xCCDKSy78",
    authDomain: "chrome-extensions-793ac.firebaseapp.com",
    databaseURL: "https://chrome-extensions-793ac.firebaseio.com",
    storageBucket: "chrome-extensions-793ac.appspot.com",
    messagingSenderId: "44666153436"
};
firebase.initializeApp(config);

const ref = firebase.database().ref('/passwords');

const list = [
    {
        name: 'Amy Farha',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subtitle: 'Vice President'
    },
    {
        name: 'Chris Jackson',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Vice Chairman'
    }
];

class GroceryApp extends Component {
    constructor() {
        super();
        var users = [];
        ref.on('value', (snap) => {
            this.listenForItems(users);
        });
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

        this.state = {
            dataSource: ds.cloneWithRows(['row 1', 'row 2']),
            title:'Password List'
        };
    }

    listenForItems(users) {
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(users)
        });
    }
    renderRow (rowData, sectionID) {
        return (
            <View>
            <ListItem
                //roundAvatar
                key={sectionID}
                title={rowData.email}
                //subtitle={rowData.subtitle}
                //avatar={{uri:rowData.avatar_url}}
                onPress={() => console.log('Pressed')}
                rightIcon={{ name: 'arrow-right', type: 'font-awesome', style: { marginRight: 10, fontSize: 15 } }}
            />
            <Text style={{borderRadius: 4,borderWidth: 0.5,borderColor: '#d6d7da'}}>adsagdkjsadg</Text>
            </View>
        )
    }
    //style={{height:0,opacity:1}}
    render() {
        return (
            <View style={styles.container}>
                <StatusBar title={this.state.title}/>
                <ListView
                renderRow={this.renderRow}
                dataSource={this.state.dataSource}>
                </ListView>
            </View>
        );
    }
}
//<List>
//<ListView
//renderRow={this.renderRow}
//dataSource={this.state.dataSource}
///>
//</List>
//<Text styel={{fontSize: 169}}>1</Text>
AppRegistry.registerComponent('GroceryApp', () => GroceryApp);
