import { StyleSheet } from "react-native";
import colors from "../../../assets/colors/colors"

const styles = StyleSheet.create({
    textButton: {
        color: colors.white,
        fontSize: 20,
        textAlign: "center",
        marginTop: 20,
    },    
    onlyLine:{
        marginHorizontal: 50,
        marginTop: 5,
        borderBottomColor: colors.white,
        borderBottomWidth: 2,
    }
});

export default styles;