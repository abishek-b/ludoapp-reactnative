import React from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet, Text, TouchableHighlight } from 'react-native';

const Dice = props => {
    // const dice_number = 5;
    // const rollDie
    return (
        <View style={styles.dice_container}>
            <TouchableHighlight onPress={props.rollDice}>
                <View style={styles.dice} >
                    <Text style={styles.dice_number}>{props.dice.dice_value}</Text>
                </View>
            </TouchableHighlight>
        </View>
    )
}


const styles = StyleSheet.create({
    dice_container: {
        marginTop: 50,
        flex: 1,
        alignItems: 'center'
    },
    dice: {
        width: 100,
        aspectRatio: 1,
        backgroundColor: '#ddd',
        justifyContent: 'center'
    },
    dice_number: {
        textAlign: "center",
        fontSize: 28,

    }
})


const mapStateToProps = state => {
    // console.log(state)
    return {
        dice: state.rollDice
    }
}

const mapDispatchToProps = dispatch => {
    return {
        rollDice: value => {
            // console.log(value)
            dispatch({
                type: "ROLL_DICE",
                value: Math.floor(Math.random() * 6 + 1)
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dice);