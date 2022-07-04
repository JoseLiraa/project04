import React from 'react';
import { TextInput, View, TouchableOpacity, Text} from 'react-native';
import styles from './styles';

const InputsRegister = () => {
  
    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput style = {styles.input}
                placeholder = {'Full Name'}>
                </TextInput>  

                <TextInput style = {styles.input}
                placeholder = {'Username'}>
                </TextInput>   
                
                <TextInput style = {styles.input}
                placeholder = {'Email'}>
                </TextInput>  

                <TextInput style = {styles.input}
                placeholder = {'Password'}>
                </TextInput>   
            </View>

            <TouchableOpacity style={styles.buttonRegister}>
                <Text style={styles.TextButtonRegister}>REGISTER</Text>
            </TouchableOpacity>

            <Text style={styles.textTry}>Already has an account / Swipe up</Text>

       </View>
    );
  };



export default InputsRegister;