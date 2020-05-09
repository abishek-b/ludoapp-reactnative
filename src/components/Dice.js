import React from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet, Text, TouchableHighlight } from 'react-native';

const Dice = props => {

    let highlight = {}
    if(props.dice.ready_to_roll){
        highlight = {
            backgroundColor : props.dice.current_pawn
        }
    }
    const rollDice = ()=>{
        if(props.dice.ready_to_roll){
            props.rollDice()
        }
    }

    return (
        <View style={styles.dice_container}>
            <TouchableHighlight onPress={rollDice}>
                <View style={{...styles.dice, ...highlight }} >
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
        dice: state.pawn
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