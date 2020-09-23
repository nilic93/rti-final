/* eslint-disable import/no-unresolved */
import { DynamoDB } from 'aws-sdk';
import { APIGatewayEvent } from 'aws-lambda';
import { ServiceConfig } from '../../../util/config.service';

export async function results(event: APIGatewayEvent): Promise<any> {
  const config = process.env.IS_LOCAL === 'true' ? ServiceConfig.getDynamoConnectionConfig() : undefined;
  const client = new DynamoDB.DocumentClient(config);
  try {
    const result = await client.scan({ TableName: process.env.RESULT_TABLE_NAME, Select: 'ALL_ATTRIBUTES' })
      .promise();
    return {
      statusCode: 200,
      body: JSON.stringify(result.Items),
    };
  } catch (error) {
    console.log(JSON.stringify(error));
    throw new Error('InternalServerError');
  }
}
