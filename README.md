# Digital driver assistant project

## project includes:
  Serverless template with one hello world lambda in JS(typescript) setup\
  Node version LTS 12.14.1\
  Testing with Jest\
  Pre-commit hook including linter, unit tests, build, audit and pre-commit messages\

## To added or changed
  Lambda handler\
  Test cases\
  Coverage threshold in package.json

## Code guidlines
This project is using airbnb code guidline standard


## Structure guidline
Keep all code connected only to one lambda in one folder.\
\
Project contains 8 separate services:\
\
<u>6 for endpoints:</u> 
#####  basic 

<u>1 for util functions:</u> 
#####  util 

<u>1 for resources: </u> 
#####  resources 

## Deploying project
To deploy dda service properly, first you need to run next script:
##### `sudo chown -R <USER> ./`
deploy all services
##### `sh scripts/deploy_all.sh`




