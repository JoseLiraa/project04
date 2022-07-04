import React from 'react';
import { View} from 'react-native';
import styles from './styles';
import InputsLogin from '../InputsLogin';
import TitleLogin from '../TitleLogin';
import OthersLoginButtons from '../OthersLoginButtons';

const FormLogin = () => {
  
    return (
        <View style={styles.container}>
          <TitleLogin />
          <InputsLogin />
          <OthersLoginButtons />
       </View>
    );
  };



export default FormLogin;