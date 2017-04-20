# arabic-dict-chrome
Arabic Dictionary Chrome extension based on open-source dictionary data.
Just hover your cursor over an Arabic word and the translation pops up!

## Arabic Dictionary in action!
![screenshot-image](https://github.com/haikalzain/arabic-dict-chrome/blob/master/images/screenshot.png)

Get it on the Chrome Web Store: 
https://chrome.google.com/webstore/detail/arabic-dictionary/loipjegagmfjcbofhmigjemdfcahcggm/reviews?hl=en

## Usage

Arabic Dictionary is available for download via the Chrome Web Store. Alternatively, if you wish to tinker around with the code, 
just point to the directory using chrome developer tools to add it as an extension.


## How it works

### Word Lookup
The translation files are from the Linguistic Data Consortium (GPLv2) and are stored in src/data as plain text. When a page loads, 
each word is quickly decomposed into prefix + stem + suffix using data from tableab, tableac and tablebc. Note that in Arabic, a particular word could have different decompositions and thus different definitions.
The definitions of the prefix, stem and suffix are looked up and concantenated to form the final definition.

### Display
All Arabic words on the page are wrapped in span tags, some js is injected so that when the user hovers over the mouse, a tooltip with the definitions are shown.

## Wishlist
1. More translation data.
2. Firefox port.

