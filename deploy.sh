#!/bin/bash
echo BUILD
npm run build
echo DEPLOY

if [ -z $1 ]
then
  echo "ERROR: missing parameter stage"
else
  sls deploy --region eu-west-1 --stage $1
fi
