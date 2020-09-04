echo '=========================   SERVICES  ============================='

SERVICE=$1
if [ -z $SERVICE ]
then
	echo "Error: Service must be provided!"
	echo
	echo "	example: sh ./deploy_one.sh basic dev"
    exit 1
fi
echo "service: $SERVICE"
STAGE=$2
if [ -z $STAGE ]
then
	echo "Error: Stage must be provided!"
	echo
	echo "	example: sh ./deploy_one.sh basic dev"
    exit 1
fi
echo "stage: $STAGE"

if [ $SERVICE == 'resources' ]
then
	DIR='resources'
else
	DIR='services'
fi

echo '  -------------   installing project dependencies  ------------- '
npm i
echo "  -------------   deploying $SERVICE service  ------------- "
sls deploy --config templates/$DIR/$SERVICE.yml --stage $STAGE
