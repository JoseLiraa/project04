import { StyleSheet } from "react-native";
import colors from "../../../assets/colors/colors"

const styles = StyleSheet.create({
    container:{
        marginTop: 25,
        marginHorizontal: 50,
    },
    inputContainer:{
        backgroundColor: colors.white,
        marginVertical: 8,
        alignItems: 'center',

    },
    input:{
        marginTop: 15,
        paddingVertical: 8,
        paddingHorizontal: 8,
        width: 250,
        backgroundColor: colors.gray,
        borderRadius: 10,
    },
    buttonRegister:{
        backgroundColor: colors.red,
        marginHorizontal: 70,
        marginTop: 15,
    },
    TextButtonRegister:{
        textAlign: "center",
        padding: 8,
        color: colors.white,
        fontWeight: 'bold',
    },

    textTry:{
        fontSize: 12,
        color: colors.red,
        marginTop: 55,
        textAlign: 'center'
    },
});

export default styles;