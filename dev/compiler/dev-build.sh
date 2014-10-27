# Compile the less file and outupt to dist.css
lessc ../src/less/dev.less > ../../dist.css -x

# Copy the index file
cp -f ../index.html ../../index.html

# Copy the pages
cp -r -f ../pages/. ../../