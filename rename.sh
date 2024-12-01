#!/bin/sh
read -p "App name: " appName
read -p "Root DB password: " dbRootPwd
read -p "Web app DB Name: " appDbName
read -p "Web app DB User: " appDbUser
read -p "Web app DB password: " appDbPwd

echo "Replacing WEB_APP_NAME with '$appName'"
grep --exclude rename.sh -rl WEB_APP_NAME ./ | xargs sed -i '' -e s/WEB_APP_NAME/appName/g

echo "Replacing WEB_APP_ROOT_USER_PWD with '$dbRootPwd'"
grep --exclude rename.sh -rl WEB_APP_ROOT_USER_PWD ./ | xargs sed -i '' -e s/WEB_APP_ROOT_USER_PWD/appDbName/g

echo "Replacing WEB_APP_DB_NAME with '$appDbName'"
grep --exclude rename.sh -rl WEB_APP_DB_NAME ./ | xargs sed -i '' -e s/WEB_APP_DB_NAME/appDbName/g

echo "Replacing WEB_APP_DB_USER with '$appDbUser'"
grep --exclude rename.sh -rl WEB_APP_DB_USER ./ | xargs sed -i '' -e s/WEB_APP_DB_USER/appDbUser/g

echo "Replacing WEB_APP_DB_PWD with '$appDbPwd'"
grep --exclude rename.sh -rl WEB_APP_DB_PWD ./ | xargs sed -i '' -e s/WEB_APP_DB_PWD/appDbPwd/g

