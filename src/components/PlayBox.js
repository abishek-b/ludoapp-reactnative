import React from 'react';
import { StyleSheet, View, Text} from 'react-native';

const PlayBox = props => {
    let color = 'white';
    if(props.type == 'safe'){
        color = 'grey';
    }else if(props.type == 'player' || props.type == 'start'){
        color = props.color;
    }
    
    return (
        <View style={{ ...styles.outer_box, backgroundColor: color  }}>
            <Text>{props.index}</Text>
        </View>
    )
}



const styles = StyleSheet.create({
    outer_box: {
        flex: 1,
        aspectRatio: 1,
        borderWidth: 1,
        borderColor: "#000",
    }
})


export default PlayBox;