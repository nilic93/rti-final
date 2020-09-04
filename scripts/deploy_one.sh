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

echo '  -------------   installing project dependencies  ------------- '
npm i
echo "  -------------   deploying $SERVICE service  ------------- "
sls deploy --config templates/services/$SERVICE.yml --stage $STAGE
