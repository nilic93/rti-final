
#Backend part:

1. Domain create
2. Certificate create
3. Deploy functions
4. Deploy health checks
5. Connect records
6. Testing link: https://rti-final-project.com/multiregion/home


---------------------

1. Domain create
2. Certificate created

3.    cd backend-setup
4.    npm i
5.    serverless deploy -c templates/services/a-north-virginia.yml 
6.    serverless deploy -c templates/services/a-oregon.yml
7.    cd ../frontend-setup
7.    npm i
8.    npm run build:serverless
9.    serverless deploy -c b-north-virginia.yml
10.   serverless deploy -c b-oregon.yml
11.   cd ../backend-setup

      # setup properties to health checks

12.   serverless deploy -c templates/services/c-health-check.yml
    




