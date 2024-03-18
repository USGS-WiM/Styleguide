# WIM Styleguide

Had to be moved internal. Now located at [wim-internal.usgs.gov](https://wim-internal.usgs.gov/styleguide)

## Overview
* Built with [Vue](https://vuejs.org/)
* Each "app" is a separate component. Easy to add, remove, or break off into their own apps. 
* Includes some parts of USWDS


## File Structure

### src
* \> src/assets
	* Any images, logos, etc used throughout the project.
* \> src/components
	* Reusable components used throughout
	* /mixins - Vue mixins, small functions to use wherever needed
	* /plugins - Various plugins that have different functions. Converting, debugging, etc
	* /ui - many common interface components used throughout. Modals, alerts, forms, etc
	* filters.js - Vue filters for modifying words and numbers (decimals, title case, etc)
* \> src/store
	* Vue Store files - used to share data between components and pages.
* \> src/styles
	* All common styles, divided into categories. 
	* The `main.scss` file imports all other files. They are imported in order - changes in the order may throw things off (ie reset is the first import to clear all styles, then the following build off eachother)
* \> src/views
	* These are the main apps. They are divided into 3 categories/sub-folders:
		* /guides - all information, not very interactive, pretty simple.
		* /other - miscellaneous - currently holds the UI demo page and the 404 page
		* /tools - Interactive tools/generators. More advanced.
		* Home.vue - The main landing page with a grid of all the apps

## App Explanations & Notes

### Guides
#### Colors
Simple grid showing the colors from this project and their shades. Pretty complex, probably shouldn't be unless a project needs many colors.

#### Components
This app shows examples of some custom Vue compoents. These could be copied to other Vue projects as well.

* Custom multi select with search
* Tooltips
* Callouts

#### Dark Mode
Explanation and code snippets to help implement dark mode in an app.

#### Icons (outdated)
Short guide for using FontAwesome and common icons

#### Logos
Grid with common WIM/USGS logos in multiple resolutions. There is an additional USGS logo on the `Logos.vue` page commented out - just the box logo with no text. We were asked to remove it.

#### Meta
Code snippets with example meta tags to use on projects

#### Printing
Some tips and code snippets for working with applications that need to print or generate pritable reports. Debugging help, and code snippets for a solution we've used in a few apps.

#### Static
A very simple static page with no dependencies that can be used anywhere - for redirects, error messages, etc.

#### USWDS (unfinished/outdated)
Some helpful information about USWDS. 

#### Variables
Information and snippets for setting up CSS variables in your app. Very useful for managing colors and design options in a project. Also required for using dark mode.


### Other

#### /interface/
The main `Interface.vue` file is the main file for the view/app. It imports the other Interface___.vue partials.

This is just an app that shows all the UI elements, colors, and other design compoents.

Good place to view everything at once if you need to tweak font sizes, colors, etc. Also can be used to see or copy code from working components.

#### Error404.vue
This is the error page that the user is redirected to if the page does not exist. The routing is set up in `routes.js`


### Tools

#### Email Signature Generator
Fairly simple app - the form on the left populated the signature design on the right.

Clicking the copy button selects the signature portion and copies it to the clipboard.

Because email signatures support HTML, the entire thing can be pasted into a signature and retain the styles and images.

#### Loaders
A more complex app to create animated loaders.
It uses SVG logos - different paths have IDs or class names that are targeted with CSS to change the styles and animations.

This app uses the `v-style` component, which updates CSS on the page from user inputs using Vue and many different defined {variables} - like speed, color, etc.

The output code is also displayed in a textarea to copy. It updates as the user changes inputs as well.

** note - because the CSS in the text area has to be escaped, the CSS is duplicated two places. Once within the v-style tags, and another in the textarea. If any changes are made, they must match.

#### Markers
Another more advanced app, but it works similarly to the loader app. It just takes user input, uses that to change the source CSS, and outputs it for them to copy.

#### QR Code Generator
Uses the `qrcode.vue` package to generate QR codes.

It puts the code on a `<canvas>` element. Then an image/logo is layered on top. 

QR codes have built in redundancy - so covering some percent of the code with a logo doesn't cause any problems.

When saved, the canvas is flattened and exported as a PNG.


#### Templates
Fairly simple app that generates a block of code for a basic app template based on user inputs.