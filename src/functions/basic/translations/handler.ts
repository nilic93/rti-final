/* eslint-disable import/no-unresolved */
import { DynamoDB } from 'aws-sdk';
import { APIGatewayEvent } from 'aws-lambda';
import { ServiceConfig } from '../../../util/config.service';

export async function translations(event: APIGatewayEvent): Promise<any> {
  const config = process.env.IS_LOCAL === 'true' ? ServiceConfig.getDynamoConnectionConfig() : undefined;
  const client = new DynamoDB.DocumentClient(config);
  try {
    const results = await client.get({ TableName: process.env.RESULT_TABLE_NAME, Key: { email: 'korbisin@gmail.com' } })
      .promise();
    const response = {
      data: results.Item,
    };
    return {
      statusCode: 200,
      body: JSON.stringify(response),
    };
  } catch (error) {
    console.log(JSON.stringify(error));
    throw new Error('InternalServerError');
  }
}
