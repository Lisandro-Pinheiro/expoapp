import { Component } from "react";
import MapView from "react-native-maps";
import { View, StyleSheet } from "react-native";

export default class MapPage  extends Component {
    

    private styles = StyleSheet.create ({
        map: {
            height: '100%',
            width: '100%'
        }
    })
    
    render() {
        return (
            <View> 
                <MapView style={this.styles.map}/>
            </View>
        );
    }
}

