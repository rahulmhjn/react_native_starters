import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({navigation}) => {
  // console.log(props.navigation);

  return <View>
    <Text style={styles.text}>HomeScreen</Text>
    <Button
      onPress={() => navigation.navigate('Components')}
      title="Go to Components Demo"
    />
    <Button
      title="Go to List Demo"
      onPress={() => navigation.navigate('List')}
    />
    <Button
      title="Go to Image Screen"
      onPress={() => navigation.navigate('Image')}
    />
    <Button
      title="Go to Counter Screen"
      onPress={() => navigation.navigate('Counter')}
    />
    <Button
      title="Go to Color Screen"
      onPress={() => navigation.navigate('Color')}
    />
    <Button
      onPress={() => navigation.navigate('Square')}
      title="Go to Square Screen"
    />
    <Button
      onPress={() => navigation.navigate('Text')}
      title="Go to Text Screen"
    />
    <Button
      onPress={() => navigation.navigate('Box')}
      title="Go to Box Screen"
    />
    <Button
      onPress={() => navigation.navigate('Ball')}
      title="Go to Ball Screen"
    />
    
  </View>
    
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
