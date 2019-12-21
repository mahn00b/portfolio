const withImages = require("next-images")
const withCSS = require("next-typed-css")
const withFonts = require("next-fonts");
const plugins = require('next-compose-plugins')


module.exports = plugins([withImages, withCSS, withFonts]);