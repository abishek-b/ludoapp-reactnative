import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, Dimensions, Image } from 'react-native';

import Color from '../config/color';
import PlayerBase from './PlayerBase';
import PawnMoveSpace from './PawnMoveSpace';
const Board = props => {
    const hightlightHome = {
        blue: false,
        red: false,
        green: false,
        yellow: false,
    }
    if (props.dice.dice_value == 6) {
        hightlightHome[props.pawn.current_pawn] = true
    }

    const changePawn = ()=>{

    }
    // console.log(hightlightHome)
    return (
        <View style={styles.pawn_home}>
            <View style={{ flexDirection: 'row' }}>
                <PlayerBase width="40%" color={Color.red} playerColor="red" hightlight={hightlightHome.red} pawn={props.pawn.pawn_pos.red}/>
                <PawnMoveSpace aspectRatio={0.5} width="20%" color={Color.green} position="top" />
                <PlayerBase width="40%" color={Color.green} playerColor="green"  hightlight={hightlightHome.green} pawn={props.pawn.pawn_pos.green}/>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <PawnMoveSpace aspectRatio={2} width="40%" color={Color.red} position="left" />
                <View width="20%" style={{ flex: 1, aspectRatio: 1 }}></View>
                <PawnMoveSpace aspectRatio={2} width="40%" color={Color.yellow} position="right" />
            </View>
            <View style={{ flexDirection: 'row' }}>
                <PlayerBase width="40%" color={Color.blue} playerColor="blue"  hightlight={hightlightHome.blue} pawn={props.pawn.pawn_pos.blue}/>
                <PawnMoveSpace aspectRatio={0.5} width="20%" color={Color.blue} position="bottom" />
                <PlayerBase width="40%" color={Color.yellow} playerColor="yellow"  hightlight={hightlightHome.yellow} pawn={props.pawn.pawn_pos.yellow}/>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    board: {
        flex: 1,
        aspectRatio: 1,
        backgroundColor: '#d7d7d7'
    },
    pawn_home: {
        // justifyContent: 'center',
        marginTop: 50,
        backgroundColor: "grey",
    },

})




const mapStateToProps = state => {
    // console.log(state)
    return {
        dice: state.rollDice,
        pawn: state.pawn
    }
}

const mapDispatchToProps = dispatch => {
    return {
        changePawn: value => {
            console.log(value)
            dispatch({
                type: "CHANGE_PAWN",
                value: value
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Board);