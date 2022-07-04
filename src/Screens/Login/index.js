import React from 'react';
import { View, StyleSheet, ImageBackground, Dimensions, TouchableOpacity } from 'react-native';
import colors from '../../../assets/colors/colors';
import LoginButton from '../../Components/LoginButton';
import FormLogin from '../../Components/FormLogin'

const  height = Dimensions.get("window").height;

const Login = ({navigation}) => {
    return (
      <View style={styles.container}>
        <ImageBackground 
        source={require('../../../assets/images/two.jpg')}
        style={styles.backGroundImage}></ImageBackground>    
        <View style={styles.formWrapper}>
          <FormLogin />
        <TouchableOpacity 
          style={styles.buttonWrapper}
          onPress={ () => navigation.navigate('Register')}>
            <LoginButton/>
          </TouchableOpacity>
        </View>
     </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: colors.red,
},
backGroundImage: {
    height: height * 0.4,
},
formWrapper: {      
    flex: 1,
    backgroundColor: colors.red,   
    borderRadius: 60,
    marginTop: -60,
},
buttonWrapper: {      
    backgroundColor: colors.white,   
    marginTop: 40,
    borderRadius: 60,
    height: height * 0.2,
},
});

export default Login;