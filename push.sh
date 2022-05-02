#!/bin/bash

version_type=$1
version=$(npm --no-git-tag-version version $version_type)

git checkout main
git add .
git commit -m $version
git push

git tag $version
git push origin $version

sh ./deploy.sh