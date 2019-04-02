"use strict";

/*
   New Perspectives on HTML5, CSS3 and JavaScript 6th Edition
   Tutorial 12
   Case Problem 1

   Author: Micah Fischer
   Date:   4-2-19

   Filename: na_styler.js

   Functions
   =========
   
   setStyles()
      Sets up the style sheets and the style sheet switcher.
      
   randInt(size)
      Returns a random integer from 0 up to size-1.

*/

window.onload = setStyles();

function setStyles() {
      // Created an element and appended styles to that element. Used randomInt function to randomly choose a CSS stylesheet on load. Appened the link element to the head of the HTML document. 
      var styleNum = randInt(5);
      var element = document.createElement("link");
      element.setAttribute("rel", "stylesheet");
      element.setAttribute("id", "fancySheet");
      element.setAttribute("href", "na_style_" + styleNum + ".css");
      document.head.appendChild(element);

      // Created a figurebox and set attributes. Append figurebox to div with id of box. Loop through images to generate thumnails for each image. Store css stylesheet names in alt tags. Use an event listener to create thumbnails that change stylesheet based on the thumbnail the user clicks on.
      var figBox = document.createElement("figure");
      figBox.setAttribute("id", "styleThumbs");
      document.getElementById("box").appendChild(figBox);
      for (var i = 0; i <= 4; i++) {
            var sheetImg = document.createElement("img");
            sheetImg.setAttribute("src", "na_small_" + i + ".png");
            sheetImg.setAttribute("alt", "na_style_" + i + ".css");
            sheetImg.addEventListener("click", function (e) {
                  document.getElementById("fancySheet").setAttribute('href', e.target.alt)
            })
            figBox.appendChild(sheetImg);
      }

      // Create a style element in the head. Add CSS styles to the style tag.
      var thumbStyles = document.createElement("style");
      document.head.appendChild(thumbStyles);

      document.styleSheets[document.styleSheets.length - 1].insertRule(
            "figure#styleThumbs {\
                  position: absolute;\
                  left: 0px;\
                  bottom: 0px;\
            }", 0);
      document.styleSheets[document.styleSheets.length - 1].insertRule(
            "figure#styleThumbs img {outline: 1px solid black;\
                  cursor: pointer;\
                  opacity: 0.75;\
            }", 1)
      document.styleSheets[document.styleSheets.length - 1].insertRule(
            "figure#styleThumbs img:hover {\
                  outline: 1px solid red;\
                  opacity: 1.0;\
            }", 2)
}

// Generate random integer.
function randInt(size) {
      return Math.floor(size * Math.random());
}