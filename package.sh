NAME=$(cat manifest.json | jq -r '.name')
VERSION=$(cat manifest.json | jq -r '.version')
zip -r $NAME.$VERSION.zip . -x .\* \*.DS_Store LICENSE README.md package.sh \*.zip