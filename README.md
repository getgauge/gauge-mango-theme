# gauge-mango-theme

[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v1.4%20adopted-ff69b4.svg)](code-of-conduct.md)

Following are the technologies used to create this app
  1. Node
  2. Gulp
  3. SASS
  4. Handlebar templates
  5. Gulp plugins for SASS compilation, handlebar compilation, css/js minification

Steps to use this app
  1. Download and install the latest version of Node from https://nodejs.org/en/
  2. Download the latest app
  3. Make sure the app folder contains the write access
  4. Run the command
      npm install (will install gulp, gulp plugins, etc.. all devDependencies from package.json)
  5. Run Gulp  
      gulp <gulp-taskname>

Following are the Gulp Tasks defined in the app
  1. js - Combines all the app js files into one
  2. css - Compiles the SASS files to CSS and combine all the css to one file
  3. minify - minfies the js and css files
  4. watch - to watch the changes in files and trigger build task
  5. build - will run tasks js, css and generateHTML
  6. generateHTML - Will compile the handlebar template and create the html

Once the compilation is done, the output is saved in dist/ folder
