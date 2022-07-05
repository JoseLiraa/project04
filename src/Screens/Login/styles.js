import { StyleSheet, Dimensions } from "react-native";
import colors from '../../../assets/colors/colors';

const  height = Dimensions.get("window").height;

const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: colors.red,
  },
  backGroundImage: {
      height: '40%',
      width: '100%',
  },
  formWrapper: {      
    height: '60%',
      backgroundColor: colors.red,   
      borderRadius: 60,
      marginTop: -60,
  },
  buttonWrapper: {      
      backgroundColor: colors.white,   
      marginTop: 40,
      borderRadius: 60,
      height: '20%',
  },
  });

  export default styles;