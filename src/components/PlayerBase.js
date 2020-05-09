import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, Image, TouchableHighlight } from 'react-native';
import {startPawn} from '../actions/playerActions';
// import PawnBox from './PawnBox';
const PlayerBase = props => {

    let image = {
        blue: <Image source={require('../assets/pointerblue.png')} style={styles.image} />,
        red: <Image source={require('../assets/pointerred.png')} style={styles.image} />,
        green: <Image source={require('../assets/pointergreen.png')} style={styles.image} />,
        yellow: <Image source={require('../assets/pointeryellow.png')} style={styles.image} />,
    }

    let hightlight = {}
    let pawns = [
        [{}, null],
        [{}, null],
        [{}, null],
        [{}, null]
    ]
    if (props.hightlight) {
        hightlight = {
            borderColor: 'black',
            borderWidth: 2,
        }
    }
    const getImageContainer = (image, index) => {
        return (<TouchableHighlight style={{ flex: 1 }} onPress={props.startPawn.bind(this, index, props.playerColor)} >
            {image}
        </TouchableHighlight>)
    }
    props.pawn.pawn_pos[props.playerColor].map((value, index) => {
        pawns[index] = [value == 0 ? hightlight : {}, value == 0 ? getImageContainer(image[props.playerColor], index)
            : null];
    })
 


    return (
        <View style={{ ...styles.outer_box, width: props.width, backgroundColor: props.color }}>
            <View style={styles.box}>
                <View style={{ justifyContent: 'space-around', flex: 1 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                        <View style={{ ...styles.pawn_box, backgroundColor: props.color, ...pawns[0][0] }}>
                            {pawns[0][1]}
                        </View>
                        <View style={{ ...styles.pawn_box, backgroundColor: props.color, ...pawns[1][0] }}>
                            {pawns[1][1]}
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                        <View style={{ ...styles.pawn_box, backgroundColor: props.color, ...pawns[2][0] }}>
                            {pawns[2][1]}
                        </View>
                        <View style={{ ...styles.pawn_box, backgroundColor: props.color, ...pawns[3][0] }}>
                            {pawns[3][1]}
                        </View>

                    </View>
                </View>
            </View>
        </View>
    )
}



const styles = StyleSheet.create({
    outer_box: {
        // flex: 1,
        aspectRatio: 1,
        borderWidth: 1,
        borderColor: "#000"
    },
    pawn_box: {
        width: '25%',
        aspectRatio: 1,
        backgroundColor: 'red'
    },
    box: {
        flex: 1,
        // borderRadius: 150,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignContent: 'center',
        margin: 20,
        aspectRatio: 1
        // height: 160
    },
    square: {
        flex: 1,
        aspectRatio: 1,
        justifyContent: 'center',
        alignContent: 'center',
    },
    image: {
        position: 'absolute',
        zIndex: 1,
        top: -10,
        // left : -20,
        width: '100%',
        height: '100%',

    }

})

const mapStateToProps = state => {
    // console.log(state)
    return {
        pawn: state.pawn
    }
}

const mapDispatchToProps = dispatch => {
    return {
        startPawn: (index, color) => {
            dispatch(startPawn(index, color))
            
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerBase);