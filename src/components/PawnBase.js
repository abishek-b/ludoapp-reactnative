import React from 'react';
import { View, StyleSheet, Text, Image, TouchableHighlight } from 'react-native';



const PawnBase = props => {
    let image = null;
    if (props.playerColor == 'yellow') {
        image = <Image source={require('../assets/pointeryellow.png')} style={styles.image} />
    } else if (props.playerColor == 'red') {
        image = <Image source={require('../assets/pointerred.png')} style={styles.image} />
    } else if (props.playerColor == 'blue') {
        image = <Image source={require('../assets/pointerblue.png')} style={styles.image} />
    } else if (props.playerColor == 'green') {
        image = <Image source={require('../assets/pointergreen.png')} style={styles.image} />
    }


    return (
        <TouchableHighlight >
            <View style={{ ...styles.pawn_box, backgroundColor: props.color, ...props.hightlight }}>
                {image}
            </View>
        </TouchableHighlight>
    )
}



const styles = StyleSheet.create({
    pawn_box: {
        width: '50%',
        aspectRatio: 1,
        backgroundColor: 'red'
    },
    image : {
        position: 'absolute',
        zIndex: 1,
        top: -10,
        // left : -20,
        width: '100%',
        height: '100%',

    }
})


export default PawnBase;