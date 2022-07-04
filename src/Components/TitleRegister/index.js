import React from 'react';
import { View, Text} from 'react-native';
import styles from './styles';

const TitleRegister = () => {
  
    return (
        <View style={styles.container}>
          <Text style={styles.textButton}>REGISTER</Text>
            <View style={styles.onlyLine}></View>
       </View>
    );
  };



export default TitleRegister;