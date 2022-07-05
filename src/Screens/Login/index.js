import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import Background from '../../../assets/images/two.jpg';
import LoginButton from '../../Components/LoginButton';
import FormLogin from '../../Components/FormLogin';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
  const navigation = useNavigation();

    return (
      <View style={styles.container}>
        <Image 
        source={Background}
        resizeMode= 'stretch'
        style={styles.backGroundImage} />  
        <View style={styles.formWrapper}>
          <FormLogin />
          <TouchableOpacity 
            activeOpacity={0.8}
            style={styles.buttonWrapper}
            onPress={ () => navigation.navigate('Register')}>
              <LoginButton/>
            </TouchableOpacity>
        </View>
     </View>
  );
};



export default Login;