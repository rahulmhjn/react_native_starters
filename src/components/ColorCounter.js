import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';


const ColorCounter = ({ name , onIncrease, onDecrease}) => {
    return (
        <View>
            <Text>{name}</Text>
            <Button
            onPress={() => onIncrease()} 
            title= {`Increase ${name}`}
            />
            <Button
            onPress={() => onDecrease()} 
            title={`Decrease ${name}`} 
            />
        </View>
    )
};


const styles = StyleSheet.create({});

export default ColorCounter;