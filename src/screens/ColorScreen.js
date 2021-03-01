import React, {useState} from 'react';
import { View, Text, Button, StyleSheet, FlatList } from 'react-native';


const ColorScreen = () => {

    const [colors, setColors] = useState([]);
    // console.log(colors);

    return <View flex = {1}>
        <Button title="Add Color" onPress={() => {
             setColors([...colors,randomRgb()])
        }} />
        
         <FlatList
            keyExtractor={(item) => item}
            data={colors}
            renderItem={({item}) => {
                return <View 
                style={{ height: 100, width: 100, backgroundColor: item  }}
             />
            }}
         />
    </View>
};


const randomRgb = () => {
    const red = Math.random(Math.random()) * 256
    const green = Math.random(Math.random()) * 256
    const blue = Math.random(Math.random()) * 256

    return `rgb( ${red}, ${green}, ${blue} )`;
}

const styles = StyleSheet.create({});

export default ColorScreen;