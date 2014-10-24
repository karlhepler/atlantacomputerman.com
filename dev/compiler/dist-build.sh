# Run bower to get jQuery and Bootstrap
bower install

# Compile the less file
lessc ../src/less/dev.less > ../../dist.css -x

# Run the javascript compiler and output to main.js
/Library/Internet\ Plug-Ins/JavaAppletPlugin.plugin/Contents/Home/bin/java -jar compiler.jar -W QUIET --js ../src/vendor/jquery/dist/jquery.js ../src/vendor/bootstrap/dist/js/bootstrap.js ../src/js/dev.js --js_output_file ../../dist.js

# Compress the html and put it in root
java -jar htmlcompressor.jar --type html -o ../../index.html ../index.html

# Copy the bootstrap font files
cp -r -f ../src/vendor/bootstrap/fonts ../../