
#Backend part:

1. Domain create
2. Certificate create
3. Deploy functions
4. Deploy health checks
5. Connect records
6. Testing link: https://rti-final-project.com/multiregion/home


---------------------
Full Deployment steps:

-  Domain create
-  Certificate created

-    cd backend-setup
-    npm i
-    serverless deploy -c templates/services/a-north-virginia.yml 
-    serverless deploy -c templates/services/a-oregon.yml
     
-    cd ../frontend-setup
     
-    git checkout rti-final-eu-west 
-    npm i
      # FOR rebuild 
      ## you need to change b-north-virginia.yml and b-oregon.yml 
      ## due to AWS is changing API Gateway name after deploying b-north-virginia.yml and b-oregon.yml for first time
-    npm run build:serverless
-    serverless deploy -c b-north-virginia.yml 


-    git checkout rti-final-eu-east
-    npm i
      # FOR rebuild
      ## you need to change b-north-virginia.yml and b-oregon.yml
      ## due to AWS is changing API Gateway name after deploying b-north-virginia.yml and b-oregon.yml for first time
-    npm run build:serverless
-    serverless deploy -c b-oregon.yml
     
-    cd ../backend-setup
      # setup properties to health checks
-    serverless deploy -c templates/services/c-health-check.yml
    




