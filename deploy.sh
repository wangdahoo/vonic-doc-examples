rm -rf dist/
mkdir dist
cp -rf node_modules/vonic/dist/ionic ./dist

npm run build
