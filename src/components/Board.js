import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, Dimensions, Image } from 'react-native';

import Color from '../config/color';
import PlayerBase from './PlayerBase';
import PawnMoveSpace from './PawnMoveSpace';

import { changePawn } from '../actions/playerActions';
const Board = props => {

    const hightlightHome = {
        blue: false, red: false, green: false, yellow: false,
    }

    const nextPawn = {
        blue: 'red', red: 'green', green: 'yellow', yellow: 'blue',
    }

    if(!props.pawn.play_zone.hasOwnProperty('blue')){
        let play_zone = {}
        Object.keys(hightlightHome).forEach(color=>{
            var i = 0;
            play_zone[color] = [];   
            while(i<18){
                play_zone[color].push([]);
                i += 1;
            } 
        })
        props.initPlayZone(play_zone)
    }


    const canPlayerMove = () => {
        if (props.pawn.dice_value == 6) {
            hightlightHome[props.pawn.current_pawn] = true
            return true
        }


        return false
    }


    if (!canPlayerMove() && !props.pawn.ready_to_roll) {
        // setTimeout(() => {
            props.changePawn(nextPawn[props.pawn.current_pawn])
        // },500)
    }

    return (
        <View style={styles.pawn_home}>
            <View style={{ flexDirection: 'row' }}>
                <PlayerBase width="40%" color={Color.red} playerColor="red" hightlight={hightlightHome.red} />
                <PawnMoveSpace aspectRatio={0.5} zone="green" width="20%" color={Color.green} position="top" />
                <PlayerBase width="40%" color={Color.green} playerColor="green" hightlight={hightlightHome.green} pawn={props.pawn.pawn_pos.green} />
            </View>
            <View style={{ flexDirection: 'row' }}>
                <PawnMoveSpace aspectRatio={2} zone="red" width="40%" color={Color.red} position="left" />
                <View width="20%" style={{ flex: 1, aspectRatio: 1 }}></View>
                <PawnMoveSpace aspectRatio={2} zone="yellow" width="40%" color={Color.yellow} position="right" />
            </View>
            <View style={{ flexDirection: 'row' }}>
                <PlayerBase width="40%" color={Color.blue} playerColor="blue" hightlight={hightlightHome.blue} pawn={props.pawn.pawn_pos.blue} />
                <PawnMoveSpace aspectRatio={0.5} zone="blue" width="20%" color={Color.blue} position="bottom" />
                <PlayerBase width="40%" color={Color.yellow} playerColor="yellow" hightlight={hightlightHome.yellow} pawn={props.pawn.pawn_pos.yellow} />
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
        pawn: state.pawn
    }
}

const mapDispatchToProps = dispatch => {
    return {
        changePawn: value => {
            // console.log(value)
            dispatch(changePawn(value))
        },
        setPrevious: value => {
            dispatch(
                {
                    type: 'CHANGE_PREVIOUS_PAWN',
                    payload: {
                        color: value
                    }
                }
            )
        },
        initPlayZone: play_zone=>{
            dispatch({
                type : 'INIT_PLAY_ZONE',
                payload:{
                    play_zone
                }
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Board);