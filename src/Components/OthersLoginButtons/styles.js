import { StyleSheet } from "react-native";
import colors from "../../../assets/colors/colors"

const styles = StyleSheet.create({
    textContainer:{
        marginTop: 0,
        marginHorizontal: 50,
        flexDirection: 'row',
    },
    text:{
        fontSize: 12,
        color: colors.white,
        marginLeft: 115,
    },
    textButton:{
        fontSize: 12,
        marginTop:0,
        marginLeft: 8,        
        textDecorationLine: 'underline',
        color: colors.white,
    },   
    buttonLogin:{
        backgroundColor: colors.white,
        marginHorizontal: 120,
        marginTop: 15,
    },
    TextButtonLogin:{
        textAlign: "center",
        padding: 8,
        color: colors.red,
        fontWeight: 'bold',
    },
    textTry:{
        fontSize: 12,
        color: colors.white,
        marginTop: 35,
        textAlign: 'center'
    },
    textTrytwo:{
        fontSize: 12,
        color: colors.white,
        marginTop: 80,
        textAlign: 'center'
    },
    buttonContainer:{
        flexDirection: 'row',
        marginHorizontal: 45,
        marginTop: 15,
    },
    buttons:{
        flexDirection: 'row',
        backgroundColor: colors.red,        
        marginHorizontal: 5,
        borderWidth: 1,
        paddingHorizontal: 20,
        paddingVertical: 5,
        borderColor: colors.white,
    },
    TextButton:{
        textAlign: "center",
        marginTop: 5,
        color: colors.white,
        fontWeight: 'bold',
        
    },
    icon:{
        paddingRight:15,
    },
});

export default styles;