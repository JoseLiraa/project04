import React from 'react';
import { View} from 'react-native';
import styles from './styles';
import InputsRegister from '../InputsRegister';
import TitleRegister from '../TitleRegister';

const FormRegister = () => {
  
    return (
        <View style={styles.container}>
          <TitleRegister />
          <InputsRegister />
       </View>
    );
  };



export default FormRegister;