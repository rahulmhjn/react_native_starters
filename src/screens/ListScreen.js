import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

const listScreen = () => {
    const friends = [
        {name: 'Friend#1',age:'12'},
        {name: 'Friend#2',age:'12'},
        {name: 'Friend#3',age:'11'},
        {name: 'Friend#4',age:'12'},
        {name: 'Friend#5',age:'12'},
        {name: 'Friend#6',age:'11'},
        {name: 'Friend#7',age:'12'},
        {name: 'Friend#8',age:'12'},
        {name: 'Friend#9',age:'11'},
    ];

    return (
        <FlatList
        //  horizontal={true}
        //  showsHorizontalScrollIndicator={false}
         keyExtractor={(friend) => friend.name}
         data={friends}
         renderItem={ ({item}) => {
            // element === {item: {name:'Friend#1'},index: 0}
            // item === {name:'Friend#1'}
            return <Text style={styles.textStyle} >{item.name} - Age {item.age}</Text>
         }}
          />
    )
};

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50
    }
});

export default listScreen;