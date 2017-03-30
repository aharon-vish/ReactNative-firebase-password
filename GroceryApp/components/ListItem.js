import React, {Component} from 'react';
import ReactNative from 'react-native';
const styles = require('../styles.js');
const { View, TouchableHighlight,Image, Text } = ReactNative;

class ListItem extends Component {
    constructor() {
        super();
        this.icons = {     //Step 2
            'open': require('../images/ic_add_black_24dp_1x.png'),
            'close': require('../images/ic_remove_black_24dp_1x.png')
        }
    };

    render() {
        let icon = this.icons['open'];

        //if (this.state.expanded) {
        //    icon = this.icons['close'];   //Step 4
        //}
        return (
       <View>
           <Text> This text is the target to be highlighted </Text>
           <TouchableHighlight  style={styles.buttonImage}>
               <Image
                   source={icon}></Image>
           </TouchableHighlight>
       </View>
        );
    }
}

module.exports = ListItem;