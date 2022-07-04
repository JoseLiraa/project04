import React from 'react';
import { View, Text} from 'react-native';
import styles from './styles';

const TitleLogin = () => {
  
    return (
        <View style={styles.container}>
          <Text style={styles.textButton}>LOGIN</Text>
            <View style={styles.onlyLine}></View>
       </View>
    );
  };



export default TitleLogin;