import React from 'react';
import { View} from 'react-native';
import styles from './styles';
import InputsRegister from '../InputsRegister';
import TitleLogin from '../TitleLogin';

const FormRegister = () => {
  
    return (
        <View style={styles.container}>
          <TitleLogin title='REGISTER' customStyleButton= {styles.customTitle} customStyleLine= {styles.onlyLine}/>
          <InputsRegister />
       </View>
    );
  };



export default FormRegister;