echo '=========================   SERVICES  ============================='

STAGE=$1
if [ -z $STAGE ]
then
	echo "Error: Stage must be provided!"
	echo
	echo "	example: sh ./deploy_all.sh dev"
    exit 1
fi
echo "stage: $STAGE"



echo '  -------------   installing project dependencies  ------------- '
npm i
echo '  -------------   deploying resources service  ------------- '
sls deploy --config templates/resources/resources.yml --stage $STAGE

echo '  -------------   deploying basic service  ------------- '
sls deploy --config templates/services/basic.yml --stage $STAGE

#echo '  -------------   deploying backup service  ------------- '  # only stage different
#sls deploy --config templates/services/basic.yml --stage backup

