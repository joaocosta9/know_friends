const { color } = require("react-native-reanimated");
var colors = require("./colors");

module.exports = {
    bold: {
        fontWeight: "bold",
    },
    small_text:{
        fontSize: 20
    },
    big_text_blue:{
        fontSize: 35,
        fontFamily: "Roboto",
        color: colors.dark_blue
    },
    text_center:{
        textAlign: "center",
    },
    first_input:{
        marginLeft: 15,
        borderWidth: 2,
        borderColor: colors.dark_blue
    }
}