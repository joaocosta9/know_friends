import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

module.exports = {
    high_five: {
        width: windowHeight/3,
        height: windowWidth/1.4,
        resizeMode: 'contain'
    }

}