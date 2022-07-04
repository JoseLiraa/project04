import React from 'react';
import { TextInput, View} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/Feather';
import colors from "../../../assets/colors/colors";

const InputsLogin = () => {
  
    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput style = {styles.input}
                placeholder = {'Email'}>
                </TextInput>
                <Icon name="user" size={25} color={colors.red} style = {styles.icon}/>
            </View>

            <View style={styles.inputContainer}>
                <TextInput style = {styles.input}
                placeholder = {'Password'}>
                </TextInput>
                <Icon name="eye" size={25} color={colors.red} style = {styles.icon}/>
            </View>
       </View>
    );
  };



export default InputsLogin;