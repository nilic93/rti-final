/* eslint-disable import/no-unresolved */
import { DynamoDB } from 'aws-sdk';
import { APIGatewayEvent } from 'aws-lambda';
import { ServiceConfig } from '../../../util/config.service';

export async function getUserResult(event: APIGatewayEvent): Promise<any> {
  const config = process.env.IS_LOCAL === 'true' ? ServiceConfig.getDynamoConnectionConfig() : undefined;
  const client = new DynamoDB.DocumentClient(config);
  try {
    const results = await client.scan({ TableName: process.env.CONTENT_TABLE_NAME })
      .promise();
    const response = {
      data: results,
    };
    return {
      statusCode: 200,
      body: JSON.stringify(response),
    };
  } catch (error) {
    throw new Error('InternalServerError');
  }
}
