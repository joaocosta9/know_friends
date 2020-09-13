import {StyleSheet } from "react-native";
var styleguide = require("./modules/styleguide");
var buttons = require("./modules/buttons")
var images = require("./modules/images")
var texts = require("./modules/texts")
//var colors = require("./modules/colors");

//var { StyleSheet } = React;

function addStyle(style_to_add, final_style) {
  for (var key in style_to_add) final_style[key] = style_to_add[key];
}

var styles = {};

// MODULES

addStyle(styleguide, styles);
addStyle(buttons, styles)
addStyle(images, styles)
addStyle(texts, styles)

module.exports = {
  styles: StyleSheet.create(styles),
  //colors: colors
};
