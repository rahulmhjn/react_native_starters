import React,{ useReducer } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 15;

const reducer = (state, action) => {
    // state === {red:number , blue: number, green: number}
    // action === { type: 'change_red' || 'change_blue' || 'change_green', payload: 15 || -15 }

    switch (action.type){
        case 'change_red':
            return (state.red + action.payload > 255 || state.red + action.payload < 0)
            ? state: { ...state, red: state.red + action.payload};
            
            // never going to do state.red= state.red - 15
            // return { ...state, red: state.red + action.amount}; //change to the copy of state //red prop overwrites the ...state
        case 'change_green':
            if(state.green + action.payload > 255 || state.green + action.payload < 0){
                return state;
            }
            return { ...state, green: state.green + action.payload};
        case 'change_blue':
            if(state.blue + action.payload > 255 || state.blue + action.payload < 0){
                return state;
            }
            return { ...state, blue: state.blue + action.payload};
        default:
            return state
    }
};

const SquareScreen = () => {

    const [state,dispatch] = useReducer(reducer, {red: 0, green:0, blue:0});
    // console.log(state); //{red: 0, green:0, blue:0}
    const {red, green, blue } = state;
    var rgb = `rgb( ${red}, ${green}, ${blue} )`;

    return(
        <View>
            <ColorCounter 
            onDecrease={() => dispatch({type: 'change_red', payload:-1 * COLOR_INCREMENT })}
            onIncrease={() => dispatch({type: 'change_red', payload:COLOR_INCREMENT }) }
            name="Red" 
            />
            <ColorCounter
            onDecrease={() => dispatch({type: 'change_green', payload:-1 * COLOR_INCREMENT })}
            onIncrease={() => dispatch({type: 'change_green', payload:COLOR_INCREMENT }) }
            name="Green" 
            />
            <ColorCounter 
            onDecrease={() => dispatch({type: 'change_blue', payload:-1 * COLOR_INCREMENT }) }
            onIncrease={() => dispatch({type: 'change_blue', payload:COLOR_INCREMENT }) }
            name="Blue" 
            />
            <Text style={{ height: 100, width: 100, backgroundColor: rgb  }}></Text>
            <Text>rgb({red},{green},{blue})</Text>
        </View>
    )
};


const styles = StyleSheet.create({});

export default SquareScreen;