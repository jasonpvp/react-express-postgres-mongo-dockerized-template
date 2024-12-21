#!/bin/sh

isInvalid() {
  if [[ -z $2 ]]; then
    return 0
  fi
  if [[ ! $2 =~ ^[a-zA-Z_][a-zA-Z0-9_]*$ ]]; then
    echo "$1 must match /[a-zA-Z_][a-zA-Z0-9_]*/"
    return 0
  fi
  return 1
}

while isInvalid "App name" $appName; do
  read -p "App name: " appName
done

while isInvalid "DB name" $appDbName; do
  read -p "Web app DB Name: " appDbName
done

read -p "Root DB password: " dbRootPwd
read -p "Web app DB password: " appDbPwd

echo "Replacing WEB_APP_NAME with '$appName'"
grep --exclude rename.sh -rl WEB_APP_NAME ./ | xargs sed -i '' -e s/WEB_APP_NAME/$appName/g

echo "Replacing WEB_APP_ROOT_USER_PWD with '$dbRootPwd'"
grep --exclude rename.sh -rl WEB_APP_ROOT_USER_PWD ./ | xargs sed -i '' -e s/WEB_APP_ROOT_USER_PWD/$dbRootPwd/g

echo "Replacing WEB_APP_DB_NAME with '$appDbName'"
grep --exclude rename.sh -rl WEB_APP_DB_NAME ./ | xargs sed -i '' -e s/WEB_APP_DB_NAME/$appDbName/g

echo "Replacing WEB_APP_DB_PWD with '$appDbPwd'"
grep --exclude rename.sh -rl WEB_APP_DB_PWD ./ | xargs sed -i '' -e s/WEB_APP_DB_PWD/$appDbPwd/g


