var React = require('react-native');
var colors = require('./colors');
import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

module.exports = {
  medium_button: {
    width: windowWidth/3,
    height: 50,
    backgroundColor: '#bdb76b',
    justifyContent: 'center',
    marginTop: 20,
    borderRadius:10,
    opacity: 2
  },
};
