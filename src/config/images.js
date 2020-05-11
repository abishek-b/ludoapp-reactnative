import React from 'react';
import { Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    image: {
        position: 'absolute',
        zIndex: 1,
        top: -10,
        width: '100%',
        height: '100%',

    }
})

export const images = {
    blue: <Image source={require('../assets/pointerblue.png')} style={styles.image} />,
    red: <Image source={require('../assets/pointerred.png')} style={styles.image} />,
    green: <Image source={require('../assets/pointergreen.png')} style={styles.image} />,
    yellow: <Image source={require('../assets/pointeryellow.png')} style={styles.image} />,
}