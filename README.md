# Description
This project is AWS backend part of gamescon application.

It is implemented as part of some AWS services:
- lambda
- RDS PostgreSQL

# Deployment
New deployment of AWS stack could be triggered by command: `yarn deploy` or by running `sh deploy`
This command will create new builds and deploy it on `eu-west-1` as required inside package.json file.
"deploy": "npm run build && sls deploy --region eu-west-1 --stage dzoni" - change your state to your desired state
To make this project successfully work, you will need to have already set AWS secret and access credentials inside you .HOME,
You will need to have created IAM user on your AWS account. (associated with previous AWS credentials)
You will need to have proper .env file inside home of this project.
For DB username, IAM username will be used, the other two: DB name and password you will need to set inside .env.
(You can use .env-example file for creating proper .env file, just rename that file and fill it with proper naming)

# Creating new version on npm
For creating new version on npm, firstly update package.json than run `np --any-branch`.