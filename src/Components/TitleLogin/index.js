import React from 'react';
import { View, Text} from 'react-native';
import styles from './styles';

const TitleLogin = ({title, customStyleLine,customStyleButton }) => {
  
    return (
        <View style={styles.container}>
          <Text style={[styles.textButton, customStyleButton]}>{title}</Text>
            <View style={[styles.onlyLine, customStyleLine]}></View>
       </View>
    );
  };



export default TitleLogin;