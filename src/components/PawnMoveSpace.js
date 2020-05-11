import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View } from 'react-native';

import PlayBox from './PlayBox';
import { images } from '../config/images'

const PawnMoveSpace = props => {
    let pawn_box = [
        [
            { key: 6, type: 'common', next: 7 },
            { key: 5, type: 'common', next: 6 },
            { key: 4, type: 'safe', next: 5 },
            { key: 3, type: 'common', next: 4 },
            { key: 2, type: 'common', next: 3 },
            { key: 1, type: 'common', next: 2 },
        ],
        [
            { key: 7, type: 'common', next: 13 },
            { key: 8, type: 'player', next: 8 },
            { key: 9, type: 'player', next: 9 },
            { key: 10, type: 'player', next: 10 },
            { key: 11, type: 'player', next: 12 },
            { key: 12, type: 'player', next: 0 },
        ],
        [
            { key: 13, type: 'common', next: 14 },
            { key: 14, type: 'start', next: 15 },
            { key: 15, type: 'common', next: 16 },
            { key: 16, type: 'common', next: 17 },
            { key: 17, type: 'common', next: 18 },
            { key: 18, type: 'common', next: 1 },
        ],
    ]

    switch (props.position) {
        case 'right':
            pawn_box = pawn_box.map((col, i) => col.reverse());
            pawn_box = pawn_box[0].map((col, i) => pawn_box.map(row => row[i]));
            break;
        case 'left':
            pawn_box = pawn_box[0].map((col, i) => pawn_box.map(row => row[i]).reverse());
            break;
        case 'bottom':
            pawn_box = pawn_box.map((col, i) => col.reverse());
            pawn_box = pawn_box[0].map((col, i) => pawn_box.map(row => row[i]));
            pawn_box = pawn_box.map((col, i) => col.reverse());
            pawn_box = pawn_box[0].map((col, i) => pawn_box.map(row => row[i]));
            break;
        default:
            break;
    }


    return (
        <View style={{ ...styles.outer_box, aspectRatio: props.aspectRatio, width: props.width }}>
            {
                pawn_box.map((column, index) => {
                    return (
                        <View key={index}>
                            {
                                column.map(item => {
                                    var pawns = props.pawn.play_zone[props.zone][item.key - 1]
                                    // console.log(pawns)
                                    return (
                                        <PlayBox key={index + "-" + item.key} index={item.key} style={styles.pawn_box} type={item.type} color={props.color}>
                                            {
                                                pawns.map(pawn=>{
                                                    return images[pawn[0]]
                                                    
                                                })
                                            }
                                        </PlayBox>
                                    )
                                })
                            }
                        </View>
                    )
                })
            }

        </View>
    )
}



const styles = StyleSheet.create({
    outer_box: {
        // flex: 1,
        // aspectRatio: 0.5,
        flexDirection: 'row',
        backgroundColor: 'white'
    },
    pawn_box: {
        flex: 1,
        aspectRatio: 1,
        borderWidth: 2,
        borderColor: "#fff",
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
    }

})



const mapStateToProps = state => {
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

export default connect(mapStateToProps, mapDispatchToProps)(PawnMoveSpace);