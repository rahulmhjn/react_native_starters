import React, {useState} from 'react';
import { View,  Text, StyleSheet, TextInput } from 'react-native';

const TextScreen = () => {

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View>
            <Text>Enter Name:</Text>
            <TextInput
             style={styles.input}  
             autoCapitalize="none"
             autoCorrect={false}
             value= {name}
             onChangeText = {(newValue) => setName(newValue)}
             />
             <Text>My name is {name}</Text>

             <Text>Enter Password:</Text>
            <TextInput
             style={styles.input}  
             autoCapitalize="none"
             autoCorrect={false}
             value= {password}
             onChangeText = {(newValue) => setPassword(newValue)}
             />
             {password.length <= 4
                ?<Text>Password should be greater than 4 digits</Text>
                : null}
             
        </View>
    )
};



const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1
    }
});


export default TextScreen;