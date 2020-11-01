rm -rf .git
git init
npm i
grep -v "init" package.json > tmpfile && mv tmpfile package.json
rmdir .github/
rm ./init.sh