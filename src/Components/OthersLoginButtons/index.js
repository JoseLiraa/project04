import React from 'react';
import { View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import colors from "../../../assets/colors/colors";
import styles from './styles';

const OthersLoginButtons = () => {
  
    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.text}>Fogot password?</Text>
                <TouchableOpacity>
                    <Text style={styles.textButton}>Click here</Text>
                    </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.buttonLogin}>
                <Text style={styles.TextButtonLogin}>LOGIN</Text>
            </TouchableOpacity>

            <Text style={styles.textTry}>Or try login using</Text>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.buttons}>
                    <Icon name="google" size={25} color={colors.white} style = {styles.icon}/>
                    <Text style={styles.TextButton}>Google</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttons}>
                    <Icon name="facebook-square" size={25} color={colors.white} style = {styles.icon}/>  
                    <Text style={styles.TextButton}>Facebook</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.textTrytwo}>Don't have an accoun / Swipe up</Text>
       </View>
    );
  };



export default OthersLoginButtons;