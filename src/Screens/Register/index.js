import React from 'react';
import { View, StyleSheet, ImageBackground, Dimensions, TouchableOpacity } from 'react-native';
import colors from '../../../assets/colors/colors';
import RegisterButton from '../../Components/RegisterButton';
import FormRegister from '../../Components/FormRegister';

const  height = Dimensions.get("window").height;
const Register = ({navigation}) => {
  
    return (
      <View style={styles.container}>
        <ImageBackground 
        source={require('../../../assets/images/two.jpg')}
        style={styles.backGroundImage}></ImageBackground>    
        <View style={styles.formWrapper}>
            <FormRegister />
            <TouchableOpacity 
            style={styles.buttonWrapper}
            onPress={ () => navigation.navigate('Login')}>
                <RegisterButton/>
            </TouchableOpacity>
        </View>
     </View>
  );
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: colors.white,
    },
    backGroundImage: {
        height: height * 0.4,
    },
    formWrapper: {      
        flex: 1,
        backgroundColor: colors.white,   
        marginTop: -60,
        borderRadius: 60,
    },
    buttonWrapper: {      
        backgroundColor: colors.red,   
        height: height * 0.20,
        marginTop: 70,
        borderRadius: 60,
    },
});

export default Register;