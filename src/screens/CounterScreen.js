import React, {useReducer} from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const reducer = (state,action) => {
    // state === {counter:number}
    // action === {type: 'inc' || 'dec', payload: 1}
    switch(action.type){
        case 'inc':
            return {...state, counter:  state.counter + action.payload}
        case 'dec':
            return {...state, counter:  state.counter - action.payload}
        default:
            return state;
    }
}

const CounterScreen = () => {

    const [state, dispatch] = useReducer(reducer,{counter:0});

    return <View>
        <Button
        onPress={() => dispatch({type: 'inc', payload: 1})}
        title="Increase"
        />
        <Button
        onPress={() => dispatch({type: 'dec', payload: 1})}
        title="Decrease"
        />
            <Text>Current Count:</Text>
            <Text>{state.counter}</Text>
    </View>
};


const styles = StyleSheet.create({});


export default CounterScreen;