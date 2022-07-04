import { StyleSheet } from "react-native";
import colors from "../../../assets/colors/colors"

const styles = StyleSheet.create({
    container:{
        marginTop: 25,
        marginHorizontal: 50,
    },
    inputContainer:{
        backgroundColor: '#fff',
        marginVertical: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 10,

    },
    input:{
        paddingVertical: 8,
        paddingHorizontal: 8,
        width: 250,
        backgroundColor: '#fff',
        borderRadius: 10,
    },
    icon:{
        marginRight: 10,
    }
});

export default styles;