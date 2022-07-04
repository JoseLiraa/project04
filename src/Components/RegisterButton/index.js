import React from 'react';
import { View, Text} from 'react-native';
import styles from './styles';

const RegisterButton = () => {
  
    return (
        <View>
            <Text style={styles.textButton}>LOGIN</Text>
            <View style={styles.onlyLine}></View>
       </View>
    );
  };



export default RegisterButton;